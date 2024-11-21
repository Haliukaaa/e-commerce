'use client';
import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { FabricContent } from './';

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

const categories = ['Fabric', 'Jacket', 'Trousers', 'Waistcoat'];

const pageVariants = {
  initial: {
    opacity: 1,
    x: '100%',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 1,
    x: '100%',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4,
};

export const MenuSection: React.FC<MenuSectionProps> = () => {
  const [activeSection, setActiveSection] = useState('Fabric');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="bg-white w-full p-2 h-full overflow-y-auto overflow-hidden">
      {/* Category Navigation Buttons */}
      <div className="flex mb-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`lg:px-[14px] lg:pt-[7px] lg:pb-[11px] xl:px-4 py-2 rounded-full ${
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

      {/* Animated Content Container */}
      <AnimatePresence>
        <motion.div
          key={activeSection}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative"
        >
          {/* Conditional Rendering with Animations */}
          {activeSection === 'Fabric' && (
            <FabricContent
              fabricGroups={fabricGroups}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}

          {/* {activeSection === 'Jacket' && <JacketContent />} */}

          {/* Add similar sections for Trousers and Waistcoat */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MenuSection;
