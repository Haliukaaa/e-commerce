import React from 'react';

import { LayeredImage } from './';

interface ImageSectionProps {
  currentView: 'jacket' | 'trousers';
  setCurrentView: React.Dispatch<React.SetStateAction<'jacket' | 'trousers'>>;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  currentView,
  setCurrentView,
}) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full items-center space-y-4">
        {/* Layered Image Display */}
        <div className="flex-1 w-full h-full">
          <LayeredImage currentView={currentView} />
        </div>
        {/* View Toggle Buttons */}
        <div className="flex absolute space-x-2 bottom-3">
          <button
            onClick={() => setCurrentView('jacket')}
            className={`px-2 text-base rounded-full ${
              currentView === 'jacket'
                ? 'bg-primary text-white'
                : 'bg-neutral-300 text-black'
            }`}
          >
            Jacket
          </button>
          <button
            onClick={() => setCurrentView('trousers')}
            className={`px-2 text-base rounded-full ${
              currentView === 'trousers'
                ? 'bg-primary text-white'
                : 'bg-neutral-300 text-black'
            }`}
          >
            Trousers
          </button>
        </div>
      </div>
    </div>
  );
};
