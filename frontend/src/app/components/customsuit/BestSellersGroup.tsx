import React, { useState } from 'react';

import { ProductCard } from './ProductCard';

import { Product } from '@/app/types/customsuit';

export const BestSellersGroup: React.FC<{
  onProductInfoToggle?: (info: Product | null) => void;
}> = ({ onProductInfoToggle }) => {
  const products: Product[] = [
    {
      id: '1320',
      name: `Black Pure S120's Wool Flannel`,
      price: '873',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S899.601-5730_23',
      description:
        'A lightweight, breathable tropical wool perfect for warm climates.',
      composition: '100% Pure Wool',
      care: 'Dry clean only, avoid direct sunlight',
    },
    {
      id: '1357',
      name: 'Black Herringbone Pure Wool',
      price: '1073',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/Sdugdale-9412_23',
      description: `Luxurious S110's wool with exceptional softness and durability.`,
      composition: '100% S110 Wool',
      care: 'Professional dry cleaning recommended',
    },
    {
      id: '1630',
      name: `Light Grey Pure S110's Wool`,
      price: '873',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S10.712-192_23',
      description: 'Elegant light blue tropical wool, ideal for summer suits.',
      composition: '100% Pure Wool',
      care: 'Gentle dry clean, store on wide hangers',
    },
    {
      id: '1661',
      name: 'Light Grey Pure Tropical Wool',
      price: '673',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.401-2_23',
      description: `Classic mid-blue S110's wool for versatile, refined styling.`,
      composition: '100% S110 Wool',
      care: 'Professional dry cleaning, avoid moisture',
    },
  ];

  const [activeFabric, setActiveFabric] = useState<string | null>(null);

  const handleFabricClick = (fabric: string) => {
    setActiveFabric(fabric);
  };

  const handleInfoClick = (product: Product) => {
    onProductInfoToggle?.(product);
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-row lg:flex-col lg:gap-4">
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
