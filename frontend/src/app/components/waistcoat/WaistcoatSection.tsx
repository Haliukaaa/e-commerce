'use client';
import React from 'react';

import { CategoryButton, Content } from '../general';

import { WaistcoatRemove, WaistcoatSelection } from '.';

import { useFabric } from '@/app/utils/context/fabricContext';

export const WaistcoatSection: React.FC = () => {
  const {
    activeSection,
    setActiveSection,
    setSelectedStyle,
    selectedStyle,
    activeCategory,
    setActiveCategory,
  } = useFabric();

  const onEdit = () => {
    setSelectedStyle((prev) => ({
      ...prev,
      ['Waistcoat']: true,
    }));
    console.log(selectedStyle);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <CategoryButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="w-full h-full overflow-hidden">
        {selectedStyle.Waistcoat === true ? (
          <div className="lg:overflow-y-auto w-full h-full">
            <div className="p-2 md:p-4 flex flex-row lg:flex-col gap-3">
              <WaistcoatRemove setSelectedStyle={setSelectedStyle} />
              <Content
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </div>
        ) : (
          <div className="p-2 md:p-4 h-full flex items-center flex-row lg:flex-col gap-3 justify-center">
            <WaistcoatSelection onEdit={() => onEdit()} />
          </div>
        )}
      </div>
    </div>
  );
};
