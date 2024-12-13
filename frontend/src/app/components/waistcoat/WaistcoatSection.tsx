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
    <div className="flex flex-col h-full">
      <div>
        <CategoryButton
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        {selectedStyle.Waistcoat === true ? (
          <>
            <div className="p-2 md:p-4 w-full h-full flex flex-row lg:flex-col gap-3">
              <WaistcoatRemove setSelectedStyle={setSelectedStyle} />
              <Content
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </>
        ) : (
          <>
            <div className="p-2 md:p-4 w-full h-[90%] lg:h-[80dvh] flex items-center flex-row lg:flex-col gap-3 justify-center">
              <WaistcoatSelection onEdit={() => onEdit()} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
