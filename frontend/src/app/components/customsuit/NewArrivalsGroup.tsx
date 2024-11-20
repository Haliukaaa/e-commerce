import React, { useState } from 'react';

import { ProductCard } from './';

export const NewArrivalsGroup = () => {
  const [activeFabric, setActiveFabric] = useState<string | null>(null);
  const handleFabricClick = (fabric: string) => {
    setActiveFabric(fabric);
  };

  const products = [
    {
      id: '1620',
      name: 'Sand Pure Wool',
      price: '873',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S505929.N-2495_23',
      isSelected: true,
    },
    {
      id: '1557',
      name: 'Off-White Herringbone Pure Wool',
      price: '873',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
    },
    {
      id: '1610',
      name: 'Mid Grey Check Wool Cashmere',
      price: '1033',
      image:
        'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S62694-1_23',
    },
  ];

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
            onFabrickClick={handleFabricClick}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsGroup;
