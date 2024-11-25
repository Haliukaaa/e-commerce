'use client';
import React, { useState } from 'react';

import { FabricContent } from './';

import { fabricGroups } from '@/app/mockdata/suit-mockdata';

const categories = ['Fabric', 'Jacket', 'Trousers', 'Waistcoat'];

export const MenuSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Fabric');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full">
      {/* Category Navigation Buttons */}
      <div className="flex justify-center pt-2 lg:py-2 bg-white lg:border-b sticky top-0 z-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-[12px] lg:px-[14px] pt-[5px] lg:pt-[7px] pb-[9px] text-sm lg:text-base lg:pb-[11px] xl:px-4 py-2 rounded-full ${
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
      <div className="flex-1 relative overflow-hidden">
        <div className="h-full w-full absolute">
          {activeSection === 'Fabric' && (
            <div className="h-full overflow-y-auto overflow-hidden">
              <div className="p-2 lg:p-4">
                <FabricContent
                  fabricGroups={fabricGroups}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
