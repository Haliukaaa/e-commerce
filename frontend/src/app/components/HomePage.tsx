import React from 'react';

import { Section, Selection } from './general';

import { useFabric } from '@/app/utils/context/fabricContext';

export const HomePage = () => {
  const { activeSection, selectedStyle } = useFabric();

  const renderJacketComponent = () => {
    if (activeSection === 'Jacket') {
      if (selectedStyle[activeSection] === null) {
        return <Selection activeSection={activeSection} />;
      }
      return <Section activeSection={activeSection} />;
    }

    if (activeSection === 'Trousers') {
      if (selectedStyle[activeSection] === null) {
        return <Selection activeSection={activeSection} />;
      }
      return <Section activeSection={activeSection} />;
    }
    if (activeSection === 'Waistcoat') {
      return <Section activeSection={activeSection} />;
    }

    return <Section activeSection={activeSection} />;
  };

  return <div>{renderJacketComponent()}</div>;
};
