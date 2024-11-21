'use client';
import React from 'react';

import { ChevronRight } from 'lucide-react';

import { FabricGroup } from '@/app/types/customsuit';

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
      className={`flex items-center rounded-lg p-1 hover:text-gray-400 cursor-pointer ${isDefaultSelected ? 'border-2 border-opacity-100 border-gray-500' : 'border-gray-400 border-2 border-opacity-0'} 
        `}
      onClick={() => onCategoryClick(group.name)}
    >
      <div className="flex gap-1 relative lg:gap-0 rounded-md overflow-hidden flex-wrap w-28 h-28">
        <div className="absolute right-2 px-2 py-[3px] bg-opacity-30 text-xs rounded-[800px] z-20 bg-inherit backdrop-blur top-2 text-white">
          {group.itemCount}
        </div>
        {group.images.map((image, imageIndex) => (
          <div key={imageIndex} className="w-14 h-14">
            <img
              src={image}
              alt={`${group.name} fabric ${imageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="ml-4 flex-grow">
        <div className="text-base font-medium">{group.name}</div>
      </div>
      <ChevronRight className="text-black stroke-1" size={18} />
    </div>
  );
};
