'use client';
import React, { useState } from 'react';

import { ImageSection, MenuSection } from '../components/customsuit';
import { Material, Style } from '../types/customsuit';

const Home = () => {
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null,
  );

  const handleStyleSelect = (style: Style) => {
    setSelectedStyle(style);
  };

  const handleMaterialSelect = (material: Material) => {
    setSelectedMaterial(material);
  };

  return (
    <div className="grid grid-rows-[1fr_auto] grid-cols-1 lg:flex lg:flex-row h-screen">
      {/* Left Section: Image */}
      <div className="flex-1 lg:flex-1 lg:w-[70%] pt-11 lg:pt-[50px]">
        <div className="h-full bg-gray-100 transition-all duration-300">
          <ImageSection
            selectedStyle={selectedStyle}
            selectedMaterial={selectedMaterial}
          />
        </div>
      </div>

      {/* Right Section: Menu */}
      <div className="lg:w-[30%] h-[180px] bg-white lg:pt-[50px] lg:min-h-0 lg:h-full">
        <div className="h-full overflow-hidden">
          <MenuSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
