import React, { createContext, useContext, useState } from 'react';

import { Product } from '../types/customsuit';

interface FabricContextType {
  selectedFabric: Product | null;
  setSelectedFabric: (fabric: Product | null) => void;
}

const FabricContext = createContext<FabricContextType | undefined>(undefined);

export const FabricProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedFabric, setSelectedFabric] = useState<Product | null>(null);

  return (
    <FabricContext.Provider value={{ selectedFabric, setSelectedFabric }}>
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
