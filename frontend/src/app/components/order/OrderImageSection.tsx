import React from 'react';

import Image from 'next/image';

export const OrderImageSection = () => {
  return (
    <div className="w-full lg:w-3/5 h-full left-0 bg-gray-100 lg:absolute relative flex items-center justify-center">
      <Image
        src="/style2-fab4.png"
        alt="Таны сонгосон загварын хувцас"
        className="w-full h-full object-contain"
        fill
      />
    </div>
  );
};
