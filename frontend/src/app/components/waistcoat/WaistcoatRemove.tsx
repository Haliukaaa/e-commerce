import React from 'react';

import { Ban } from 'lucide-react';

interface WaistcoatRemoveProps {
  setSelectedStyle: React.Dispatch<
    React.SetStateAction<
      Record<'Jacket' | 'Trousers' | 'Waistcoat', string | null | boolean>
    >
  >;
}

export const WaistcoatRemove: React.FC<WaistcoatRemoveProps> = ({
  setSelectedStyle,
}) => {
  const removeWaistcoat = () => {
    setSelectedStyle((prev) => ({
      ...prev,
      ['Waistcoat']: false,
    }));
  };

  return (
    <div onClick={removeWaistcoat} className="h-fit">
      <div className="flex flex-col w-full">
        <div className="bg-[#f6f6f6] lg:bg-transparent w-14 h-[88px] lg:h-fit lg:w-full lg:border lg:border-[#e1e1e1] rounded-[4px] hover:cursor-pointer flex justify-center items-center py-3">
          <div className="flex gap-2">
            <Ban className="stroke-1" />
            <div className="text-base font-normal hidden lg:flex items-center text-black">
              Хантааз хасах
            </div>
          </div>
        </div>
        <div className="text-base font-normal flex lg:hidden items-center justify-center text-black">
          Устгах
        </div>
      </div>
    </div>
  );
};
