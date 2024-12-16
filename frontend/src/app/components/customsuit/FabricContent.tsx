import React, { useRef, useState } from 'react';

import { AnimatePresence, motion, PanInfo } from 'framer-motion';

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
  duration: 0.5,
};

const mobileVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '100%', opacity: 0 },
};

const desktopVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
};

export const FabricContent: React.FC<FabricContentProps> = ({
  fabricGroups,
  activeCategory,
  setActiveCategory,
}) => {
  const [activeProductInfo, setActiveProductInfo] = useState<Product | null>(
    null,
  );
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  const handleClose = () => {
    setActiveProductInfo(null);
  };

  const handleMobileDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.y > 100) {
      handleClose();
    }
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (isMobile && activeProductInfo && event.target === backdropRef.current) {
      handleClose();
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleProductInfoToggle = (product: Product | null) => {
    setActiveProductInfo(product);
  };

  return (
    <div className="relative flex items-center h-full lg:block">
      <AnimatePresence mode="wait">
        {!activeCategory ? (
          <motion.div
            key="fabric-groups"
            {...(isMobile ? mobileVariants : desktopVariants)}
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
            {...(isMobile ? mobileVariants : desktopVariants)}
            transition={pageTransition}
            className="fixed h-[180px] md:h-[244px] lg:h-auto bottom-0 lg:top-[49px] right-0 w-full lg:w-[30%] xl:w-[25%] bg-white z-20 overflow-hidden"
          >
            <FabricsPanel
              handleProductInfoToggle={handleProductInfoToggle}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Info Modal */}
      <AnimatePresence>
        {activeProductInfo && (
          <motion.div
            ref={backdropRef}
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 lg:bg-transparent z-20 flex items-end"
          >
            <motion.div
              ref={modalRef}
              variants={isMobile ? mobileVariants : desktopVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              drag={isMobile ? 'y' : false}
              dragConstraints={isMobile ? { top: 0, bottom: 0 } : undefined}
              dragElastic={0.7}
              dragMomentum={false}
              onDragEnd={isMobile ? handleMobileDragEnd : undefined}
              transition={{ type: 'tween', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full lg:w-[30%] xl:w-[25%] lg:absolute bottom-0 lg:top-[50px] lg:right-0 z-10"
            >
              <div className="h-[75dvh] w-full bottom-0 rounded-lg lg:rounded-none shadow-2xl lg:shadow-none bg-white lg:h-full overflow-y-auto">
                {/* Mobile swipe indicator */}
                {isMobile && (
                  <div
                    className="w-full h-fit relative p-3"
                    style={{ touchAction: 'none' }}
                  >
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full" />
                  </div>
                )}

                <div className="relative mx-5 lg:mx-0 overflow-hidden rounded-md lg:rounded-none lg:mt-0">
                  {/* Desktop Close Button */}
                  {!isMobile && (
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 text-gray-700 bg-white rounded-full px-3 py-[6px] z-10"
                    >
                      ✕
                    </button>
                  )}

                  <div className="w-full overflow-hidden rounded-md lg:rounded-none">
                    <img
                      src={activeProductInfo.images.fabric.url}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
