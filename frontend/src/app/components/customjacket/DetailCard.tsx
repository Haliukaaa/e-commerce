import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string | undefined;
  index: number;
}

export const DetailCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt = '',
  title,
  description,
  index,
}) => {
  return (
    <div
      className={`
        flex gap-1 md:gap-2 lg:gap-3 flex-col lg:flex-row items-center
        border-2 border-opacity-0 border-gray-500
        lg:p-1 rounded-[4px] w-full
        ${index === 0 ? 'lg:border-2 lg:border-gray-500 lg:border-opacity-100' : ''}
      `}
    >
      <div
        className={`
    w-full lg:w-1/3 aspect-square relative
    rounded-[5px] overflow-hidden
    border-2 border-gray-500
    ${
      index === 0
        ? 'border-opacity-100 lg:border-opacity-0'
        : 'border-opacity-0'
    }
  `}
      >
        <div className="w-full h-full p-1 lg:p-0">
          {' '}
          {/* Padding wrapper */}
          <div className="w-full h-full relative">
            {' '}
            {/* Position relative container */}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover rounded-[5px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <div
          className="lg:text-lg text-center lg:text-start lg:font-semibold text-sm md:text-base text-gray-800"
          data-test-id="card-text"
        >
          {title}
        </div>
        <div
          className="text-sm hidden lg:block text-gray-600"
          data-test-id="card-subtext"
        >
          {description}
        </div>
      </div>
    </div>
  );
};
