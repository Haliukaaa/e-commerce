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

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
  composition?: string;
  category?: string[];
  care?: string;
}
