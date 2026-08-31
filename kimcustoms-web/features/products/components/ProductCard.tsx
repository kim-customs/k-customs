import Link from "next/link";
import {
  FiArrowUpRight,
  FiImage,
} from "react-icons/fi";

import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

const craftLabels = {
  embroidery: "Embroidery",
  "wood-leather": "Wood & Leather",
  "metal-jewelry": "Metal Jewelry",
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const image =
    product.primaryImage ||
    product.images.find(
      (item) => item.is_primary
    )?.image ||
    product.images[0]?.image;

  return (
    <article className="kc-product-card">
      <Link
        href={`/shop/${product.slug}`}
        className="kc-product-image"
        aria-label={`View ${product.name}`}
      >
        {image ? (
          <img
            src={image}
            alt={
              product.images.find(
                (item) => item.image === image
              )?.alt_text ||
              product.name
            }
          />
        ) : (
          <div className="kc-product-placeholder">
            <FiImage
              size={34}
              strokeWidth={1.3}
            />

            <span>
              Product image
            </span>
          </div>
        )}

        {product.badge && (
          <span className="kc-product-badge">
            {product.badge}
          </span>
        )}

        <span className="kc-product-arrow">
          <FiArrowUpRight size={18} />
        </span>
      </Link>

      <div className="kc-product-body">
        <span className="kc-product-craft">
          {craftLabels[product.craft]}
        </span>

        <h3>
          <Link href={`/shop/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        <p>
          {product.description}
        </p>

        <div className="kc-product-footer">
          <strong>
            KSh{" "}
            {product.price.toLocaleString(
              "en-KE"
            )}
          </strong>

          {product.customizable && (
            <span className="kc-customizable">
              Custom
            </span>
          )}
        </div>
      </div>
    </article>
  );
}