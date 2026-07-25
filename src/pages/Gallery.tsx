import { useState } from "react";
import useReveal from "../hooks/useReveal";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Precision haircut",
    category: "Cuts",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80",
    alt: "Beard grooming",
    category: "Beard",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=600&q=80",
    alt: "Hair colouring session",
    category: "Colour",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503951914875-452cb02b3ced?w=600&q=80",
    alt: "Barbershop interior",
    category: "Shop",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&q=80",
    alt: "Modern haircut style",
    category: "Cuts",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80",
    alt: "Classic shave",
    category: "Beard",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560869713-da86b9fa4c5a?w=600&q=80",
    alt: "Scalp treatment",
    category: "Treatment",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1585747861115-1bbd98a5e132?w=600&q=80",
    alt: "Barber tools",
    category: "Shop",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=600&q=80",
    alt: "Styled haircut",
    category: "Cuts",
  },
];

const categories = ["All", "Cuts", "Beard", "Colour", "Treatment", "Shop"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  useReveal([activeCategory]);

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
            background: "radial-gradient(circle, rgba(205, 127, 50, 0.05), transparent 70%)",
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
            A showcase of our craft — from precision cuts to complete
            transformations.
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
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="reveal"
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "pointer",
                  border: "1px solid var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(".overlay");
                  const imgEl = e.currentTarget.querySelector("img");
                  if (overlay) (overlay as HTMLElement).style.opacity = "1";
                  if (imgEl) (imgEl as HTMLElement).style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(".overlay");
                  const imgEl = e.currentTarget.querySelector("img");
                  if (overlay) (overlay as HTMLElement).style.opacity = "0";
                  if (imgEl) (imgEl as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "20px",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
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
                    <p style={{ fontWeight: 600 }}>{img.alt}</p>
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
    </div>
  );
}
