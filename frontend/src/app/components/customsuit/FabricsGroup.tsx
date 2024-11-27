import React, { useEffect, useState } from 'react';

import { ProductCard } from './ProductCard';

import { products } from '@/app/utils/mockdata/suit-mockdata';
import { Product } from '@/app/utils/types/customsuit';

interface FabricsGroupProps {
  category: string | null;
  onProductInfoToggle?: (info: Product | null) => void;
  onFabricSelect?: (
    name: string,
    price: string,
    id: string,
    image: string,
  ) => void;
}

export const FabricsGroup: React.FC<FabricsGroupProps> = ({
  category,
  onProductInfoToggle,
  onFabricSelect,
}) => {
  const [activeFabric, setActiveFabric] = useState<string | null>(null);

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
        selectedProduct.image,
      );
    }
  };
  useEffect(() => {
    if (filteredProducts.length > 0 && !activeFabric) {
      const firstProduct = filteredProducts[0];
      handleFabricClick(firstProduct.name);
    }
  }, [filteredProducts, activeFabric]);

  const handleInfoClick = (product: Product) => {
    onProductInfoToggle?.(product);
  };

  return (
    <div className="relative w-full">
      <div className="flex hide-scrollbar flex-row gap-1 md:gap-3 lg:flex-col lg:gap-4">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            index={index}
            activeFabric={activeFabric}
            onFabricClick={handleFabricClick}
            onInfoClick={() => handleInfoClick(product)}
          />
        ))}
      </div>
    </div>
  );
};
