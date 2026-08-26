import apiClient from "./client";

export interface ProductImage {
  id: number;
  image: string;
  alt_text: string;
  is_primary: boolean;
}

export interface ApiProduct {
  id: number;
  name: string;
  slug: string;
  craft: "embroidery" | "wood-leather" | "metal-jewelry";
  description: string;
  price: string;
  badge: string;
  occasions: string[];
  customizable: boolean;
  stock_quantity: number;
  is_active: boolean;
  images: ProductImage[];
  primary_image: string | null;
  created_at: string;
  updated_at: string;
}

export async function getProducts(
  craft?: string
): Promise<ApiProduct[]> {
  const response = await apiClient.get<ApiProduct[]>(
    "/products/",
    {
      params: craft ? { craft } : undefined,
    }
  );

  return response.data;
}

export async function getProduct(
  slug: string
): Promise<ApiProduct> {
  const response = await apiClient.get<ApiProduct>(
    `/products/${slug}/`
  );

  return response.data;
}