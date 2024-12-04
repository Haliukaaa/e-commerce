import React, { useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Check, ListFilter, Search } from 'lucide-react';

import { CardGroup, FabricsHeader } from './';

import { useFabric } from '@/app/utils/context/fabricContext';

interface JacketPanelProps {
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const JacketPanel: React.FC<JacketPanelProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [headerHidden, setHeaderHidden] = useState(false);

  const { selectedFabric, setSelectedFabric, selectedLocalFabric } =
    useFabric();

  const handleConfirm = () => {
    if (selectedLocalFabric) {
      setSelectedFabric({
        name: selectedLocalFabric.name,
        price: selectedLocalFabric.price?.toString() || '',
        id: selectedLocalFabric.id,
        images: selectedLocalFabric.images,
      });
      setActiveCategory(null);
      return;
    }
    if (selectedFabric) {
      setActiveCategory(null);
      return;
    }
    setActiveCategory(null);
  };

  const categoryComponents = {
    Товчлолт: () => <CardGroup category="Товчлолт" />,
    Товч: () => <CardGroup category="Товч" />,
    Доторлогоо: () => <CardGroup category="Доторлогоо" />,
    Энгэр: () => <CardGroup category="Энгэр" />,
    Монограм: () => <CardGroup category="Монограм" />,
  };

  const CategoryComponent =
    activeCategory &&
    categoryComponents[activeCategory as keyof typeof categoryComponents];

  return (
    <div className="flex flex-col h-full z-50">
      <AnimatePresence>
        <FabricsHeader
          activeCategory={activeCategory}
          scrollContainerRef={scrollContainerRef}
          onHeaderVisibilityChange={setHeaderHidden}
          handleConfirm={handleConfirm}
        />
      </AnimatePresence>

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className={`flex-grow overflow-y-auto px-1 lg:px-2 lg:pb-2 transition-transform duration-300 ease-linear ${
          headerHidden ? 'pt-0' : 'pt-[44px] md:pt-[55px] lg:pt-[65px]'
        }`}
      >
        {CategoryComponent && <CategoryComponent />}
      </div>
      <div className="p-4 hidden lg:block">
        <button
          onClick={handleConfirm}
          className="flex items-center w-full justify-center rounded-[80px] bg-black text-white pt-[10px] pb-3"
        >
          <div className="flex items-center gap-2">
            <Check />
            <span>Баталгаажуулах</span>
          </div>
        </button>
      </div>
    </div>
  );
};
