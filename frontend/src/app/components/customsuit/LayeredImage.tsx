import React, { useMemo } from 'react';

import { useFabric } from '@/app/utils/context/fabricContext';

interface LayeredImageProps {
  currentView: 'jacket' | 'trousers';
}

export const LayeredImage: React.FC<LayeredImageProps> = ({ currentView }) => {
  const { selectedLocalFabric } = useFabric();

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

    return baseLayerOrder[currentView];
  }, [currentView]);

  const viewImages = selectedLocalFabric?.images?.[currentView] || [];

  if (!selectedLocalFabric) {
    return (
      <div className="flex items-center justify-center h-full text-neutral-500">
        Select a fabric to preview
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full">
        <div className="relative w-full h-full">
          {layerOrder.map((layerName) => {
            const layerImage = viewImages.find(
              (img) => img.layer === layerName,
            );

            return layerImage ? (
              <div className="absolute w-full flex justify-center h-full object-contain max-w-full max-h-full">
                <img
                  key={layerName}
                  src={layerImage.url}
                  alt={`${currentView} ${layerName} layer`}
                  className="w-full h-full lg:max-w-[350px] object-contain"
                  style={{
                    zIndex: layerOrder.indexOf(layerName),
                  }}
                />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};
