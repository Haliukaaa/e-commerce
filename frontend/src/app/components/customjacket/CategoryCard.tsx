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
    <div className="relative h-full flex flex-col lg:flex-row group items-center">
      <div className=" lg:h-full md:h-[116px] overflow-hidden aspect-square h-[88px] rounded-md">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={116}
          height={116}
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-grow px-4 pt-3">
        <div className="text-lg font-semibold group-hover:text-gray-400 text-gray-800">
          {title}
        </div>
      </div>
      <div>
        <ChevronRight className="hidden lg:block stroke-1" />
      </div>
    </div>
  );
};
