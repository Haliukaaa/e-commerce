import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { FabricsPanel } from './FabricsPanel';
import { FabricCard } from './';

import { FabricGroup, Product } from '@/app/utils/types/customsuit';

interface FabricContentProps {
  fabricGroups: FabricGroup[];
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

const mobileVariants = {
  initial: {
    opacity: 0,
    y: '100vh',
    x: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
  },
  exit: {
    opacity: 0,
    y: '100vh',
    x: 0,
  },
};

const desktopVariants = {
  initial: {
    opacity: 0,
    x: '100%',
    y: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: '100%',
    y: 0,
  },
};

export const FabricContent: React.FC<FabricContentProps> = ({
  fabricGroups,
  activeCategory,
  setActiveCategory,
}) => {
  const [activeProductInfo, setActiveProductInfo] = useState<Product | null>(
    null,
  );

  const getVariants = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(min-width: 1024px)').matches
        ? desktopVariants
        : mobileVariants;
    }
    return desktopVariants;
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleProductInfoToggle = (product: Product | null) => {
    setActiveProductInfo(product);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!activeCategory ? (
          <motion.div
            key="fabric-groups"
            {...getVariants()}
            transition={pageTransition}
            className="space-y-1 flex lg:flex-col overflow-y-auto"
          >
            {fabricGroups.map((group, index) => (
              <FabricCard
                key={group.id}
                group={group}
                index={index}
                onCategoryClick={handleCategoryClick}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="product-info"
            {...getVariants()}
            transition={pageTransition}
            className="fixed h-[180px] lg:h-auto bottom-0 lg:top-[49px] right-0 w-full lg:w-[30%] bg-white z-20 overflow-hidden"
          >
            <FabricsPanel
              handleProductInfoToggle={handleProductInfoToggle}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Info Overlay */}
      <AnimatePresence>
        {activeProductInfo && (
          <motion.div
            key="product-info"
            {...getVariants()}
            transition={pageTransition}
            className="fixed top-11 lg:top-[50px] right-0 bottom-0 w-full lg:w-[30%] bg-white z-20 overflow-y-auto"
          >
            <div>
              <div className="relative">
                <div className="bg-white z-10">
                  <button
                    onClick={() => setActiveProductInfo(null)}
                    className="absolute top-4 right-4 text-gray-700 bg-white rounded-full px-3 py-[6px]"
                  >
                    ✕
                  </button>
                </div>
                <img
                  src={activeProductInfo.image}
                  alt={activeProductInfo.name}
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <div className="mt-6 mx-5">
                <h2 className="text-2xl font-semibold mb-2">
                  {activeProductInfo.name}
                </h2>
                <p className="text-gray-600 mb-4">${activeProductInfo.price}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg mb-2">Description</h3>
                    <p>{activeProductInfo.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-lg mb-2">Composition</h3>
                      <p>{activeProductInfo.composition}</p>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg mb-2">
                        Care Instructions
                      </h3>
                      <p>{activeProductInfo.care}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
