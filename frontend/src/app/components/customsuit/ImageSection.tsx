import React from 'react';

interface ImageSectionProps {
  currentView: 'jacket' | 'trousers';
  setCurrentView: React.Dispatch<React.SetStateAction<'jacket' | 'trousers'>>;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  currentView,
  setCurrentView,
}) => {
  const handleToggleView = (view: 'jacket' | 'trousers') => {
    setCurrentView(view);
  };

  return (
    <div className="w-full h-full flex-1 bg-neutral">
      <div className="relative w-full h-full flex justify-center items-center p-4">
        {/* Order Button */}
        <button className="py-1 px-5 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white rounded-xl bg-neutral-300 absolute right-4 top-4 z-10">
          Дуусгах
        </button>

        {/* Image Display */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-[300px]">
            {/* {currentView === 'jacket' && (
              <Image
                src={}
                alt={}
                layout="fill"
                className="object-contain"
                priority
              />
            )}
            {currentView === 'trousers' && (
              <Image
                src={}
                alt={}
                layout="fill"
                className="object-contain"
                priority
              />
            )} */}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-4 flex gap-4">
          <button
            onClick={() => handleToggleView('jacket')}
            className={`py-2 px-4 rounded-lg ${
              currentView === 'jacket'
                ? 'bg-primary text-white'
                : 'bg-neutral-300'
            }`}
          >
            Jacket
          </button>
          <button
            onClick={() => handleToggleView('trousers')}
            className={`py-2 px-4 rounded-lg ${
              currentView === 'trousers'
                ? 'bg-primary text-white'
                : 'bg-neutral-300'
            }`}
          >
            Trousers
          </button>
        </div>
      </div>
    </div>
  );
};
