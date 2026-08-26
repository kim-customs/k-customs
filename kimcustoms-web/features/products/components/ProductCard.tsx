import Link from "next/link";
import type { Product } from "../data/products";
import { FiArrowUpRight, FiImage } from "react-icons/fi";

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
  return (
    <article className="kc-product-card">
      <Link
        href={`/shop/${product.slug}`}
        className="kc-product-image"
        aria-label={`View ${product.name}`}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        ) : (
          <div
            className="kc-product-placeholder"
            aria-label={`${product.name} image unavailable`}
          >
            <FiImage
              size={34}
              strokeWidth={1.3}
            />

            <span>Product image</span>
          </div>
        )}

        {product.badge && (
          <span className="kc-product-badge">
            {product.badge}
          </span>
        )}

        <span
          className="kc-product-arrow"
          aria-hidden="true"
        >
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
            {product.price.toLocaleString("en-KE")}
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