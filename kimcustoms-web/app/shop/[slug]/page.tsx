import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheck,
  FiHeart,
  FiImage,
  FiUpload,
} from "react-icons/fi";

import {
  products,
  type Product,
} from "@/features/products/data/products";

import CustomizationForm from "./CustomizationForm";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getProduct(slug: string): Product | undefined {
  return products.find(
    (product) => product.slug === slug
  );
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="kc-product-page">
      <div className="kc-container">

        {/* Breadcrumb */}
        <div className="kc-product-breadcrumb">
          <Link href="/#shop">
            <FiArrowLeft size={15} />
            Back to keepsakes
          </Link>
        </div>

        <div className="kc-product-layout">

          {/* Product visual */}
          <div className="kc-product-detail-image">

            <div className="kc-product-detail-placeholder">
              <FiImage
                size={48}
                strokeWidth={1.2}
              />

              <span>Product image</span>
            </div>

            {product.badge && (
              <span className="kc-product-detail-badge">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product information */}
          <div className="kc-product-detail-info">

            <span className="kc-product-craft">
              {getCraftLabel(product.craft)}
            </span>

            <h1>
              {product.name}
            </h1>

            <div className="kc-product-detail-price">
              KSh{" "}
              {product.price.toLocaleString("en-KE")}
            </div>

            <p className="kc-product-detail-description">
              {product.description}
            </p>

            <div className="kc-product-benefits">
              <div>
                <FiCheck size={16} />
                Made to order
              </div>

              <div>
                <FiCheck size={16} />
                Personalised for you
              </div>

              <div>
                <FiCheck size={16} />
                Delivery available across Kenya
              </div>
            </div>

            <CustomizationForm product={product} />

          </div>
        </div>
      </div>
    </main>
  );
}

function getCraftLabel(
  craft: Product["craft"]
) {
  const labels = {
    embroidery: "Embroidery",
    "wood-leather": "Wood & Leather",
    "metal-jewelry": "Metal Jewelry",
  };

  return labels[craft];
}