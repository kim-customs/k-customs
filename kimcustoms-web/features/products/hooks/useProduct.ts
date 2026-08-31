"use client";

import { useQuery } from "@tanstack/react-query";

import { getProduct } from "@/lib/api/products";

export function useProduct(slug: string) {
  return useQuery({
    queryKey: ["product", slug],

    queryFn: () => getProduct(slug),

    enabled: Boolean(slug),

    staleTime: 60 * 1000,
  });
}