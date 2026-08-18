import type { CartItem } from "../types/cart";

const CART_STORAGE_KEY = "kimcustoms-cart";

export function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored =
      localStorage.getItem(
        CART_STORAGE_KEY
      );

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch (error) {
    console.error(
      "Failed to read KimCustoms cart:",
      error
    );

    return [];
  }
}

export function saveCart(
  items: CartItem[]
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(items)
    );
  } catch (error) {
    console.error(
      "Failed to save KimCustoms cart:",
      error
    );
  }
}

export function clearStoredCart(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(
      CART_STORAGE_KEY
    );
  } catch (error) {
    console.error(
      "Failed to clear KimCustoms cart:",
      error
    );
  }
}