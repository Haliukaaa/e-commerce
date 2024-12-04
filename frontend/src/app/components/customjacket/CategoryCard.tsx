import React from 'react';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
}

export const CategoryCard: React.FC<CardProps> = ({
  imageSrc,
  imageAlt = '',
  title,
}) => {
  return (
    <div className="relative flex flex-col lg:flex-row group items-center">
      <div className="flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={116}
          height={116}
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-grow px-4 py-2">
        <div className="text-lg font-semibold group-hover:text-gray-400 text-gray-800">
          {title}
        </div>
      </div>
      <div>
        <ChevronRight className="stroke-1" />
      </div>
    </div>
  );
};
