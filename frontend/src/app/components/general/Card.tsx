import React from 'react';

import { CategoryCard } from '.';

import { useFabric } from '@/app/utils/context/fabricContext';
import { JacketType, TrouserType } from '@/app/utils/types/customsuit';

interface CardProps {
  group: JacketType | TrouserType;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Card: React.FC<CardProps> = ({ group, setActiveCategory }) => {
  const { activeSection } = useFabric();
  return (
    <div
      className="cursor-pointer"
      onClick={() => setActiveCategory(group.name)}
    >
      <CategoryCard
        imageSrc={group.image}
        imageAlt={group.name}
        title={group.name}
        type={activeSection}
      />
    </div>
  );
};
