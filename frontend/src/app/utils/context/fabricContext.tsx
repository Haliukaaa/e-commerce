import React, { createContext, useContext, useReducer, useState } from 'react';

import {
  JacketSelection,
  Product,
  TrouserSelection,
  VariationKey,
  VariationType,
  WaistcoatSelection,
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
  selectedStyle: Record<
    'Jacket' | 'Trousers' | 'Waistcoat',
    string | null | boolean
  >;
  setSelectedStyle: React.Dispatch<
    React.SetStateAction<
      Record<'Jacket' | 'Trousers' | 'Waistcoat', string | null | boolean>
    >
  >;
  activeStyle: Record<'Jacket' | 'Trousers', string>;
  setActiveStyle: React.Dispatch<
    React.SetStateAction<Record<'Jacket' | 'Trousers', string>>
  >;
  variations: Record<VariationKey, VariationType>;
  setVariation: (category: VariationKey, variation: VariationType) => void;
  jacketSelection: JacketSelection;
  dispatchJacketSelection: React.Dispatch<JacketAction>;
  trouserSelection: TrouserSelection;
  dispatchTrouserSelection: React.Dispatch<TrouserAction>;
  waistcoatSelection: WaistcoatSelection;
  dispatchWaistcoatSelection: React.Dispatch<WaistcoatAction>;
}

const FabricContext = createContext<FabricContextType | undefined>(undefined);

const initialJacketState: JacketSelection = {
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

const initialTrouserState: TrouserSelection = {
  selection: {
    Бүсэлхий: {
      waistband: 'Стандарт товчтой',
      details: 'Бүсний гогцоотой',
    },
    Халаас: 'Налуу',
    Нугалам: 'Стандарт 1 нугаламтай',
    Шуумаг: '4 см нугалсан',
    Товч: 'Хар хүрэн',
  },
};

const initialWaistcoatState: WaistcoatSelection = {
  selection: {
    Товчлолт: '4 товчтой',
    Энгэр: 'V хэлбэрийн',
    Халаас: 'Дотор оруулгатай',
    Нуруу: 'Торгон дотортой',
    Доторлогоо: 'Цагаан',
    Товч: 'Хар хүрэн',
  },
};

type JacketAction =
  | { type: 'SET_SELECTION'; category: string; option: string }
  | { type: 'SET_BUTTON'; option: { button?: string; sleeve?: string } }
  | { type: 'SET_LINING'; option: { lining?: string; color?: string } }
  | { type: 'SET_LAPEL'; option: { lapel?: string; width?: string } };

type TrouserAction =
  | { type: 'SET_SELECTION'; category: string; option: string }
  | { type: 'SET_WAISTBAND'; option: { waistband?: string; details?: string } };

type WaistcoatAction = {
  type: 'SET_SELECTION';
  category: string;
  option: string;
};

const jacketReducer = (
  state: JacketSelection,
  action: JacketAction,
): JacketSelection => {
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

const trouserReducer = (
  state: TrouserSelection,
  action: TrouserAction,
): TrouserSelection => {
  switch (action.type) {
    case 'SET_SELECTION':
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.category]: action.option,
        },
      };
    case 'SET_WAISTBAND':
      return {
        ...state,
        selection: {
          ...state.selection,
          Бүсэлхий: { ...state.selection.Бүсэлхий, ...action.option },
        },
      };
    default:
      return state;
  }
};

const waistcoatReducer = (
  state: WaistcoatSelection,
  action: WaistcoatAction,
): WaistcoatSelection => {
  switch (action.type) {
    case 'SET_SELECTION':
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.category]: action.option,
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
  const [activeStyle, setActiveStyle] = useState<
    Record<'Jacket' | 'Trousers', string>
  >({
    Jacket: 'Havana',
    Trousers: 'Brescia',
  });
  const [selectedStyle, setSelectedStyle] = useState<
    Record<'Jacket' | 'Trousers' | 'Waistcoat', string | null | boolean>
  >({
    Jacket: null,
    Trousers: null,
    Waistcoat: false,
  });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [variations, setVariations] = useState<
    Record<VariationKey, VariationType>
  >({
    Доторлогоо: 'lining',
    Товч: 'button',
    Энгэр: 'lapel',
    Бүсэлхий: 'waistband',
  });

  const [jacketSelection, dispatchJacketSelection] = useReducer(
    jacketReducer,
    initialJacketState,
  );

  const [trouserSelection, dispatchTrouserSelection] = useReducer(
    trouserReducer,
    initialTrouserState,
  );

  const [waistcoatSelection, dispatchWaistcoatSelection] = useReducer(
    waistcoatReducer,
    initialWaistcoatState,
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
        trouserSelection,
        dispatchTrouserSelection,
        waistcoatSelection,
        dispatchWaistcoatSelection,
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
