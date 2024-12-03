'use client';
import React from 'react';

import { BaseStyleCard } from './BaseStyleCard';

import { useFabric } from '@/app/utils/context/fabricContext';

const categories = ['Fabric', 'Jacket', 'Trousers', 'Waistcoat'];

export const MenuSection: React.FC = () => {
  const { activeSection, setActiveSection, setSelectedStyle, selectedStyle } =
    useFabric();
  const onEdit = () => {
    setSelectedStyle(null);
  };
  return (
    <div className="flex flex-col h-full">
      {/* Category Navigation Buttons */}
      <div>
        <div className="flex justify-center pt-2 lg:py-2 bg-white lg:border-b sticky top-0 z-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-[12px] md:px-[14px] pt-[5px] md:pt-[7px] pb-[9px] text-sm md:text-base md:pb-[11px] xl:px-4 py-2 rounded-full ${
                activeSection === category
                  ? 'bg-gray-100 text-gray-600 font-medium'
                  : 'text-gray-700'
              }`}
              onClick={() => setActiveSection(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="px-4 md:p-4 w-full h-full">
          <BaseStyleCard styleName={selectedStyle} onEdit={onEdit} />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
