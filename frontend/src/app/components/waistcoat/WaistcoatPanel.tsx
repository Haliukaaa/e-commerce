import React, { useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

import { FabricsHeader } from '../customsuit';
import { DetailCardGroup } from '../general';

import { useFabric } from '@/app/utils/context/fabricContext';
import { jacket } from '@/app/utils/mockdata/suit-mockdata';
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

  const { dispatchJacketSelection } = useFabric();

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
          case 'Товч': {
            const variations = jacket.find(
              (j) => j.name === 'Товч',
            )?.variations;

            if (Array.isArray(variations)) {
              const isOptionAvailable = variations.some(
                (item) => item.name === option,
              );

              return {
                ...prev,
                [category]: {
                  ...currentSelection,
                  ...(isOptionAvailable ? { button: option } : {}),
                },
              };
            } else if (variations) {
              const isButtonOption =
                variations.button?.some((btn) => btn.name === option) || false;
              const isSleeveOption =
                variations.sleeve?.some((sleeve) => sleeve.name === option) ||
                false;

              return {
                ...prev,
                [category]: {
                  ...currentSelection,
                  ...(isButtonOption ? { button: option } : {}),
                  ...(isSleeveOption ? { sleeve: option } : {}),
                },
              };
            }
            return prev;
          }

          case 'Доторлогоо': {
            const variations = jacket.find(
              (j) => j.name === 'Доторлогоо',
            )?.variations;

            if (Array.isArray(variations)) {
              const isOptionAvailable = variations.some(
                (item) => item.name === option,
              );

              return {
                ...prev,
                [category]: {
                  ...currentSelection,
                  ...(isOptionAvailable ? { lining: option } : {}),
                },
              };
            } else if (variations) {
              const isLiningTypeOption =
                variations.lining?.some((lining) => lining.name === option) ||
                false;
              const isColorOption =
                variations.color?.some((color) => color.name === option) ||
                false;

              return {
                ...prev,
                [category]: {
                  ...currentSelection,
                  ...(isLiningTypeOption ? { lining: option } : {}),
                  ...(isColorOption ? { color: option } : {}),
                },
              };
            }
            return prev;
          }

          case 'Энгэр':
            {
              const variations = jacket.find(
                (j) => j.name === 'Энгэр',
              )?.variations;

              if (Array.isArray(variations)) {
                const isOptionAvailable = variations.some(
                  (item) => item.name === option,
                );

                return {
                  ...prev,
                  [category]: {
                    ...currentSelection,
                    ...(isOptionAvailable ? { lapel: option } : {}),
                  },
                };
              } else if (variations) {
                const isLapelOption =
                  variations.lapel?.some((lapel) => lapel.name === option) ||
                  false;
                const isWidthOption =
                  variations.width?.some((width) => width.name === option) ||
                  false;

                return {
                  ...prev,
                  [category]: {
                    ...currentSelection,
                    ...(isLapelOption ? { lapel: option } : {}),
                    ...(isWidthOption ? { width: option } : {}),
                  },
                };
              }
            }
            return prev;
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

      if (typeof option === 'object') {
        if (category === 'Товч') {
          dispatchJacketSelection({
            type: 'SET_BUTTON',
            option: option as { button?: string; sleeve?: string },
          });
        } else if (category === 'Доторлогоо') {
          dispatchJacketSelection({
            type: 'SET_LINING',
            option: option as { lining?: string; color?: string },
          });
        } else if (category === 'Энгэр') {
          dispatchJacketSelection({
            type: 'SET_LAPEL',
            option: option as { lapel?: string; width?: string },
          });
        }
      } else {
        dispatchJacketSelection({
          type: 'SET_SELECTION',
          category,
          option: option as string,
        });
      }
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
    'Энгэрийн загвар': () => (
      <DetailCardGroup
        category="Энгэрийн загвар"
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
    'Нурууны загвар': () => (
      <DetailCardGroup
        category="Нурууны загвар"
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
        onSelect={handleSelection}
      />
    ),
    'Доторлогооны өнгө': () => (
      <DetailCardGroup
        category="Доторлогооны өнгө"
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
