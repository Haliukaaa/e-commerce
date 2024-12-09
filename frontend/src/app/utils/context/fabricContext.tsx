import React, { createContext, useContext, useReducer, useState } from 'react';

import {
  JacketSelection,
  Product,
  VariationKey,
  VariationType,
} from '../types/customsuit';

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
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
  selectedStyle: string | null;
  setSelectedStyle: (style: string | null) => void;
  activeStyle: string;
  setActiveStyle: (style: string) => void;
  variations: Record<VariationKey, VariationType>;
  setVariation: (category: VariationKey, variation: VariationType) => void;
  jacketSelection: JacketSelection;
  dispatchJacketSelection: React.Dispatch<Action>;
}

const FabricContext = createContext<FabricContextType | undefined>(undefined);

const initialState: JacketSelection = {
  selection: {
    Товчлолт: '2 товчтой',
    Товч: {
      button: 'Хар хүрэн',
      sleeve: '3 дараалсан товч',
    },
    Доторлогоо: {
      lining: 'Бүрэн доторлогоо',
      color: 'Цагаан',
    },
    Энгэр: {
      lapel: 'Өнцөгтэй',
      width: 'Нарийн',
    },
    Монограм: 'Хүрэмний дотор талд',
  },
};

type Action =
  | { type: 'SET_SELECTION'; category: string; option: string }
  | { type: 'SET_BUTTON'; option: { button?: string; sleeve?: string } }
  | { type: 'SET_LINING'; option: { lining?: string; color?: string } }
  | { type: 'SET_LAPEL'; option: { lapel?: string; width?: string } };

const reducer = (state: JacketSelection, action: Action): JacketSelection => {
  switch (action.type) {
    case 'SET_SELECTION':
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.category]: action.option,
        },
      };
    case 'SET_BUTTON':
      return {
        ...state,
        selection: {
          ...state.selection,
          Товч: { ...state.selection.Товч, ...action.option },
        },
      };
    case 'SET_LINING':
      return {
        ...state,
        selection: {
          ...state.selection,
          Доторлогоо: { ...state.selection.Доторлогоо, ...action.option },
        },
      };
    case 'SET_LAPEL':
      return {
        ...state,
        selection: {
          ...state.selection,
          Энгэр: { ...state.selection.Энгэр, ...action.option },
        },
      };
  }
};

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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [variations, setVariations] = useState<
    Record<VariationKey, VariationType>
  >({
    Доторлогоо: 'lining',
    Товч: 'button',
    Энгэр: 'lapel',
  });

  const [jacketSelection, dispatchJacketSelection] = useReducer(
    reducer,
    initialState,
  );

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
        jacketSelection,
        dispatchJacketSelection,
        activeCategory,
        setActiveCategory,
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
