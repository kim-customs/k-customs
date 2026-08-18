"use client";

import Link from "next/link";

import {
  FiMinus,
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import type { CartItem as CartItemType } from "../types/cart";

interface CartItemProps {
  item: CartItemType;

  onRemove: (
    id: string
  ) => void;

  onUpdateQuantity: (
    id: string,
    quantity: number
  ) => void;
}

export default function CartItem({
  item,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  const {
    product,
    quantity,
    personalization,
    imageName,
  } = item;

  const total =
    product.price * quantity;

  return (
    <article className="kc-cart-item">

      <div className="kc-cart-item-image">
        <span>
          {product.name.charAt(0)}
        </span>
      </div>

      <div className="kc-cart-item-content">

        <div className="kc-cart-item-header">

          <div>
            <span className="kc-product-craft">
              {product.craft ===
              "wood-leather"
                ? "Wood & Leather"
                : product.craft ===
                  "metal-jewelry"
                ? "Metal Jewelry"
                : "Embroidery"}
            </span>

            <h3>
              <Link
                href={`/shop/${product.slug}`}
              >
                {product.name}
              </Link>
            </h3>
          </div>

          <button
            type="button"
            className="kc-cart-remove"
            onClick={() =>
              onRemove(item.id)
            }
            aria-label={`Remove ${product.name}`}
          >
            <FiTrash2 size={15} />
          </button>

        </div>

        {personalization && (
          <p className="kc-cart-personalization">
            <strong>Personalization:</strong>{" "}
            {personalization}
          </p>
        )}

        {imageName && (
          <p className="kc-cart-photo">
            📷 {imageName}
          </p>
        )}

        <div className="kc-cart-item-footer">

          <div className="kc-cart-quantity">

            <button
              type="button"
              onClick={() =>
                onUpdateQuantity(
                  item.id,
                  quantity - 1
                )
              }
              aria-label="Decrease quantity"
            >
              <FiMinus size={12} />
            </button>

            <span>
              {quantity}
            </span>

            <button
              type="button"
              onClick={() =>
                onUpdateQuantity(
                  item.id,
                  quantity + 1
                )
              }
              aria-label="Increase quantity"
            >
              <FiPlus size={12} />
            </button>

          </div>

          <strong>
            KSh{" "}
            {total.toLocaleString(
              "en-KE"
            )}
          </strong>

        </div>

      </div>
    </article>
  );
}