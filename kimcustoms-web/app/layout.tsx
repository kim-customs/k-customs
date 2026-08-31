import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import { CartProvider } from "@/features/cart/context/CartContext";
import CartUI from "@/features/cart/components/CartUI";
import QueryProvider from "@/providers/QueryProvider";

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
        <QueryProvider>
          <CartProvider>
            {children}

            <CartUI />
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}