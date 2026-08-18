"use client";

import Link from "next/link";

import {
  FiArrowRight,
  FiCheck,
  FiX,
} from "react-icons/fi";

import { useCart } from "../context/CartContext";

export default function CartNotification() {
  const {
    notification,
    dismissNotification,
  } = useCart();

  if (!notification) {
    return null;
  }

  return (
    <div
      className="kc-cart-notification"
      role="status"
      aria-live="polite"
    >
      <div className="kc-cart-notification-icon">
        <FiCheck size={17} />
      </div>

      <div className="kc-cart-notification-content">
        <strong>
          Added to your bag
        </strong>

        <span>
          {notification.productName}
        </span>

        <Link
          href="/shop/cart"
          onClick={dismissNotification}
        >
          View bag

          <FiArrowRight size={14} />
        </Link>
      </div>

      <button
        type="button"
        onClick={dismissNotification}
        aria-label="Dismiss notification"
      >
        <FiX size={16} />
      </button>
    </div>
  );
}