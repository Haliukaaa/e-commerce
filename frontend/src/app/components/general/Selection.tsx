import React, { useMemo } from 'react';

import Image from 'next/image';

import { useFabric } from '@/app/utils/context/fabricContext';
import { products } from '@/app/utils/mockdata/suit-mockdata';

interface SelectionProps {
  activeSection: string;
}

export const Selection: React.FC<SelectionProps> = ({ activeSection }) => {
  const { activeStyle, setActiveStyle, setSelectedStyle } = useFabric();

  const handleStyleChange = (
    clothing: 'Jacket' | 'Trousers',
    style: string,
  ) => {
    setActiveStyle((prev) => ({
      ...prev,
      [clothing]: style,
    }));
  };

  const layerOrder = useMemo(() => {
    return [
      'full',
      'lining',
      'chest button',
      'lapel',
      'pocket',
      'button',
      'stitch',
      'base',
    ];
  }, []);

  const viewImages =
    activeSection === 'Jacket'
      ? products[0].images.jacket
      : products[0].images.trousers;

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

  const styles2 = [
    {
      name: 'Brescia',
      description:
        'This style features a standard button closure, flat front & belt loops.',
    },
    {
      name: 'Vigo',
      description:
        'This style features an expended peak closure, pleated front, side adjusters & a turn up.',
    },
    {
      name: 'Milano',
      description:
        'This style features a hidden button closure, flat front & belt loops.',
    },
  ];

  const handleStyleConfirm = (clothing: 'Jacket' | 'Trousers') => {
    const defaultStyle =
      clothing === 'Jacket' ? styles[0].name : styles2[0].name;

    setSelectedStyle((prev) => ({
      ...prev,
      [clothing]: activeStyle[clothing] || defaultStyle,
    }));
  };

  const getCurrentDescription = () => {
    if (activeSection === 'Jacket') {
      return (
        styles.find((el) => el.name === activeStyle.Jacket)?.description ||
        styles[0].description
      );
    } else {
      return (
        styles2.find((el) => el.name === activeStyle.Trousers)?.description ||
        styles2[0].description
      );
    }
  };

  return (
    <div className="pt-11 lg:pt-[50px] w-full bg-[#efefef] h-screen">
      <div className="flex flex-col h-full bg-[#efefef] overflow-hidden">
        <div className="flex justify-center shrink-0">
          <div className="flex gap-2 lg:pt-8 pt-7 pb-2">
            <Image
              src="https://cdn.suitsupply.com/image/upload/svg/base_style.svg"
              alt="Загвараа сонгоно уу"
              width={0}
              height={0}
              className="w-[24px] h-[24px]"
            />
            <h1 className="font-bold text-2xl">Загвараа сонгоно уу</h1>
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

        <div className="flex-1 xl:mt-7">
          <div className="flex gap-1 justify-center mb-2">
            {activeSection === 'Jacket'
              ? styles.map((el, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => handleStyleChange('Jacket', el.name)}
                      className={`px-6 py-3 text-base md:text-lg cursor-pointer rounded-3xl ${activeStyle.Jacket === el.name ? 'bg-white font-semibold' : 'text-[#898989]'}`}
                    >
                      {el.name}
                    </div>
                  );
                })
              : styles2.map((el, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => handleStyleChange('Trousers', el.name)}
                      className={`px-6 py-3 text-base md:text-lg cursor-pointer rounded-3xl ${activeStyle.Trousers === el.name ? 'bg-white font-semibold' : 'text-[#898989]'}`}
                    >
                      {el.name}
                    </div>
                  );
                })}
          </div>

          <div className="flex justify-center px-4 mb-4">
            <div className="w-80 font-light text-base md:text-lg text-center">
              {getCurrentDescription()}
            </div>
          </div>

          <div className="flex justify-center text-base md:text-lg pb-14">
            <button
              onClick={() =>
                handleStyleConfirm(activeSection as 'Jacket' | 'Trousers')
              }
              className="bg-black rounded-[23px] text-white px-16 py-2"
            >
              Баталгаажуулах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
