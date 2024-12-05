import React, { useMemo, useState } from 'react';

import { DetailCard } from '.';

import { useFabric } from '@/app/utils/context/fabricContext';
import { jacket } from '@/app/utils/mockdata/suit-mockdata';
import { VariationKey } from '@/app/utils/types/customsuit';

interface CardGroupProps {
  category: string | null;
}

export const DetailCardGroup: React.FC<CardGroupProps> = ({ category }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { variations } = useFabric();

  const filteredJackets = useMemo(() => {
    const jacketItem = jacket.find((j) => j.name === category);

    if (!jacketItem) return [];

    const variationKey: VariationKey | null =
      category === 'Доторлогоо'
        ? 'Доторлогоо'
        : category === 'Товч'
          ? 'Товч'
          : category === 'Энгэр'
            ? 'Энгэр'
            : null;

    if (
      variationKey &&
      jacketItem.variations &&
      !Array.isArray(jacketItem.variations)
    ) {
      return (
        jacketItem.variations[
          variations[variationKey] as keyof typeof jacketItem.variations
        ] || []
      );
    }

    if (Array.isArray(jacketItem.variations)) {
      return jacketItem.variations;
    }

    return Object.values(jacketItem.variations).flatMap(
      (variation) => variation || [],
    );
  }, [category, variations]);

  const handleCardSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-row gap-1 md:gap-2 lg:gap-3 lg:flex-col">
        {filteredJackets.map((variation, index) => {
          return (
            <DetailCard
              key={variation.url || index}
              imageSrc={variation.url || ''}
              title={variation.name}
              description={variation.description}
              isSelected={selectedIndex === index}
              onSelect={() => handleCardSelect(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
