import type { Product } from "@/features/products/data/products";

export interface CartItem {
  id: string;

  product: Product;

  quantity: number;

  personalization: string;

  imageName?: string;

  imagePreview?: string;
}