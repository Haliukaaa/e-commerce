'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { JacketCard, JacketPanel } from './';

import { jacket } from '@/app/utils/mockdata/suit-mockdata';

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
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

interface JacketContentProps {
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const JacketContent: React.FC<JacketContentProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <div className="relative flex items-center h-full lg:block">
      <AnimatePresence mode="wait">
        {!activeCategory ? (
          <motion.div
            key="jacket-groups"
            {...(isMobile ? mobileVariants : desktopVariants)}
            transition={pageTransition}
            className="space-y-1 flex lg:flex-col gap-3 overflow-y-auto"
          >
            {jacket.map((group) => (
              <JacketCard
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
            <JacketPanel
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JacketContent;
