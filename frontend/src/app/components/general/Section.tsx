import React from 'react';

import { FabricsMenuSection, ImageSection } from '../customsuit';
import { WaistcoatSection } from '../waistcoat';

import { MenuSection } from '.';

interface SectionProps {
  activeSection: string;
}

export const Section: React.FC<SectionProps> = ({ activeSection }) => {
  return (
    <div
      id={
        activeSection === 'Jacket' || activeSection === 'Trousers'
          ? 'tooltip-container'
          : ''
      }
      className="grid relative grid-rows-[auto_auto] pt-11 lg:pt-[50px] grid-cols-1 lg:flex lg:flex-row h-dvh"
    >
      {/* Left Section: Image */}
      <div className="flex-1 lg:flex-1 lg:w-[70%] xl:w-[75%]">
        <div className="h-[calc(100dvh-224px)] md:h-[calc(100dvh-294px)] lg:h-full bg-[#efefef] transition-all duration-300 overflow-hidden">
          <ImageSection />
        </div>
      </div>

      {/* Right Section: Menu */}
      <div className="lg:w-[30%] xl:w-[25%] h-[180px] md:h-[244px] bg-white lg:min-h-0 lg:h-full">
        <div className="h-full">
          {activeSection === 'Fabric' ? (
            <FabricsMenuSection />
          ) : activeSection === 'Jacket' ? (
            <MenuSection clothing="Jacket" />
          ) : activeSection === 'Trousers' ? (
            <MenuSection clothing="Trousers" />
          ) : activeSection === 'Waistcoat' ? (
            <WaistcoatSection />
          ) : null}
        </div>
      </div>
    </div>
  );
};
