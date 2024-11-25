import React, { useState } from 'react';

import { ProductCard } from './ProductCard';

import { products } from '@/app/mockdata/suit-mockdata';
import { Product } from '@/app/types/customsuit';

export const AllFabricsGroup: React.FC<{
  onProductInfoToggle?: (info: Product | null) => void;
  onFabricSelect?: (name: string, price: string) => void;
}> = ({ onProductInfoToggle, onFabricSelect }) => {
  const [activeFabric, setActiveFabric] = useState<string | null>(null);

  const handleFabricClick = (fabric: string) => {
    setActiveFabric(fabric);
    const selectedProduct = products.find((product) => product.name === fabric);
    if (selectedProduct && onFabricSelect) {
      onFabricSelect(selectedProduct.name, selectedProduct.price);
    }
  };

  const handleInfoClick = (product: Product) => {
    onProductInfoToggle?.(product);
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-row gap-1 lg:flex-col lg:gap-4">
        {products.map((product, index) => (
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
