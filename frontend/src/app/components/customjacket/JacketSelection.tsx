import React, { useMemo } from 'react';

import Image from 'next/image';

import { useFabric } from '@/app/utils/context/fabricContext';
import { products } from '@/app/utils/mockdata/suit-mockdata';

export const JacketSelection = () => {
  const { activeStyle, setActiveStyle, setSelectedStyle } = useFabric();

  const handleStyleChange = (style: string) => {
    setActiveStyle(style);
  };

  const layerOrder = useMemo(() => {
    const baseLayerOrder = {
      jacket: [
        'full',
        'lining',
        'chest button',
        'lapel',
        'pocket',
        'button',
        'stitch',
        'base',
      ],
      trousers: ['full', 'seams', 'belt loop', 'button 1', 'button 2'],
    };

    return baseLayerOrder['jacket'];
  }, []);

  const viewImages = products[0].images.jacket;
  const styles = [
    {
      name: 'Havana',
      description:
        'This style features natural shoulders, a notch lapel & round patch pockets.',
    },
    {
      name: 'Milano',
      description:
        'This style features structured shoulders, a wide notch lapel & large flap pockets.',
    },
    {
      name: 'Roma',
      description:
        'This style features natural shoulders, a concave lapel & jetted pockets.',
    },
  ];

  const handleStyleConfirm = () => {
    setSelectedStyle(activeStyle);
    setActiveStyle(activeStyle);
  };

  return (
    <div className="flex flex-col h-full bg-[#efefef] overflow-hidden">
      <div className="flex justify-center shrink-0">
        <div className="flex gap-2 lg:pt-8 pt-7 pb-2">
          <Image
            src="https://cdn.suitsupply.com/image/upload/svg/base_style.svg"
            alt="Choose your style"
            width={24}
            height={24}
          />
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Choose your style
          </h1>
        </div>
      </div>

      {/* Jacket style image */}
      <div className=" flex flex-grow flex-col justify-center overflow-hidden">
        <div className="relative max-w-full h-full">
          {layerOrder.map((layerName, index) => {
            const layerImage = viewImages.find(
              (img) => img.layer === layerName,
            );

            return layerImage ? (
              <div
                key={index}
                className="absolute w-full flex justify-center h-full object-contain max-w-full max-h-full"
              >
                <img
                  key={layerName}
                  src={layerImage.url}
                  alt={`${layerName} layer`}
                  className="w-full h-full lg:w-[350px] object-contain"
                  style={{
                    zIndex: layerOrder.indexOf(layerName),
                  }}
                />
              </div>
            ) : null;
          })}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex gap-1 justify-center mb-2">
          {styles.map((el, i) => {
            return (
              <div
                key={i}
                onClick={() => handleStyleChange(el.name)}
                className={`px-6 py-3 text-base md:text-lg cursor-pointer rounded-3xl ${activeStyle === el.name ? 'bg-white font-semibold' : 'text-[#898989]'}`}
              >
                {el.name}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center px-4 mb-4">
          {activeStyle && (
            <div className="w-80 font-light text-base md:text-lg text-center">
              {styles.find((el) => el.name === activeStyle)?.description}
            </div>
          )}
        </div>

        <div className="flex justify-center text-base md:text-lg pb-14">
          <button
            onClick={handleStyleConfirm}
            className="bg-black rounded-[23px] text-white px-16 py-2"
          >
            Баталгаажуулах
          </button>
        </div>
      </div>
    </div>
  );
};
