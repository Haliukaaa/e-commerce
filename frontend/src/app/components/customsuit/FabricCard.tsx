'use client';
import React from 'react';

import { ChevronRight } from 'lucide-react';

import { FabricGroup } from '@/app/utils/types/customsuit';

export const FabricCard = ({
  group,
  index,
  onCategoryClick,
}: {
  group: FabricGroup;
  index: number;
  onCategoryClick: (category: string) => void;
}) => {
  const isDefaultSelected = index === 0;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center rounded-lg hover:text-gray-400 cursor-pointer ${isDefaultSelected ? 'lg:border-2 lg:border-opacity-100 lg:border-gray-500' : 'border-gray-400 border lg:border-2 border-opacity-0'} 
        `}
      onClick={() => onCategoryClick(group.name)}
    >
      <div
        className={`flex relative rounded-[4px] gap-0 lg:border-opacity-0 ${isDefaultSelected ? 'border lg:border-2 border-opacity-100 border-gray-500' : 'border-gray-400 border lg:border-2 border-opacity-0'} p-1 lg:rounded-md overflow-hidden w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32`}
      >
        <div className="absolute right-2 px-2 py-[3px] bg-opacity-30 text-xs rounded-full z-20 bg-inherit backdrop-blur top-2 text-white">
          {group.itemCount}
        </div>
        <div className="rounded-[4px] overflow-hidden flex flex-wrap">
          {group.images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className="w-[43px] h-[43px] md:w-[51px] md:h-[51px] lg:w-[58px] lg:h-[58px]"
            >
              <img
                src={image}
                alt={`${group.name} fabric ${imageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ml-4 flex-grow">
        <div className="text-sm lg:text-base font-medium">{group.name}</div>
      </div>
      <ChevronRight className="text-black hidden stroke-1" size={18} />
    </div>
  );
};
