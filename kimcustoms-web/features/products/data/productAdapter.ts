import type { Product } from "./products";
import type { ApiProduct } from "@/lib/api/products";

export function mapApiProductToProduct(
  product: ApiProduct
): Product {
  return {
    id: String(product.id),

    name: product.name,

    slug: product.slug,

    craft: product.craft,

    price: Number(product.price),

    currency: "KES",

    description: product.description,

    badge: product.badge || undefined,

    occasions:
      product.occasions as Product["occasions"],

    customizable: product.customizable,

    stockQuantity: product.stock_quantity,

    isActive: product.is_active,

    images: product.images,

    primaryImage:
      product.primary_image || undefined,
  };
}