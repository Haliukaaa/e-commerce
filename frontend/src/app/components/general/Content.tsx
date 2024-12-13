'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { WaistcoatPanel } from '../waistcoat';

import { Card, JacketPanel, TrousersPanel } from '.';

import { useFabric } from '@/app/utils/context/fabricContext';
import {
  jacket,
  trousers,
  waistcoat,
} from '@/app/utils/mockdata/suit-mockdata';

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

interface ContentProps {
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Content: React.FC<ContentProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const { activeSection } = useFabric();

  const sectionData =
    activeSection === 'Jacket'
      ? jacket
      : activeSection === 'Trousers'
        ? trousers
        : waistcoat;

  const renderPanel = () => {
    switch (activeSection) {
      case 'Jacket':
        return (
          <JacketPanel
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        );
      case 'Trousers':
        return (
          <TrousersPanel
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        );
      case 'Waistcoat':
        return (
          <WaistcoatPanel
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:overflow-y-auto flex lg:items-center h-full lg:block">
      <AnimatePresence mode="wait">
        {!activeCategory ? (
          <motion.div
            key={`${activeSection}-groups`}
            {...(isMobile ? mobileVariants : desktopVariants)}
            transition={pageTransition}
            className="space-x-3 flex flex-row lg:flex-col lg:space-x-0 lg:space-y-3"
          >
            {sectionData.map((group) => (
              <Card
                key={group.id}
                group={group}
                setActiveCategory={setActiveCategory}
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
            {renderPanel()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
