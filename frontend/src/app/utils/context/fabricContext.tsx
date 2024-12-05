import React, { createContext, useContext, useState } from 'react';

import { Product, VariationKey, VariationType } from '../types/customsuit';

interface FabricContextType {
  selectedFabric: Product | null;
  setSelectedFabric: (fabric: Product | null) => void;
  selectedLocalFabric: Product | null;
  setSelectedLocalFabric: (fabric: Product | null) => void;
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
  currentView: 'jacket' | 'trousers';
  setCurrentView: React.Dispatch<React.SetStateAction<'jacket' | 'trousers'>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  selectedStyle: string | null;
  setSelectedStyle: (style: string | null) => void;
  activeStyle: string;
  setActiveStyle: (style: string) => void;
  variations: Record<VariationKey, VariationType>;
  setVariation: (category: VariationKey, variation: VariationType) => void;
}

const FabricContext = createContext<FabricContextType | undefined>(undefined);

export const FabricProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedFabric, setSelectedFabric] = useState<Product | null>(null);
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [selectedLocalFabric, setSelectedLocalFabric] =
    useState<Product | null>(null);
  const [currentView, setCurrentView] = useState<'jacket' | 'trousers'>(
    'jacket',
  );
  const [activeSection, setActiveSection] = useState<string>('Fabric');
  const [activeStyle, setActiveStyle] = useState<string>('Havana');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [variations, setVariations] = useState<
    Record<VariationKey, VariationType>
  >({
    Доторлогоо: 'type',
    Товч: 'button',
    Энгэр: 'lapel',
  });

  const setVariation = (category: VariationKey, variation: VariationType) => {
    setVariations((prev) => ({ ...prev, [category]: variation }));
  };
  return (
    <FabricContext.Provider
      value={{
        selectedFabric,
        setSelectedFabric,
        isPreview,
        setIsPreview,
        selectedLocalFabric,
        setSelectedLocalFabric,
        currentView,
        setCurrentView,
        activeSection,
        setActiveSection,
        selectedStyle,
        setSelectedStyle,
        activeStyle,
        setActiveStyle,
        variations,
        setVariation,
      }}
    >
      {children}
    </FabricContext.Provider>
  );
};

export const useFabric = () => {
  const context = useContext(FabricContext);
  if (context === undefined) {
    throw new Error('useFabric must be used within a Fabric Provider');
  }
  return context;
};
