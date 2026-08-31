export type Craft =
  | "embroidery"
  | "wood-leather"
  | "metal-jewelry";

export type Occasion =
  | "love"
  | "parents"
  | "graduation"
  | "memory"
  | "wedding"
  | "diaspora";

export interface ProductImage {
  id: number;
  image: string;
  alt_text: string;
  is_primary: boolean;
}

export interface Product {
  id: string;

  name: string;

  slug: string;

  craft: Craft;

  price: number;

  currency: "KES";

  description: string;

  badge?: string;

  occasions: Occasion[];

  customizable: boolean;

  stockQuantity: number;

  isActive: boolean;

  images: ProductImage[];

  primaryImage?: string;
}