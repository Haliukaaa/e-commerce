import React from 'react';

import { ChevronLeft } from 'lucide-react';

import { useFabric } from '@/app/utils/context/fabricContext';
import { VariationKey, VariationType } from '@/app/utils/types/customsuit';

interface VariationToggleButtonsProps {
  category: string;
  handleConfirm: () => void;
}

export const VariationToggleButtons: React.FC<VariationToggleButtonsProps> = ({
  category,
  handleConfirm,
}) => {
  const { variations, setVariation } = useFabric();

  const getVariationOptions = (categoryName: string) => {
    switch (categoryName) {
      case 'Доторлогоо':
        return [
          { key: 'lining', label: 'Төрөл' },
          { key: 'color', label: 'Өнгө' },
        ];
      case 'Товч':
        return [
          { key: 'button', label: 'Товч' },
          { key: 'sleeve', label: 'Ханцуй' },
        ];
      case 'Энгэр':
        return [
          { key: 'lapel', label: 'Энгэр' },
          { key: 'width', label: 'Өргөн' },
        ];
      default:
        return [];
    }
  };

  const variationOptions = getVariationOptions(category);

  return (
    <div className="flex relative justify-center">
      <button className="block lg:hidden" onClick={handleConfirm}>
        <div className="absolute left-3 top-4 border border-gray-400 rounded-full p-1">
          <ChevronLeft className="w-5 h-5 stroke-1" />
        </div>
      </button>
      {variationOptions.map((option) => (
        <button
          key={option.key}
          onClick={() => {
            setVariation(category as VariationKey, option.key as VariationType);
          }}
          className={`
              px-4 mt-1 md:my-3 py-2 rounded-full transition-colors
              ${
                variations[category as VariationKey] === option.key
                  ? 'bg-neutral-200 font-semibold text-gray-700'
                  : ' text-gray-500'
              }
            `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
