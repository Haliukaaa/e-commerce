import React from 'react';

import { CategoryCard } from './';

import { JacketType } from '@/app/utils/types/customsuit';

interface JacketCardProps {
  group: JacketType;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const JacketCard: React.FC<JacketCardProps> = ({
  group,
  setActiveCategory,
}) => {
  console.log(group.name);

  return (
    <div
      className="cursor-pointer"
      onClick={() => setActiveCategory(group.name)}
    >
      <CategoryCard
        imageSrc={group.image}
        imageAlt={group.name}
        title={group.name}
      />
    </div>
  );
};
