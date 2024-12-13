'use client';
import React from 'react';

import { Content } from './';
import { BaseStyleCard, CategoryButton } from './';

import { useFabric } from '@/app/utils/context/fabricContext';

interface MenuSectionProps {
  clothing: 'Jacket' | 'Trousers' | 'Waistcoat';
}

export const MenuSection: React.FC<MenuSectionProps> = ({ clothing }) => {
  const {
    activeSection,
    setActiveSection,
    setSelectedStyle,
    selectedStyle,
    activeCategory,
    setActiveCategory,
  } = useFabric();

  const onEdit = () => {
    console.log(clothing);

    setSelectedStyle((prev) => ({
      ...prev,
      [clothing]: null,
    }));
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <CategoryButton
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="p-2 md:p-4 w-full h-full flex flex-row lg:flex-col gap-3">
          <BaseStyleCard
            styleName={selectedStyle}
            clothing={clothing}
            onEdit={onEdit}
          />
          <Content
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>
    </div>
  );
};