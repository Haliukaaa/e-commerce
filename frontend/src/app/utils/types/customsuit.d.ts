export interface Style {
  id: number;
  name: string;
  stylePrefix: string;
  image?: string;
}

export interface Material {
  id: number;
  name: string;
  price: string;
  fabricNumber: number;
  image?: string;
}

export interface FabricGroup {
  id: number;
  name: string;
  itemCount: number;
  images: string[];
}

interface Variation {
  name: string;
  description?: string;
  price?: number;
  url?: string;
}

interface JacketType {
  id: number;
  name: string;
  image: string;
  variations:
    | Variation[]
    | {
        button?: Variation[];
        sleeve?: Variation[];
        lining?: Variation[];
        color?: Variation[];
        lapel?: Variation[];
        width?: Variation[];
        buttonhole?: Variation[];
      };
}

export interface TrouserType {
  id: number;
  name: string;
  image: string;
  variations:
    | Variation[]
    | {
        waistband?: Variation[];
        details?: Variation[];
      };
}

export interface WaistcoatType {
  id: number;
  name: string;
  image: string;
  variations: Variation[];
}

export interface Product {
  id: string;
  name: string;
  price: string;
  images: {
    fabric: { layer: string; url: string };
    jacket: { layer: string; url: string }[];
    trousers: { layer: string; url: string }[];
  };
  description?: string;
  composition?: string;
  category?: string[];
  care?: string;
}

export type VariationKey = 'Доторлогоо' | 'Товч' | 'Энгэр' | 'Бүсэлхий';
export type VariationType =
  | 'lining'
  | 'color'
  | 'button'
  | 'sleeve'
  | 'width'
  | 'lapel'
  | 'waistband'
  | 'details';

export interface JacketSelection {
  selection: {
    Товчлолт: string;
    Товч: {
      button?: string;
      sleeve?: string;
    };
    Доторлогоо: {
      lining?: string;
      color?: string;
    };
    Энгэр: {
      lapel?: string;
      width?: string;
    };
    Монограм: string;
  };
}

export interface TrouserSelection {
  selection: {
    Бүсэлхий: {
      waistband?: string;
      details?: string;
    };
    Халаас: string;
    Нугалам: string;
    Шуумаг: string;
    Товч: string;
  };
}

export interface WaistcoatSelection {
  selection: {
    Товчлолт: string;
    'Энгэрийн загвар': string;
    Халаас: string;
    'Нурууны загвар': string;
    'Доторлогооны өнгө': string;
    Товч: string;
  };
}

export type SelectedValues = Record<
  string,
  | string
  | { button?: string; sleeve?: string }
  | { type?: string; color?: string }
  | { lapel?: string; width?: string }
>;

export type CategoryType = string | Record<string, string | undefined | null>;
