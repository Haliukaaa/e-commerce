import React, { useState } from 'react';

import { ProductCard } from './';

import { Product } from '@/app/types/customsuit';

export const BusinessGroup: React.FC<{
  onProductInfoToggle?: (info: Product | null) => void;
}> = ({ onProductInfoToggle }) => {
  const products = [
    {
      id: '1420',
      name: 'Light Brown Circular Wool Flannel',
      price: '873',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S504.801-360_23',
      description:
        'A lightweight, breathable tropical wool perfect for warm climates.',
      composition: '100% Pure Wool',
      care: 'Dry clean only, avoid direct sunlight',
    },
    {
      id: '1457',
      name: 'Off-White Herringbone Pure Wool',
      price: '873',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
      description:
        'A lightweight, breathable tropical wool perfect for warm climates.',
      composition: '100% Pure Wool',
      care: 'Dry clean only, avoid direct sunlight',
    },
    {
      id: '1410',
      name: 'Mid Grey Check Wool Cashmere',
      price: '1033',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S62694-1_23',
      description:
        'A lightweight, breathable tropical wool perfect for warm climates.',
      composition: '100% Pure Wool',
      care: 'Dry clean only, avoid direct sunlight',
    },
    {
      id: '1411',
      name: `Dark Blue Pure S120's Wool Flannel`,
      price: '873',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S599.101-855_23',
      description:
        'A lightweight, breathable tropical wool perfect for warm climates.',
      composition: '100% Pure Wool',
      care: 'Dry clean only, avoid direct sunlight',
    },
  ];

  const [activeFabric, setActiveFabric] = useState<string | null>(null);

  const handleFabricClick = (fabric: string) => {
    setActiveFabric(fabric);
    console.log(fabric);
  };
  const handleInfoClick = (product: Product) => {
    onProductInfoToggle?.(product);
  };

  return (
    <div className="w-full">
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
