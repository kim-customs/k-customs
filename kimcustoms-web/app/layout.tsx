import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import {
  CartProvider,
} from "@/features/cart/context/CartContext";

import CartDrawer from "@/features/cart/components/CartDrawer";

import CartNotification from "@/features/cart/components/CartNotification";

export const metadata: Metadata = {
  title:
    "KimCustoms — Your story. Beautifully made.",

  description:
    "Custom embroidery, engraving and personalized keepsakes made from your photos, handwriting and stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}

          <CartDrawer />

          <CartNotification />
        </CartProvider>
      </body>
    </html>
  );
}