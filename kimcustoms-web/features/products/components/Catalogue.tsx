"use client";

import { useEffect, useMemo, useState } from "react";

import CraftFilters from "./CraftFilters";
import ProductGrid from "./ProductGrid";

import type { Product, Craft } from "../data/products";

import {
  getProducts,
} from "@/lib/api/products";

import {
  mapApiProductToProduct,
} from "../data/productAdapter";


export default function Catalogue() {
  const [products, setProducts] = useState<Product[]>([]);

  const [activeCraft, setActiveCraft] =
    useState<Craft | "all">("all");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);


  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        setError(null);

        const data = await getProducts();

        const mappedProducts =
          data.map(mapApiProductToProduct);

        setProducts(mappedProducts);

      } catch (err) {
        console.error(
          "Failed to load products:",
          err
        );

        setError(
          "We couldn't load the collection. Please try again."
        );

      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);


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


        <CraftFilters
          activeCraft={activeCraft}
          onChange={setActiveCraft}
        />


        {loading && (
          <div className="kc-catalogue-status">
            <p>
              Loading our keepsakes...
            </p>
          </div>
        )}


        {!loading && error && (
          <div
            className="kc-catalogue-status kc-catalogue-error"
            role="alert"
          >
            <p>{error}</p>

            <button
              type="button"
              className="kc-btn kc-btn-outline"
              onClick={() =>
                window.location.reload()
              }
            >
              Try again
            </button>
          </div>
        )}


        {!loading && !error && (
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

            <ProductGrid
              products={filteredProducts}
            />
          </>
        )}

      </div>
    </section>
  );
}