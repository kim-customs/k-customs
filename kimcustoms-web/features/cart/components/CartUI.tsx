"use client";

import CartDrawer from "./CartDrawer";
import CartNotification from "./CartNotification";

export default function CartUI() {
  return (
    <>
      <CartNotification />
      <CartDrawer />
    </>
  );
}