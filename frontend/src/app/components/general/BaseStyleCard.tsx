import React from 'react';

import { ChevronRight, Pencil } from 'lucide-react';
import Image from 'next/image';

interface BaseStyleCardProps {
  styleName: Record<
    'Jacket' | 'Trousers' | 'Waistcoat',
    string | null | boolean
  >;
  onEdit?: () => void;
  clothing: 'Jacket' | 'Trousers' | 'Waistcoat';
}

export const BaseStyleCard: React.FC<BaseStyleCardProps> = ({
  styleName,
  onEdit,
  clothing,
}) => {
  const renderStyleName = () => {
    if (!styleName || !clothing) {
      return 'Style not selected';
    }
    return styleName[clothing] ?? 'Style not selected';
  };

  return (
    <div>
      <div className="flex gap-1 items-center">
        <div
          onClick={onEdit}
          className="flex flex-col w-[56px] md:w-[76px] lg:w-full h-[88px] md:h-[116px] lg:h-full justify-center rounded-sm lg:flex-row items-center gap-4 p-2 lg:rounded-[60px] bg-[#f6f6f6] cursor-pointer group shadow-sm"
        >
          <div className="flex items-center justify-center w-12 h-12 lg:bg-white rounded-full">
            <Image
              src="https://cdn.suitsupply.com/image/upload/svg/base_style.svg"
              alt="Style Icon"
              width={24}
              height={24}
            />
          </div>

          <div className="flex-grow hidden lg:block">
            <div className="text-lg font-semibold text-black group-hover:text-gray-400">
              {clothing === 'Jacket' ? 'Хүрэмний загвар' : 'Өмдний загвар'}
            </div>
            <div className="text-sm">{renderStyleName()}</div>
          </div>

          {onEdit && (
            <button className="text-gray-500 hidden lg:block hover:text-gray-700 pr-6 transition-colors">
              <Pencil size={19} color="black" className="stroke-1" />
            </button>
          )}
        </div>
        <div className="lg:hidden">
          <ChevronRight className="stroke-1 text-gray-400" />
        </div>
      </div>
      <div className="text-sm md:text-center md:pr-7 lg:text-lg lg:hidden pt-3 font-semibold text-black group-hover:text-gray-400">
        Your Style
      </div>
    </div>
  );
};
