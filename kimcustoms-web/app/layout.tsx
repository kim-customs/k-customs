import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "KimCustoms — Your story. Beautifully made.",
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
      <body>{children}</body>
    </html>
  );
}