"use client";

import { useMemo, useState } from "react";

import CraftFilters from "./CraftFilters";
import ProductGrid from "./ProductGrid";

import type { Craft } from "../data/products";
import { mapApiProductToProduct } from "../data/productAdapter";
import { useProducts } from "../hooks/useProducts";

export default function Catalogue() {
  const [activeCraft, setActiveCraft] =
    useState<Craft | "all">("all");

  const {
    data: apiProducts = [],
    isLoading,
    isError,
  } = useProducts();

  // Convert API products into the frontend Product format.
  const products = useMemo(
    () =>
      apiProducts.map(mapApiProductToProduct),
    [apiProducts]
  );

  const filteredProducts = useMemo(() => {
    if (activeCraft === "all") {
      return products;
    }

    return products.filter(
      (product) =>
        product.craft === activeCraft
    );
  }, [products, activeCraft]);

  return (
    <section
      id="shop"
      className="kc-section kc-catalogue"
      aria-labelledby="catalogue-heading"
    >
      <div className="kc-container">
        {/* Section heading */}
        <div className="kc-section-head">
          <span className="kc-eyebrow">
            The keepsake collection
          </span>

          <h2 id="catalogue-heading">
            Made to mean{" "}
            <span className="kc-em">
              something.
            </span>
          </h2>

          <p>
            Choose a craft, then find the piece
            that feels right. Every order is made
            around your photo, words or story.
          </p>
        </div>

        {/* Craft filters */}
        <CraftFilters
          activeCraft={activeCraft}
          onChange={setActiveCraft}
        />

        {/* Loading state */}
        {isLoading && (
          <div
            className="kc-catalogue-count"
            aria-live="polite"
          >
            Loading keepsakes...
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div
            className="kc-catalogue-count"
            role="alert"
          >
            Unable to load the catalogue.
            Please try again.
          </div>
        )}

        {/* Catalogue */}
        {!isLoading && !isError && (
          <>
            <div className="kc-catalogue-count">
              Showing{" "}
              <strong>
                {filteredProducts.length}
              </strong>{" "}
              {filteredProducts.length === 1
                ? "keepsake"
                : "keepsakes"}
            </div>

            {filteredProducts.length > 0 ? (
              <ProductGrid
                products={filteredProducts}
              />
            ) : (
              <div className="kc-catalogue-empty">
                <p>
                  No keepsakes found in this
                  category.
                </p>

                <button
                  type="button"
                  className="kc-btn kc-btn-outline"
                  onClick={() =>
                    setActiveCraft("all")
                  }
                >
                  View all keepsakes
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

