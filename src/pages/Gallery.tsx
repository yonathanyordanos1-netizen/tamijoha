import { useState, useCallback } from "react";
import useReveal from "../hooks/useReveal";
import Lightbox from "../components/Lightbox";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Elegant hairstyling",
    category: "Hair",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80",
    alt: "Box braids styling",
    category: "Braids",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    alt: "Hair colouring transformation",
    category: "Colour",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80",
    alt: "Salon interior",
    category: "Salon",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80",
    alt: "Manicure service",
    category: "Nails",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80",
    alt: "Spa massage therapy",
    category: "Spa",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    alt: "Professional makeup",
    category: "Makeup",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    alt: "Salon products",
    category: "Salon",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    alt: "Elegant updo style",
    category: "Hair",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    alt: "Pedicure treatment",
    category: "Nails",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80",
    alt: "Relaxing body massage",
    category: "Spa",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Hair extensions styling",
    category: "Braids",
  },
];

const categories = ["All", "Hair", "Braids", "Colour", "Nails", "Spa", "Makeup", "Salon"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  useReveal([activeCategory], { stagger: 0.06 });

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
    );
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : null
    );
  }, [filteredImages.length]);

  const currentImage =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <div className="page-enter">
      {/* ===== HERO BANNER ===== */}
      <section
        style={{
          padding: "140px 0 80px",
          background: "var(--color-primary-light)",
          borderBottom: "1px solid var(--color-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-10%",
            bottom: "-30%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(232, 180, 184, 0.08), transparent 70%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p
            className="reveal"
            style={{
              color: "var(--color-secondary)",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Our Work
          </p>
          <h1 className="section-title reveal">Gallery</h1>
          <div className="section-divider" />
          <p className="section-subtitle reveal">
            Click on any image to view it in full size.            A showcase of our work — from stunning hairstyles and braids to
            flawless makeup and beauty transformations.
          </p>
        </div>
      </section>

      {/* ===== FILTER TABS ===== */}
      <section style={{ padding: "40px 0 20px" }}>
        <div className="container">
          <div
            className="reveal"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background:
                    activeCategory === cat
                      ? "var(--color-secondary)"
                      : "transparent",
                  color:
                    activeCategory === cat
                      ? "var(--color-primary)"
                      : "var(--color-text-muted)",
                  border: activeCategory === cat
                    ? "2px solid var(--color-secondary)"
                    : "2px solid var(--color-border)",
                  padding: "8px 20px",
                  borderRadius: "4px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "var(--color-secondary)";
                    e.currentTarget.style.color = "var(--color-secondary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-text-muted)";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section style={{ padding: "20px 0 80px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {filteredImages.map((img, i) => (
              <div
                key={img.id}
                className="reveal"
                onClick={() => openLightbox(i)}
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "pointer",
                  border: "1px solid var(--color-border)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: "scale(1)",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "scale(1.03)";
                  card.style.borderColor = "var(--color-secondary)";
                  card.style.boxShadow = "0 12px 40px rgba(232, 180, 184, 0.2)";
                  const overlay = card.querySelector(".overlay");
                  const imgEl = card.querySelector("img");
                  if (overlay) (overlay as HTMLElement).style.opacity = "1";
                  if (imgEl) (imgEl as HTMLElement).style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "scale(1)";
                  card.style.borderColor = "var(--color-border)";
                  card.style.boxShadow = "none";
                  const overlay = card.querySelector(".overlay");
                  const imgEl = card.querySelector("img");
                  if (overlay) (overlay as HTMLElement).style.opacity = "0";
                  if (imgEl) (imgEl as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "24px",
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <div>
                    <p
                      style={{
                        color: "var(--color-secondary)",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        marginBottom: "4px",
                      }}
                    >
                      {img.category}
                    </p>
                    <p style={{ fontWeight: 600, color: "#fff" }}>{img.alt}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p
              style={{
                textAlign: "center",
                color: "var(--color-text-muted)",
                padding: "60px 0",
              }}
            >
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {currentImage && (
        <Lightbox
          src={currentImage.src}
          alt={currentImage.alt}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          hasPrev={filteredImages.length > 1}
          hasNext={filteredImages.length > 1}
        />
      )}
    </div>
  );
}
