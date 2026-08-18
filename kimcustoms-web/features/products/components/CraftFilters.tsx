"use client";

import type { Craft } from "../data/products";

interface CraftFiltersProps {
  activeCraft: Craft | "all";
  onChange: (craft: Craft | "all") => void;
}

const filters: {
  id: Craft | "all";
  label: string;
}[] = [
  {
    id: "all",
    label: "All keepsakes",
  },
  {
    id: "embroidery",
    label: "Embroidery",
  },
  {
    id: "wood-leather",
    label: "Wood & Leather",
  },
  {
    id: "metal-jewelry",
    label: "Metal Jewelry",
  },
];

export default function CraftFilters({
  activeCraft,
  onChange,
}: CraftFiltersProps) {
  return (
    <div
      className="kc-craft-filters"
      role="group"
      aria-label="Filter by craft"
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={
            activeCraft === filter.id
              ? "active"
              : ""
          }
          onClick={() => onChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}