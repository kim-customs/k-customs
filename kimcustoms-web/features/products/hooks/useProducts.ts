"use client";

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/lib/api/products";

export function useProducts(craft?: string) {
  return useQuery({
    queryKey: ["products", craft ?? "all"],

    queryFn: () => getProducts(craft),

    staleTime: 60 * 1000,
  });
}