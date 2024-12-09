import React from 'react';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { useFabric } from '@/app/utils/context/fabricContext';
import { CategoryType } from '@/app/utils/types/customsuit';

interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
}

export const CategoryCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt = '',
  title,
}) => {
  const { jacketSelection, activeCategory } = useFabric();

  const renderSelection = (category: CategoryType): string => {
    if (!category) return '';

    if (typeof category === 'string') {
      return category;
    }

    const firstValue = Object.values(category)?.[0];
    return firstValue || '';
  };

  type JacketSelectionKeys = keyof typeof jacketSelection.selection;

  const key = activeCategory || (title.replace(/\s+/g, '') as string);

  const selectionToRender =
    key in jacketSelection.selection
      ? jacketSelection.selection[key as JacketSelectionKeys]
      : undefined;

  return (
    <div className="relative h-full flex flex-col lg:flex-row group items-center">
      <div className="lg:h-full md:h-[116px] md:w-[116px] overflow-hidden aspect-square h-[88px] w-[88px] rounded-md">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={116}
          height={116}
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-grow px-4 pt-3">
        <div className="text-lg font-semibold group-hover:text-gray-400 text-gray-800">
          {title}
        </div>
        {selectionToRender && (
          <p className="hidden lg:block text-gray-600 group-hover:text-gray-400 text-xs">
            {renderSelection(selectionToRender)}
          </p>
        )}
      </div>
      <div>
        <ChevronRight className="hidden lg:block stroke-1" />
      </div>
    </div>
  );
};
