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
    <div className="flex flex-col h-full lg:flex-row lg:h-screen pt-11 lg:pt-[50px]">
      {/* Left Section: Image */}
      <div className="w-full flex-grow lg:w-[67%] xl:w-[70%] h-64 lg:h-full bg-gray-100">
        <ImageSection
          selectedStyle={selectedStyle}
          selectedMaterial={selectedMaterial}
        />
      </div>

      {/* Right Section: Menu */}
      <div className="w-full flex-shrink lg:w-[33%] xl:w-[30%] bg-white h-auto lg:h-full overflow-y-auto">
        <MenuSection
          selectedStyle={selectedStyle}
          selectedMaterial={selectedMaterial}
          onStyleSelect={handleStyleSelect}
          onMaterialSelect={handleMaterialSelect}
        />
      </div>
    </div>
  );
};

export default Home;
