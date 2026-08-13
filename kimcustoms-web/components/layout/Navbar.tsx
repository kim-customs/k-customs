"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<"KSh" | "USD">("KSh");

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((current) => !current);
  };

  return (
    <header className="kc-navbar">
      <div className="kc-container">
        <nav className="kc-nav" aria-label="Main navigation">

          {/* Brand */}
          <Link
            href="/"
            className="kc-brand"
            onClick={closeMenu}
            aria-label="KimCustoms home"
          >
            <span className="kc-brand-mark" aria-hidden="true">
              K
            </span>

            <span className="kc-brand-text">
              <span className="kc-brand-name">
                KimCustoms
              </span>

              <small>
                Nairobi · est. 2026
              </small>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="kc-desktop-links">
            <a href="#occasions">Shop by occasion</a>
            <a href="#shop">Keepsakes</a>
            <a href="#how">How it works</a>
            <a href="#reviews">Reviews</a>
            <a href="#diaspora">From abroad</a>
            <a href="#corporate">Corporate</a>
          </div>

          {/* Actions */}
          <div className="kc-nav-actions">

            {/* Currency */}
            <div
              className="kc-currency"
              role="group"
              aria-label="Currency"
            >
              <button
                type="button"
                className={currency === "KSh" ? "active" : ""}
                onClick={() => setCurrency("KSh")}
                aria-pressed={currency === "KSh"}
              >
                KSh
              </button>

              <button
                type="button"
                className={currency === "USD" ? "active" : ""}
                onClick={() => setCurrency("USD")}
                aria-pressed={currency === "USD"}
              >
                USD
              </button>
            </div>

            {/* Cart */}
            <button
              type="button"
              className="kc-cart-button"
              aria-label="Open shopping cart"
            >
              <FiShoppingBag size={20} strokeWidth={1.8} />

              <span
                className="kc-cart-count"
                aria-label="0 items in cart"
              >
                0
              </span>
            </button>

            {/* Mobile menu */}
            <button
              type="button"
              className="kc-menu-toggle"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="kc-mobile-navigation"
              onClick={toggleMenu}
            >
              {open ? (
                <FiX size={23} strokeWidth={1.8} />
              ) : (
                <FiMenu size={23} strokeWidth={1.8} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            id="kc-mobile-navigation"
            className={`kc-mobile-menu ${
              open ? "open" : ""
            }`}
          >
            <a href="#occasions" onClick={closeMenu}>
              Shop by occasion
            </a>

            <a href="#shop" onClick={closeMenu}>
              Keepsakes
            </a>

            <a href="#how" onClick={closeMenu}>
              How it works
            </a>

            <a href="#reviews" onClick={closeMenu}>
              Reviews
            </a>

            <a href="#diaspora" onClick={closeMenu}>
              From abroad
            </a>

            <a href="#corporate" onClick={closeMenu}>
              Corporate
            </a>

            <div className="kc-mobile-divider" />

            <a
              href="#shop"
              className="kc-mobile-order"
              onClick={closeMenu}
            >
              Start an order
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}