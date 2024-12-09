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

interface JacketVariation {
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
    | JacketVariation[]
    | {
        button?: JacketVariation[];
        sleeve?: JacketVariation[];
        lining?: JacketVariation[];
        color?: JacketVariation[];
        lapel?: JacketVariation[];
        width?: JacketVariation[];
        buttonhole?: JacketVariation[];
      };
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

export type VariationKey = 'Доторлогоо' | 'Товч' | 'Энгэр';
export type VariationType =
  | 'lining'
  | 'color'
  | 'button'
  | 'sleeve'
  | 'width'
  | 'lapel';

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

export type SelectedValues = Record<
  string,
  | string
  | { button?: string; sleeve?: string }
  | { type?: string; color?: string }
  | { lapel?: string; width?: string }
>;

export type CategoryType = string | Record<string, string | undefined | null>;
