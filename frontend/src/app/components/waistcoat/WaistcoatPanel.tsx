import React, { useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

import { FabricsHeader } from '../customsuit';
import { DetailCardGroup } from '../general';

import { useFabric } from '@/app/utils/context/fabricContext';
import { SelectedValues } from '@/app/utils/types/customsuit';

interface WaistcoatPanelProps {
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const WaistcoatPanel: React.FC<WaistcoatPanelProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({});

  const { dispatchWaistcoatSelection } = useFabric();

  const handleSelection = (
    category: string | null,
    option: string,
    index: number,
  ) => {
    if (category) {
      setSelectedIndex(index);

      setSelectedValues((prev) => {
        return {
          ...prev,
          [category]: option,
        };
      });
    }
  };

  const handleConfirm = () => {
    Object.keys(selectedValues).forEach((category) => {
      const option = selectedValues[category];

      dispatchWaistcoatSelection({
        type: 'SET_SELECTION',
        category,
        option: option as string,
      });
    });
    setActiveCategory(null);
  };

  const categoryComponents = {
    Товчлолт: () => (
      <DetailCardGroup
        category="Товчлолт"
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        onSelect={handleSelection}
      />
    ),
    Энгэр: () => (
      <DetailCardGroup
        category="Энгэр"
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        onSelect={handleSelection}
      />
    ),
    Халаас: () => (
      <DetailCardGroup
        category="Халаас"
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        onSelect={handleSelection}
      />
    ),
    Нуруу: () => (
      <DetailCardGroup
        category="Нуруу"
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        onSelect={handleSelection}
      />
    ),
    Доторлогоо: () => (
      <DetailCardGroup
        category="Доторлогоо"
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        onSelect={handleSelection}
      />
    ),
    Товч: () => (
      <DetailCardGroup
        category="Товч"
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        onSelect={handleSelection}
      />
    ),
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
