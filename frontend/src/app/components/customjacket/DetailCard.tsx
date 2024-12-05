import React from 'react';

interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string | undefined;
  isSelected: boolean;
  onSelect: () => void;
}

export const DetailCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt = '',
  title,
  description,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`
        flex gap-1 md:gap-2 lg:gap-3 flex-col cursor-pointer lg:flex-row items-center
        border-2 border-opacity-0 border-gray-500
        lg:p-1 rounded-[4px] transition-all duration-150 ease-linear
        ${
          isSelected
            ? 'lg:border-2 lg:border-opacity-100 lg:ring-4 lg:ring-gray-300 lg:border-gray-500'
            : ''
        }
      `}
    >
      <div
        className={`
    md:w-[116px] md:h-[116px] w-[88px] h-[88px] aspect-square relative
    rounded-[5px] overflow-hidden
    border-2 border-gray-500 border-opacity-0
    ${
      isSelected
        ? 'border-2 border-opacity-100 ring-4 ring-gray-300 border-gray-500 lg:border-opacity-0 lg:ring-opacity-0'
        : ''
    }
  `}
      >
        <div className="w-full h-full lg:p-0">
          <div className="w-full h-full p-1 aspect-square md:h-28 relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-cover h-full w-full rounded-[5px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <div
          className="lg:text-lg 
    text-center lg:text-start 
    lg:font-semibold 
    text-base 
    text-gray-800 max-w-[80px]
    truncate lg:max-w-full
    md:max-w-[116px]"
        >
          {title}
        </div>
        <div className="text-sm hidden lg:block text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
};
