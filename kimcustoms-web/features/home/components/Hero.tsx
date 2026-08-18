import Link from "next/link";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="kc-hero">
      <div className="kc-container">
        <div className="kc-hero-grid">
          <div className="kc-hero-content">
            <span className="kc-eyebrow">
              Custom embroidery & engraving · Nairobi, Kenya
            </span>

            <h1>
              Their photo.
              <br />
              Their story.
              <br />
              <span className="kc-stitch">Stitched forever.</span>
            </h1>

            <p className="kc-hero-copy">
              Send us the photo that matters and the story behind it. We turn
              it into an embroidered hoodie, their handwriting in stitches, an
              engraved keepsake in wood or leather, or photo-engraved steel
              jewelry — and deliver it anywhere in Kenya.
            </p>

            <div className="kc-hero-actions">
              <Link href="#shop" className="kc-btn kc-btn-rose">
                Start an order
                <FiArrowRight size={17} />
              </Link>

              <a
                href="https://wa.me/2547XXXXXXXX"
                className="kc-btn kc-btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMessageCircle size={17} />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="kc-hero-visual" aria-hidden="true">
            <div className="kc-hero-art">
              <div className="kc-art-card kc-art-card-main">
                <span>YOUR PHOTO</span>

                <div className="kc-photo-placeholder">
                  <span>♡</span>
                </div>
              </div>

              <div className="kc-thread-path" />

              <div className="kc-art-tag">
                Made with meaning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}