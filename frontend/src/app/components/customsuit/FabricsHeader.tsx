'use client';

import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { ChevronLeft, ListFilter, Search } from 'lucide-react';

interface HeaderProps {
  activeCategory: string | null;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  onHeaderVisibilityChange: (hidden: boolean) => void;
  handleConfirm: () => void;
}

export const FabricsHeader: React.FC<HeaderProps> = ({
  activeCategory,
  scrollContainerRef,
  onHeaderVisibilityChange,
  handleConfirm,
}) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = scrollContainerRef.current?.scrollTop || 0;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const scrollableElement = scrollContainerRef.current;

    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    onHeaderVisibilityChange(hidden);
  }, [hidden, onHeaderVisibilityChange]);

  return (
    <motion.div
      className="w-full bg-white z-20 fixed top-0"
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <div className="flex relative justify-center lg:justify-between pt-2 lg:py-4 px-5">
        <button className="block lg:hidden" onClick={handleConfirm}>
          <div className="absolute left-3 top-2 border border-gray-400 rounded-full p-1">
            <ChevronLeft className="w-5 h-5 stroke-1" />
          </div>
        </button>
        <Search className="hidden lg:block" />
        <div className="font-bold text-base md:text-lg">{activeCategory}</div>
        <ListFilter className="hidden lg:block" />
      </div>
    </motion.div>
  );
};
