import React, { useMemo } from 'react';

import { DetailCard } from '.';

import { useFabric } from '@/app/utils/context/fabricContext';
import {
  jacket,
  trousers,
  waistcoat,
} from '@/app/utils/mockdata/suit-mockdata';
import { VariationKey } from '@/app/utils/types/customsuit';

interface CardGroupProps {
  category: string | null;
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onSelect: (category: string, option: string, index: number) => void;
}

export const DetailCardGroup: React.FC<CardGroupProps> = ({
  category,
  selectedIndex,
  onSelect,
}) => {
  const { variations, activeSection } = useFabric();

  const filteredItems = useMemo(() => {
    const isJacketCategory = jacket.some((j) => j.name === category);
    const isTrouserCategory = trousers.some((t) => t.name === category);
    const isWaistcoatCategory = waistcoat.some((k) => k.name === category);

    let item;
    if (isJacketCategory && activeSection === 'Jacket') {
      item = jacket.find((j) => j.name === category);
    } else if (isTrouserCategory && activeSection === 'Trousers') {
      item = trousers.find((t) => t.name === category);
    } else if (isWaistcoatCategory && activeSection === 'Waistcoat') {
      item = waistcoat.find((k) => k.name === category);
    }

    if (!item) return [];

    const variationKey: VariationKey | null =
      category === 'Доторлогоо'
        ? 'Доторлогоо'
        : category === 'Товч'
          ? 'Товч'
          : category === 'Энгэр'
            ? 'Энгэр'
            : category === 'Бүсэлхий'
              ? 'Бүсэлхий'
              : null;

    if (variationKey && item.variations && !Array.isArray(item.variations)) {
      return (
        item.variations[
          variations[variationKey] as keyof typeof item.variations
        ] || []
      );
    }

    if (Array.isArray(item.variations)) {
      return item.variations;
    }

    return Object.values(item.variations).flatMap(
      (variation) => variation || [],
    );
  }, [category, variations]);

  return (
    <div className="relative w-full">
      <div className="flex flex-row gap-1 md:gap-2 lg:gap-3 lg:flex-col">
        {filteredItems.map((variation, index) => {
          if (!category) return null;
          return (
            <DetailCard
              key={variation.url || index}
              imageSrc={variation.url || ''}
              title={variation.name}
              description={variation.description}
              isSelected={selectedIndex === index}
              onSelect={() => onSelect(category, variation.name, index)}
            />
          );
        })}
      </div>
    </div>
  );
};
