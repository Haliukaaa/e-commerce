import React from 'react';

import Image from 'next/image';

interface ItemAttribute {
  name: string;
  image: string;
}
export const AttributeDetail = ({
  label,
  attribute,
}: {
  label: string;
  attribute: ItemAttribute;
}) => (
  <div className="flex items-center gap-4">
    <div className="rounded-md overflow-hidden">
      <Image
        src={attribute.image}
        alt={attribute.name}
        className="w-20 h-20 md:w-28 md:h-28 object-cover aspect-square"
        width={100}
        height={100}
      />
    </div>
    <div>
      <p className="text-base text-gray-500">{label}</p>
      <p className="text-primary text-lg font-semibold">{attribute.name}</p>
    </div>
  </div>
);
