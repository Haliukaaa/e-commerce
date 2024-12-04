import React, { useMemo } from 'react';

import { DetailCard } from './';

import { jacket } from '@/app/utils/mockdata/suit-mockdata';

interface CardGroupProps {
  category: string | null;
}

export const CardGroup: React.FC<CardGroupProps> = ({ category }) => {
  const filteredJackets = useMemo(() => {
    const jacketItem = jacket.find((j) => j.name === category);

    if (!jacketItem) return [];
    if (Array.isArray(jacketItem.variations)) {
      return jacketItem.variations;
    }

    return Object.values(jacketItem.variations).flatMap(
      (variations) => variations || [],
    );
  }, [category]);

  return (
    <div className="relative w-full">
      <div className="flex flex-row gap-1 md:gap-2 lg:gap-3 lg:flex-col">
        {filteredJackets.map((variation, index) => {
          return (
            <DetailCard
              imageSrc={variation.url || ''}
              imageAlt={variation.name}
              title={variation.name}
              description={variation.description}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
