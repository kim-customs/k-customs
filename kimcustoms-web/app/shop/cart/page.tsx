import Link from "next/link";

import CartPageContent from "@/features/cart/components/CartPageContent";

export default function CartPage() {
  return (
    <main>
      <section className="kc-cart-page">
        <div className="kc-container">
          <div className="kc-cart-header">
            <div>
              <span className="kc-eyebrow">
                Your keepsakes
              </span>

              <h1>Your Bag</h1>

              <p>
                Review your personalized pieces
                before continuing to checkout.
              </p>
            </div>

            <Link
              href="/#shop"
              className="kc-cart-continue"
            >
              Continue shopping
            </Link>
          </div>

          <CartPageContent />
        </div>
      </section>
    </main>
  );
}