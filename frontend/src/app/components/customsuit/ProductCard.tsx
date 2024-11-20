import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  index: number;
  activeFabric: string | null;
  onFabricClick: (fabric: string) => void;
}

export const ProductCard = ({
  image,
  name,
  price,
  index,
  activeFabric,
  onFabricClick,
}: ProductCardProps) => {
  return (
    <div
      className={`bg-white border-2 p-1 border-transparent rounded-md ${index === 0 ? 'border-2 border-gray-400' : ''}`}
      onClick={onFabricClick}
    >
      <div className="flex">
        <div className="relative">
          <div className="w-28 h-28 overflow-hidden rounded-md">
            <img
              src={image}
              alt={name}
              className="w-full h-auto aspect-square object-cover"
              loading="lazy"
            />
          </div>
          <button
            className="absolute top-1 bg-black/20 text-white rounded-full right-1"
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
        </div>
        <div className="p-4">
          <h3 className="font-medium text-sm">{name}</h3>
          <p className="text-sm text-gray-600">${price}</p>
        </div>
      </div>
    </div>
  );
};
