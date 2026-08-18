"use client";

import Link from "next/link";

import {
  FiArrowRight,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

import CartItem from "./CartItem";

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      <div
        className="kc-cart-backdrop"
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className="kc-cart-drawer"
        aria-label="Shopping cart"
      >

        <header className="kc-cart-header">

          <div>
            <span className="kc-eyebrow">
              Your keepsakes
            </span>

            <h2>
              Shopping bag
            </h2>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close shopping cart"
          >
            <FiX size={21} />
          </button>

        </header>

        {items.length === 0 ? (
          <div className="kc-cart-empty">

            <FiShoppingBag
              size={38}
              strokeWidth={1.2}
            />

            <h3>
              Your bag is empty
            </h3>

            <p>
              Find something meaningful
              and make it yours.
            </p>

            <button
              type="button"
              className="kc-btn kc-btn-teal"
              onClick={closeCart}
            >
              Continue shopping
            </button>

          </div>
        ) : (
          <>
            <div className="kc-cart-items">

              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={
                    removeFromCart
                  }
                  onUpdateQuantity={
                    updateQuantity
                  }
                />
              ))}

            </div>

            <div className="kc-cart-summary">

              <div className="kc-cart-subtotal">
                <span>
                  Subtotal
                </span>

                <strong>
                  KSh{" "}
                  {subtotal.toLocaleString(
                    "en-KE"
                  )}
                </strong>
              </div>

              <p>
                Delivery fees are calculated
                at checkout.
              </p>

              <Link
                href="/checkout"
                className="kc-btn kc-btn-rose kc-cart-checkout"
                onClick={closeCart}
              >
                Continue to checkout

                <FiArrowRight size={17} />
              </Link>

              <button
                type="button"
                className="kc-cart-continue"
                onClick={closeCart}
              >
                Continue shopping
              </button>

            </div>
          </>
        )}

      </aside>
    </>
  );
}