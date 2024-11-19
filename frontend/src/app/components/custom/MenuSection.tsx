'use client';
import React, { useState } from 'react';

interface Style {
  id: number;
  name: string;
  stylePrefix: string;
  image?: string;
}

interface Material {
  id: number;
  name: string;
  price: string;
  fabricNumber: number;
  image?: string;
}

interface MenuSectionProps {
  onStyleSelect: (style: Style) => void;
  onMaterialSelect: (material: Material) => void;
  selectedStyle: Style | null;
  selectedMaterial: Material | null;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onStyleSelect,
  onMaterialSelect,
  selectedStyle,
  selectedMaterial,
}) => {
  const [activeSection, setActiveSection] = useState('material');

  const styles = [
    { id: 1, name: 'Classic Fit', stylePrefix: 'style1' },
    { id: 2, name: 'Slim Fit', stylePrefix: 'style2' },
    { id: 3, name: 'Modern Fit', stylePrefix: 'style3' },
  ];

  const materialInfo = [
    { id: 1, name: 'Cotton', price: '$799', fabricNumber: 1 },
    { id: 2, name: 'Wool', price: '$899', fabricNumber: 2 },
    { id: 3, name: 'Cashmere', price: '$999', fabricNumber: 3 },
    { id: 4, name: 'Linen', price: '$849', fabricNumber: 4 },
    { id: 5, name: 'Silk', price: '$1299', fabricNumber: 5 },
    { id: 6, name: 'Polyester', price: '$699', fabricNumber: 6 },
  ];

  // Get materials for selected style
  const getCurrentMaterials = () => {
    return materialInfo.map((material) => ({
      ...material,
      image: `/fab${material.fabricNumber}.png`,
    }));
  };

  // Get styles with selected material
  const getCurrentStyles = () => {
    if (!selectedMaterial) {
      return styles.map((style) => ({
        ...style,
        image: `/${style.stylePrefix}-fab1.png`,
      }));
    }

    return styles.map((style) => ({
      ...style,
      image: `/${style.stylePrefix}-fab${selectedMaterial.fabricNumber}.png`,
    }));
  };

  return (
    <div className="bg-white overflow-hidden overflow-x-auto w-full p-6 h-full overflow-y-auto">
      <div className="flex gap-4 mb-4 justify-center">
        <button
          className={`w-fit rounded-xl py-0 px-5 text-info transition-all duration-300 ease-in-out ${activeSection === 'material' ? ' text-primary bg-neutral' : 'text-black'}`}
          onClick={() => setActiveSection('material')}
        >
          Материал
        </button>
        <button
          className={`w-fit rounded-xl py-0 px-5 transition-all duration-300 ease-in-out text-info ${activeSection === 'style' ? 'bg-neutral text-primary' : 'text-black'}`}
          onClick={() => setActiveSection('style')}
        >
          Загвар
        </button>
      </div>

      {activeSection === 'material' && (
        <div className="space-y-6">
          <div className="flex flex-row overflow-x-auto gap-3 justify-center lg:flex-nowrap lg:flex-col lg:justify-start">
            {getCurrentMaterials().map((material) => (
              <div
                key={material.id}
                onClick={() => onMaterialSelect(material)}
                className={`cursor-pointer transition-all gap-3 w-fit lg:w-auto flex items-center ${
                  selectedMaterial?.id === material.id
                    ? 'border-2 border-neutral-300'
                    : ''
                } rounded-md p-2`}
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 sm:w-30 sm:h-30 lg:w-32 lg:h-32 rounded-md overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden lg:flex flex-col">
                  <p className="text-lg font-medium text-primary">
                    {material.name}
                  </p>
                  <p className="text-sm text-info">{material.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center lg:hidden">
            {selectedMaterial ? (
              <div>
                <p className="text-lg font-medium">{selectedMaterial.name}</p>
                <p className="text-gray-600">{selectedMaterial.price}</p>
              </div>
            ) : (
              <p className="text-gray-500">Select a material</p>
            )}
          </div>
        </div>
      )}

      {activeSection === 'style' && (
        <div>
          <div className="flex lg:flex-col justify-center gap-3">
            {getCurrentStyles().map((style) => (
              <div
                key={style.id}
                onClick={() => onStyleSelect(style)}
                className={`cursor-pointer lg:flex items-center gap-2 rounded-md p-2 transition-all ${
                  selectedStyle?.id === style.id
                    ? 'border-2 border-neutral-300'
                    : ''
                }`}
              >
                <div className="w-24 h-24 sm:h-28 sm:w-28 md:w-32 md:h-32 lg:w-32 lg:h-32 rounded-md overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-medium text-primary lg:ml-4">
                  {style.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
