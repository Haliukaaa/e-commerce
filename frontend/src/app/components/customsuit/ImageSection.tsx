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
        {/* View Toggle Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentView('jacket')}
            className={`py-2 px-4 rounded-lg ${
              currentView === 'jacket'
                ? 'bg-primary text-white'
                : 'bg-neutral-300 text-black'
            }`}
          >
            Jacket
          </button>
          <button
            onClick={() => setCurrentView('trousers')}
            className={`py-2 px-4 rounded-lg ${
              currentView === 'trousers'
                ? 'bg-primary text-white'
                : 'bg-neutral-300 text-black'
            }`}
          >
            Trousers
          </button>
        </div>

        {/* Layered Image Display */}
        <div className="flex-1 w-full h-full">
          <LayeredImage currentView={currentView} />
        </div>
      </div>
    </div>
  );
};
