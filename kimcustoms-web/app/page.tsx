import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/features/home/components/AnnouncementBar";
import Hero from "@/features/home/components/Hero";
import OccasionGrid from "@/features/home/components/OccasionGrid";
import Catalogue from "@/features/products/components/Catalogue";

export default function Home() {
  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <main id="top">
        <Hero />

        <OccasionGrid />

        <Catalogue />


        <section id="shop" className="kc-section">
          <div className="kc-container">
            <span className="kc-eyebrow">Bestselling keepsakes</span>

            <h2>
              Made one at a time,{" "}
              <span className="kc-em">from your photo.</span>
            </h2>

            <p>
              Every piece starts with your photo and your story — stitched on
              fabric, engraved in wood or leather, or marked in steel.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}