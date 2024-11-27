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
            className="fixed h-[180px] md:h-[244px] lg:h-auto bottom-0 lg:top-[49px] right-0 w-full lg:w-[30%] bg-white z-20 overflow-hidden"
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
            className="fixed top-11 lg:top-[50px] opacity-100 transition-opacity duration-100 rounded-lg lg:rounded-none right-0 bottom-0 w-full lg:w-[30%] bg-black/20 lg:bg-white z-20 overflow-y-auto"
          >
            <div className="h-[70vh] fixed w-full bottom-0 rounded-lg lg:rounded-none lg:static bg-white lg:h-auto overflow-y-auto">
              <div>
                <div className="relative mx-5 lg:mx-0 mt-5 overflow-hidden rounded-md lg:rounded-none lg:mt-0">
                  <div className="w-full">
                    <div className="bg-white z-10">
                      <button
                        onClick={() => setActiveProductInfo(null)}
                        className="absolute top-5 right-5 lg:top-4 lg:right-4 text-gray-700 bg-white rounded-full px-3 py-[6px]"
                      >
                        ✕
                      </button>
                    </div>
                    <img
                      src={activeProductInfo.image}
                      alt={activeProductInfo.name}
                      className="w-full max-h-[147px] lg:max-h-full lg:h-auto lg:aspect-square object-cover"
                    />
                  </div>
                </div>
                <div className="my-6 mx-5">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    {activeProductInfo.name}
                  </h2>
                  <p className="text-gray-600 text-xl mt-2 mb-6">
                    ${activeProductInfo.price}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-base">Description</h3>
                      <p className="font-light">
                        {activeProductInfo.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-base">Composition</h3>
                        <p className="font-light">
                          {activeProductInfo.composition}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium text-base">
                          Care Instructions
                        </h3>
                        <p className="font-light">{activeProductInfo.care}</p>
                      </div>
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
