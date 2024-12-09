import React from 'react';

import { JacketPage, JacketSection } from './customjacket';
import { FabricSection } from './customsuit';

import { useFabric } from '@/app/utils/context/fabricContext';

export const HomePage = () => {
  const { activeSection, selectedStyle } = useFabric();

  const renderJacketComponent = () => {
    if (activeSection === 'Jacket') {
      if (!selectedStyle) {
        return <JacketPage />;
      }
      return <JacketSection />;
    }
    return <FabricSection />;
  };

  return <div>{renderJacketComponent()}</div>;
};
