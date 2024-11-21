import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Search, ListFilter } from 'lucide-react';

import {
  AllFabricsGroup,
  BestSellersGroup,
  BusinessGroup,
  FabricCard,
  NewArrivalsGroup,
} from './';

import { FabricGroup, Product } from '@/app/types/customsuit';

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

interface FabricContentProps {
  fabricGroups: FabricGroup[];
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FabricContent: React.FC<FabricContentProps> = ({
  fabricGroups,
  activeCategory,
  setActiveCategory,
}) => {
  const [activeProductInfo, setActiveProductInfo] = useState<Product | null>(
    null,
  );

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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={pageTransition}
            className="space-y-1 overflow-y-auto"
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
          //   <motion.div
          //     key="category-detail"
          //     initial={{ opacity: 0, x: '100%' }}
          //     animate={{ opacity: 1, x: 0 }}
          //     exit={{ opacity: 0, x: '-100%' }}
          //     transition={pageTransition}
          //     className="relative"
          //   >
          //     {activeCategory === 'All Fabrics' && (
          //       <AllFabricsGroup onProductInfoToggle={handleProductInfoToggle} />
          //     )}
          //     {activeCategory === 'New Arrivals' && (
          //       <NewArrivalsGroup onProductInfoToggle={handleProductInfoToggle} />
          //     )}
          //     {activeCategory === 'Best Sellers' && (
          //       <BestSellersGroup onProductInfoToggle={handleProductInfoToggle} />
          //     )}
          //     {activeCategory === 'Business' && (
          //       <BusinessGroup onProductInfoToggle={handleProductInfoToggle} />
          //     )}
          //   </motion.div>
          <motion.div
            key="product-info"
            initial={{ opacity: 1, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: '100%' }}
            transition={pageTransition}
            className="fixed top-11 lg:top-[50px] right-0 bottom-0 w-full lg:w-[30%] bg-white z-20 overflow-y-auto"
          >
            <div className="flex lg:h-[42px] mb-4 justify-between pt-7 pb-[17px] px-5">
              <div className="flex justify-center items-center">
                <Search />
              </div>
              <div className="flex justify-center items-center">
                All Fabrics
              </div>
              <div className="flex justify-center items-center">
                <ListFilter />
              </div>
            </div>
            <div className="p-2">
              <div className="relative">
                {activeCategory === 'All Fabrics' && (
                  <AllFabricsGroup
                    onProductInfoToggle={handleProductInfoToggle}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Info Overlay */}
      <AnimatePresence>
        {activeProductInfo && (
          <motion.div
            key="product-info"
            initial={{ opacity: 1, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: '100%' }}
            transition={pageTransition}
            className="fixed top-11 lg:top-[50px] right-0 bottom-0 w-full lg:w-[33%] bg-white z-20 overflow-y-auto"
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
