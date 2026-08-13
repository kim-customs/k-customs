import Link from "next/link";

export default function Footer() {
  return (
    <footer className="kc-footer">
      <div className="kc-container">
        <div className="kc-footer-grid">
          <div>
            <Link href="/" className="kc-footer-brand">
              KimCustoms
            </Link>

            <p>
              Thoughtful, personalized keepsakes made from the moments that
              matter.
            </p>
          </div>

          <div>
            <h4>Explore</h4>

            <Link href="#shop">Shop</Link>
            <Link href="#how">How it works</Link>
            <Link href="#faq">FAQ</Link>
          </div>

          <div>
            <h4>Get in touch</h4>

            <a href="mailto:hello@kimcustoms.com">
              hello@kimcustoms.com
            </a>

            <a href="#contact">Contact us</a>
          </div>
        </div>

        <div className="kc-footer-note">
          © {new Date().getFullYear()} KimCustoms. All rights reserved.
        </div>
      </div>
    </footer>
  );
}