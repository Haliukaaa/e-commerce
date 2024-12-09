import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

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
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const infoButtonRef = useRef<HTMLButtonElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      infoButtonRef.current &&
      cardRef.current &&
      !tooltipRef.current.contains(event.target as Node) &&
      !infoButtonRef.current.contains(event.target as Node) &&
      !cardRef.current.contains(event.target as Node)
    ) {
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <div className="relative">
      <div
        ref={cardRef}
        onClick={onSelect}
        className={`flex relative gap-1 md:gap-2 lg:gap-3 flex-col cursor-pointer lg:flex-row items-center
        border-2 border-opacity-0 border-gray-500
        lg:p-1 rounded-[4px] transition-all duration-150 ease-linear
        ${
          isSelected
            ? 'lg:border-2 lg:border-opacity-100 lg:ring-4 lg:ring-gray-300 lg:border-gray-500'
            : ''
        }`}
      >
        <div
          className={`md:w-[116px] md:h-[116px] w-[88px] h-[88px] aspect-square relative
          rounded-[5px] overflow-hidden border-2 border-gray-500 border-opacity-0
          ${
            isSelected
              ? 'border-2 border-opacity-100 ring-4 ring-gray-300 border-gray-500 lg:border-opacity-0 lg:ring-opacity-0'
              : ''
          }`}
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
          <div className="lg:text-lg text-center lg:text-start lg:font-semibold text-base text-gray-800 max-w-[80px] truncate lg:max-w-full md:max-w-[116px]">
            {title}
          </div>
          <div className="text-sm hidden lg:block text-gray-600">
            {description}
          </div>
          {isSelected && (
            <button
              ref={infoButtonRef}
              className="lg:hidden absolute top-2 bg-white p-[1px] lg:p-[2px] text-black rounded-full right-2"
              aria-label="More information"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip((prev) => !prev);
              }}
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
      </div>
      {showTooltip &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            className={`fixed z-50 w-60 bg-white p-3 rounded-lg shadow-md
        transform -translate-x-1/2 bottom-36 md:bottom-[199px] left-1/2`}
          >
            <div className="font-semibold text-base">{title}</div>
            <div className="text-sm opacity-75">{description}</div>
          </div>,
          document.getElementById('tooltip-container')!,
        )}
    </div>
  );
};
