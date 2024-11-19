import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Style {
  id: number;
  name: string;
  stylePrefix: string;
  image?: string;
}

interface Material {
  id: number;
  name: string;
  price: string;
  fabricNumber: number;
  image?: string;
}

interface ImageSectionProps {
  selectedStyle: Style | null;
  selectedMaterial: Material | null;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  selectedStyle,
  selectedMaterial,
}) => {
  const defaultStyle = { id: 1, name: 'Classic Fit', stylePrefix: 'style1' };
  const currentStyle = selectedStyle || defaultStyle;

  const fabricNumber = selectedMaterial?.fabricNumber || 1;
  const imagePath = `/${currentStyle.stylePrefix}-fab${fabricNumber}.png`;

  const router = useRouter();

  const handleOrderClick = () => {
    if (!selectedStyle || !selectedMaterial) {
      alert('Please select both style and material before proceeding');
      return;
    }

    // Create a query string with the selected options
    const queryParams = new URLSearchParams({
      styleId: selectedStyle.id.toString(),
      styleName: selectedStyle.name,
      materialId: selectedMaterial.id.toString(),
      materialName: selectedMaterial.name,
      price: selectedMaterial.price,
    }).toString();

    // Navigate to order page with parameters
    router.push(`/order?${queryParams}`);
  };

  return (
    <div className="w-full h-full flex-1 bg-neutral">
      <div className="relative w-full h-full flex justify-center items-center p-4">
        <button
          onClick={handleOrderClick}
          className="py-0 px-4 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white rounded-xl bg-neutral-300 absolute right-4 top-4 z-10"
        >
          Дуусгах
        </button>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-[300px]">
            <Image
              src={imagePath}
              alt={`${currentStyle.name} with ${selectedMaterial?.name || 'default'} material`}
              layout="fill"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
