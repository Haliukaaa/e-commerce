'use client';
import React from 'react';

import { CategoryButton } from '../general';

import { BaseStyleCard, JacketContent } from './';

import { useFabric } from '@/app/utils/context/fabricContext';

export const MenuSection: React.FC = () => {
  const {
    activeSection,
    setActiveSection,
    setSelectedStyle,
    selectedStyle,
    activeCategory,
    setActiveCategory,
  } = useFabric();
  const onEdit = () => {
    setSelectedStyle(null);
  };
  return (
    <div className="flex flex-col h-full">
      {/* Category Navigation Buttons */}
      <div>
        <CategoryButton
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Content Area */}
        <div className="p-2 md:p-4 w-full h-full flex flex-row lg:flex-col gap-3">
          <BaseStyleCard styleName={selectedStyle} onEdit={onEdit} />
          <JacketContent
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
