import React, { useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Check, ListFilter, Search } from 'lucide-react';

import { FabricsGroup, FabricsHeader } from './';

import { useFabric } from '@/app/utils/context/fabricContext';
import { Product } from '@/app/utils/types/customsuit';

interface FabricsPanelProps {
  activeCategory: string | null;
  handleProductInfoToggle: (product: Product | null) => void;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export const FabricsPanel: React.FC<FabricsPanelProps> = ({
  activeCategory,
  handleProductInfoToggle,
  setActiveCategory,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [headerHidden, setHeaderHidden] = useState(false);

  const {
    selectedFabric,
    setSelectedFabric,
    setIsPreview,
    selectedLocalFabric,
    setSelectedLocalFabric,
  } = useFabric();

  const handleConfirm = () => {
    if (selectedLocalFabric) {
      setSelectedFabric({
        name: selectedLocalFabric.name,
        price: selectedLocalFabric.price,
        id: selectedLocalFabric.id,
        images: selectedLocalFabric.images,
      });
      setActiveCategory(null);
      setIsPreview(false);
      return;
    }
    if (selectedFabric) {
      setActiveCategory(null);
      setIsPreview(false);
      return;
    }
  };

  const handleFabricSelect = (
    name: string,
    price: string,
    id: string,
    images: {
      fabric: { layer: string; url: string };
      jacket: { layer: string; url: string }[];
      trousers: { layer: string; url: string }[];
    },
  ) => {
    setSelectedLocalFabric({ name, price, id, images });
  };

  const categoryComponents = {
    'All Fabrics': FabricsGroup,
    'Best Sellers': FabricsGroup,
    Business: FabricsGroup,
    'New Arrivals': FabricsGroup,
  };

  const CategoryComponent =
    activeCategory &&
    categoryComponents[activeCategory as keyof typeof categoryComponents];

  return (
    <div className="flex flex-col h-full">
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
        {CategoryComponent && (
          <CategoryComponent
            category={activeCategory}
            onProductInfoToggle={handleProductInfoToggle}
            onFabricSelect={handleFabricSelect}
          />
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="sticky bottom-0 w-full bg-white lg:border-t">
        <div className="flex justify-between lg:hidden items-center px-3 pb-3">
          <Search className="w-5 h-5 stroke-1" />
          {selectedLocalFabric ? (
            <div className="text-center">
              <div className="font-medium text-xs md:text-base">
                {selectedLocalFabric.name}
              </div>
              <div className="text-xs md:text-sm">
                ${selectedLocalFabric.price}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center text-sm">Select a fabric</div>
              <div className="text-sm text-opacity-0 text-white">
                placeholder
              </div>
            </div>
          )}
          <ListFilter className="w-5 h-5 stroke-1" />
        </div>

        {/* Confirm Button */}
        <div className="p-4 hidden lg:block">
          <button
            onClick={handleConfirm}
            className={`flex items-center w-full justify-center rounded-[80px] bg-black text-white pt-[10px] pb-3 
            ${selectedLocalFabric || selectedFabric ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}
          `}
            disabled={!selectedLocalFabric && !selectedFabric}
          >
            <div className="flex items-center gap-2">
              <Check />
              <span>Confirm</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
