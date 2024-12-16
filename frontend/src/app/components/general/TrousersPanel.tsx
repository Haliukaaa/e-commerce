import React, { useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

import { FabricsHeader } from '../customsuit';

import { DetailCardGroup, VariationToggleButtons } from '.';

import { useFabric } from '@/app/utils/context/fabricContext';
import { trousers } from '@/app/utils/mockdata/suit-mockdata';
import { SelectedValues } from '@/app/utils/types/customsuit';

interface TrousersPanelProps {
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const TrousersPanel: React.FC<TrousersPanelProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({});

  const { dispatchTrouserSelection } = useFabric();

  const handleSelection = (
    category: string | null,
    option: string,
    index: number,
  ) => {
    if (category) {
      setSelectedIndex(index);

      setSelectedValues((prev) => {
        const currentSelection =
          typeof prev[category] === 'object' && prev[category] !== null
            ? { ...prev[category] }
            : {};

        switch (category) {
          case 'Бүсэлхий': {
            const variations = trousers.find(
              (j) => j.name === 'Бүсэлхий',
            )?.variations;

            if (Array.isArray(variations)) {
              const isOptionAvailable = variations.some(
                (item) => item.name === option,
              );
              return {
                ...prev,
                [category]: {
                  ...currentSelection,
                  ...(isOptionAvailable ? { waistband: option } : {}),
                },
              };
            } else if (variations) {
              const isWaistbandOption =
                variations.waistband?.some(
                  (waistband) => waistband.name === option,
                ) || false;
              const isDetailsOption =
                variations.details?.some((detail) => detail.name === option) ||
                false;

              return {
                ...prev,
                [category]: {
                  ...currentSelection,
                  ...(isWaistbandOption ? { waistband: option } : {}),
                  ...(isDetailsOption ? { details: option } : {}),
                },
              };
            }
            return prev;
          }
          default:
            return {
              ...prev,
              [category]: option,
            };
        }
      });
    }
  };

  const handleConfirm = () => {
    Object.keys(selectedValues).forEach((category) => {
      const option = selectedValues[category];

      dispatchTrouserSelection({
        type: 'SET_SELECTION',
        category,
        option: option as string,
      });
    });
    setActiveCategory(null);
  };

  const categoryComponents = trousers.reduce(
    (acc, trouser) => {
      acc[trouser.name] = () => (
        <DetailCardGroup
          category={trouser.name}
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
          onSelect={handleSelection}
        />
      );
      return acc;
    },
    {} as Record<string, () => JSX.Element>,
  );

  const CategoryComponent =
    activeCategory &&
    categoryComponents[activeCategory as keyof typeof categoryComponents];

  return (
    <div className="flex flex-col h-full z-50">
      {['Бүсэлхий'].includes(activeCategory || '') ? (
        <VariationToggleButtons
          category={activeCategory}
          handleConfirm={handleConfirm}
        />
      ) : (
        <AnimatePresence>
          <FabricsHeader
            activeCategory={activeCategory}
            scrollContainerRef={scrollContainerRef}
            onHeaderVisibilityChange={setHeaderHidden}
            handleConfirm={handleConfirm}
          />
        </AnimatePresence>
      )}

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className={`flex-grow overflow-y-auto px-1 lg:px-2 lg:pb-2 transition-transform duration-300 ease-linear ${
          ['Бүсэлхий'].includes(activeCategory || '')
            ? 'pt-2'
            : headerHidden
              ? 'pt-0'
              : 'pt-[44px] md:pt-[55px] lg:pt-[65px]'
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
