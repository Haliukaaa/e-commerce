import React, { useEffect, useRef, useState } from 'react';

import { ProductCard } from './ProductCard';

import { useFabric } from '@/app/utils/context/fabricContext';
import { products } from '@/app/utils/mockdata/suit-mockdata';
import { Product } from '@/app/utils/types/customsuit';

interface FabricsGroupProps {
  category: string | null;
  onProductInfoToggle?: (info: Product | null) => void;
  onFabricSelect?: (
    name: string,
    price: string,
    id: string,
    images: {
      fabric: { layer: string; url: string };
      jacket: { layer: string; url: string }[];
      trousers: { layer: string; url: string }[];
    },
  ) => void;
}

export const FabricsGroup: React.FC<FabricsGroupProps> = ({
  category,
  onProductInfoToggle,
  onFabricSelect,
}) => {
  const { selectedFabric } = useFabric();
  const [activeFabric, setActiveFabric] = useState<string | null>(null);
  const fabricRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredProducts = React.useMemo(() => {
    if (category === 'All Fabrics') {
      return products;
    }

    if (category === 'New Arrivals') {
      return products.slice(0, 10);
    }

    return products.filter((product) =>
      product.category?.some(
        (cat) => cat.toLowerCase() === category?.toLowerCase(),
      ),
    );
  }, [category]);

  const handleFabricClick = (fabric: string) => {
    setActiveFabric(fabric);
    const selectedProduct = filteredProducts.find(
      (product) => product.name === fabric,
    );
    if (selectedProduct && onFabricSelect) {
      onFabricSelect(
        selectedProduct.name,
        selectedProduct.price,
        selectedProduct.id,
        selectedProduct.images,
      );
    }
  };

  useEffect(() => {
    if (filteredProducts.length === 0) {
      setActiveFabric(null);
      return;
    }

    const globalFabricInCurrentCategory = filteredProducts.find(
      (product) => product.name === selectedFabric?.name,
    );

    if (globalFabricInCurrentCategory) {
      const fabricToActivate = globalFabricInCurrentCategory.name;
      setActiveFabric(fabricToActivate);

      setTimeout(() => {
        const fabricElement = fabricRefs.current[fabricToActivate];
        if (fabricElement) {
          fabricElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          });
        }
      }, 400);
    } else {
      const firstProduct = filteredProducts[0];
      handleFabricClick(firstProduct.name);
    }
  }, [filteredProducts, category, selectedFabric]);

  const handleInfoClick = (product: Product) => {
    onProductInfoToggle?.(product);
  };

  return (
    <div className="relative w-full">
      <div className="flex hide-scrollbar flex-row gap-1 md:gap-3 lg:flex-col lg:gap-4">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => {
              fabricRefs.current[product.name] = el;
            }}
          >
            <ProductCard
              images={product.images}
              name={product.name}
              price={product.price}
              index={index}
              activeFabric={activeFabric}
              onFabricClick={handleFabricClick}
              onInfoClick={() => handleInfoClick(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
