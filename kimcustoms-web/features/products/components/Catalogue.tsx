"use client";

import { useMemo, useState } from "react";

import CraftFilters from "./CraftFilters";
import ProductGrid from "./ProductGrid";

import {
  products,
  type Craft,
} from "../data/products";

export default function Catalogue() {
  const [activeCraft, setActiveCraft] =
    useState<Craft | "all">("all");

  const filteredProducts = useMemo(() => {
    if (activeCraft === "all") {
      return products;
    }

    return products.filter(
      (product) => product.craft === activeCraft
    );
  }, [activeCraft]);

  return (
    <section
      id="shop"
      className="kc-section kc-catalogue"
      aria-labelledby="catalogue-heading"
    >
      <div className="kc-container">
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
            Choose a craft, then find the piece that
            feels right. Every order is made around
            your photo, words or story.
          </p>
        </div>

        <CraftFilters
          activeCraft={activeCraft}
          onChange={setActiveCraft}
        />

        <div className="kc-catalogue-count">
          Showing{" "}
          <strong>
            {filteredProducts.length}
          </strong>{" "}
          {filteredProducts.length === 1
            ? "keepsake"
            : "keepsakes"}
        </div>

        <ProductGrid
          products={filteredProducts}
        />
      </div>
    </section>
  );
}