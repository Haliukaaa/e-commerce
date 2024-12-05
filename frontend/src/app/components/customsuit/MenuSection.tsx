'use client';
import React, { useState } from 'react';

import { CategoryButton } from '../general/';

import { FabricContent } from './';

import { useFabric } from '@/app/utils/context/fabricContext';
import { fabricGroups } from '@/app/utils/mockdata/suit-mockdata';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { activeSection, setActiveSection } = useFabric();

  return (
    <div className="flex flex-col h-full">
      <CategoryButton
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Content Area */}
      <div className="flex-1 relative bg-white overflow-hidden">
        <div className="h-full w-full absolute">
          {activeSection === 'Fabric' && (
            <div className="h-full lg:overflow-y-auto overflow-hidden">
              <div className="p-2 lg:p-4 h-full">
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
