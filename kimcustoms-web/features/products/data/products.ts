export type Craft = "embroidery" | "wood-leather" | "metal-jewelry";

export type Occasion =
  | "love"
  | "parents"
  | "graduation"
  | "memory"
  | "wedding"
  | "diaspora";

export interface Product {
  id: string;
  name: string;
  slug: string;
  craft: Craft;
  price: number;
  currency: "KES";
  description: string;
  badge?: string;
  occasions: Occasion[];
  customizable: boolean;
  image?: string;
}

export const products: Product[] = [
  {
    id: "portrait-hoodie",
    name: "Portrait Hoodie",
    slug: "portrait-hoodie",
    craft: "embroidery",
    price: 3500,
    currency: "KES",
    description:
      "A custom embroidered portrait made from your favourite photo.",
    badge: "Bestseller",
    occasions: ["love", "parents", "graduation", "diaspora"],
    customizable: true,
  },

  {
    id: "handwriting-hoodie",
    name: "Handwriting Hoodie",
    slug: "handwriting-hoodie",
    craft: "embroidery",
    price: 3200,
    currency: "KES",
    description:
      "Their handwriting transformed into a personal embroidered keepsake.",
    occasions: ["love", "parents", "memory", "diaspora"],
    customizable: true,
  },

  {
    id: "couple-portrait-sweatshirt",
    name: "Couple Portrait Sweatshirt",
    slug: "couple-portrait-sweatshirt",
    craft: "embroidery",
    price: 3800,
    currency: "KES",
    description:
      "A custom embroidered portrait created especially for two.",
    occasions: ["love", "wedding"],
    customizable: true,
  },

  {
    id: "engraved-name-plaque",
    name: "Engraved Name Plaque",
    slug: "engraved-name-plaque",
    craft: "wood-leather",
    price: 1800,
    currency: "KES",
    description:
      "A personalised engraved plaque made to celebrate someone special.",
    occasions: ["parents", "graduation", "wedding", "diaspora"],
    customizable: true,
  },

  {
    id: "handwriting-keyring",
    name: "Handwriting Keyring",
    slug: "handwriting-keyring",
    craft: "wood-leather",
    price: 1200,
    currency: "KES",
    description:
      "Keep a meaningful handwritten message close wherever you go.",
    occasions: ["love", "parents", "memory", "diaspora"],
    customizable: true,
  },

  {
    id: "wallet-card-holder",
    name: "Wallet / Card Holder",
    slug: "Wallet-card-holder",
    craft: "wood-leather",
    price: 2200,
    currency: "KES",
    description:
      "A practical leather keepsake personalised with your chosen detail.",
    occasions: ["love", "parents", "graduation", "diaspora"],
    customizable: true,
  },

  {
    id: "photo-engraved-necklace",
    name: "Photo-engraved Necklace",
    slug: "photo-engraved-necklace",
    craft: "metal-jewelry",
    price: 2500,
    currency: "KES",
    description:
      "A photo engraved onto a wearable piece to keep someone close.",
    occasions: ["love", "parents", "memory", "diaspora"],
    customizable: true,
  },

  {
    id: "coordinates-bar",
    name: "Coordinates Bar",
    slug: "coordinates-bar",
    craft: "metal-jewelry",
    price: 2000,
    currency: "KES",
    description:
      "Carry the coordinates of a meaningful place wherever you go.",
    occasions: ["love", "wedding", "diaspora"],
    customizable: true,
  },

  {
    id: "handwriting-pendant",
    name: "Handwriting Pendant",
    slug: "handwriting-pendant",
    craft: "metal-jewelry",
    price: 2400,
    currency: "KES",
    description:
      "A handwritten message transformed into a timeless pendant.",
    occasions: ["love", "parents", "memory", "diaspora"],
    customizable: true,
  },
];