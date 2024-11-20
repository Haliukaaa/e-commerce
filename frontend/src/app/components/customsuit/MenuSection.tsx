'use client';
import React, { useState } from 'react';

import { FabricGroupCard, NewArrivalsGroup } from './';

import { FabricGroup, Material, Style } from '@/app/types/customsuit';

interface MenuSectionProps {
  onStyleSelect: (style: Style) => void;
  onMaterialSelect: (material: Material) => void;
  selectedStyle: Style | null;
  selectedMaterial: Material | null;
}

const fabricGroups: FabricGroup[] = [
  {
    id: 1,
    name: 'All Fabrics',
    itemCount: 320,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S899.601-4315_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S504.801-360_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S505929.N-2495_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
    ],
  },
  {
    id: 2,
    name: 'New Arrivals',
    itemCount: 29,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.401-57_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S5057-4_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.201-30_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S586.861-780_23',
    ],
  },
  {
    id: 3,
    name: 'Best Sellers',
    itemCount: 19,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S899.601-5730_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/Sdugdale-9412_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S10.712-192_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S595.401-2_23',
    ],
  },
  {
    id: 4,
    name: 'Business',
    itemCount: 24,
    images: [
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S504.801-360_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S2301T.20-52R_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S62694-1_23',
      'https://cdn.suitsupply.com/image/upload/b_rgb:ffffff,c_fit,f_auto,h_450,q_auto:good,w_450/products/cm-sample/default/S599.101-855_23',
    ],
  },
];
export const MenuSection: React.FC<MenuSectionProps> = ({
  onStyleSelect,
  onMaterialSelect,
  selectedStyle,
  selectedMaterial,
}) => {
  const [activeSection, setActiveSection] = useState('Fabric');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

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

  const categories = ['Fabric', 'Jacket', 'Trousers', 'Waistcoat'];

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
    <div className="bg-white w-full p-6 h-full overflow-y-auto">
      <div className="flex mb-4 justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${
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

      {activeSection === 'Fabric' && (
        <>
          {!activeCategory ? (
            <div className="space-y-4">
              {fabricGroups.map((group, index) => (
                <FabricGroupCard
                  key={group.id}
                  group={group}
                  index={index}
                  activeCategory={activeCategory}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </div>
          ) : (
            <div>
              {activeCategory === 'New Arrivals' && <NewArrivalsGroup />}
              {activeCategory === 'Best Sellers' && <BestSellersGroup />}
              {activeCategory === 'Business' && (
                <BusinessComponent /> // Create this component
              )}
              {activeCategory === 'All Fabrics' && (
                <AllFabricsComponent /> // Create this component
              )}
            </div>
          )}
        </>
      )}

      {activeSection === 'style' && (
        <div className="flex lg:flex-col justify-center gap-3">
          {getCurrentStyles().map((style) => (
            <div
              key={style.id}
              onClick={() => onStyleSelect(style)}
              className={`cursor-pointer lg:flex items-center gap-2 rounded-md p-2 ${
                selectedStyle?.id === style.id ? 'border-2 border-gray-300' : ''
              }`}
            >
              <div className="w-32 h-32 rounded-md overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-medium text-blue-600 lg:ml-4">
                {style.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSection;
