import React from 'react';

interface ProductCardProps {
  image?: string;
  name?: string;
  price?: string;
  index?: number;
  activeFabric?: string | null;
  onFabricClick: (fabric: string) => void;
  onInfoClick?: () => void;
}

export const ProductCard = ({
  image,
  name,
  price,
  activeFabric,
  index,
  onFabricClick,
  onInfoClick,
}: ProductCardProps) => {
  return (
    <div
      className={`bg-white w-fit border p-[2px] border-2 lg:p-1 cursor-pointer border-opacity-0 
        ${activeFabric === null && index === 0 ? 'border-2 border-opacity-100 border-gray-500' : ''} 
        transition-all duration-150 ease-linear border-gray-300 rounded-md 
        ${activeFabric === name ? ' border-2 border-opacity-100 ring-4 ring-gray-300 border-gray-500' : ''}
        lg:flex-row lg:w-full
      `}
      onClick={() => onFabricClick(name!)}
    >
      <div className="flex flex-col lg:flex-row w-full">
        <div className="relative">
          <div className="md:w-28 h-[72px] w-[72px] md:h-28 overflow-hidden rounded-md">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {activeFabric === name && onInfoClick && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onInfoClick();
              }}
              className="absolute top-1 lg:top-2 bg-black/20 p-[1px] lg:p-[2px] text-white rounded-full right-1 lg:right-2"
              aria-label="More information"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="8" />
              </svg>
            </button>
          )}
        </div>
        {/* Product info - Only visible on large screens */}
        <div className="hidden lg:block p-4">
          <h3 className="font-medium text-sm">{name}</h3>
          <p className="text-sm text-gray-600">${price}</p>
        </div>
      </div>
    </div>
  );
};
