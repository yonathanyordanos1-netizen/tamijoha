import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

const serviceCategories = [
  {
    category: "Haircuts & Styling",
    items: [
      { name: "Classic Haircut", price: "350 ETB", desc: "Precision scissor & clipper cut" },
      { name: "Custom Cut", price: "500 ETB", desc: "Tailored styling with consultation" },
      { name: "Kids Haircut", price: "250 ETB", desc: "For ages 12 and under" },
      { name: "Buzz Cut", price: "250 ETB", desc: "Clean, uniform clipper cut" },
    ],
  },
  {
    category: "Colour & Treatment",
    items: [
      { name: "Hair Colour (Full)", price: "1,200 ETB", desc: "Premium permanent colour" },
      { name: "Hair Colour (Roots)", price: "700 ETB", desc: "Root touch-up application" },
      { name: "Scalp Treatment", price: "600 ETB", desc: "Deep cleansing & rejuvenation" },
      { name: "Shampoo & Condition", price: "200 ETB", desc: "Professional wash with luxury products" },
    ],
  },
  {
    category: "Grooming & Special",
    items: [
      { name: "Beard Trim & Shape", price: "300 ETB", desc: "Expert beard shaping & line-up" },
      { name: "Hot Towel Shave", price: "400 ETB", desc: "Traditional straight razor shave" },
      { name: "In-Home Service", price: "From 800 ETB", desc: "Premium grooming at your location" },
      { name: "Full Package", price: "1,500 ETB", desc: "Cut, colour, treatment & beard" },
    ],
  },
];

export default function Services() {
  useReveal();

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
            right: "-10%",
            top: "-20%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(205, 127, 50, 0.06), transparent 70%)",
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
            Our Services
          </p>
          <h1 className="section-title reveal">Services & Pricing</h1>
          <div className="section-divider" />
          <p className="section-subtitle reveal">
            Premium grooming services tailored to your style. Every cut, colour,
            and treatment is delivered with precision and care.
          </p>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="section">
        <div className="container">
          {serviceCategories.map((cat, catIdx) => (
            <div
              key={cat.category}
              className="reveal"
              style={{
                marginBottom: catIdx < serviceCategories.length - 1 ? "60px" : "0",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.6rem",
                  color: "var(--color-secondary)",
                  marginBottom: "24px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {cat.category}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "16px",
                }}
              >
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      padding: "20px 24px",
                      background: "var(--color-bg-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-secondary)";
                      e.currentTarget.style.transform = "translateX(6px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: "6px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                          }}
                        >
                          {item.name}
                        </h3>
                        <span
                          style={{
                            color: "var(--color-secondary)",
                            fontWeight: 700,
                            fontSize: "1.05rem",
                            fontFamily: "var(--font-heading)",
                            whiteSpace: "nowrap",
                            marginLeft: "16px",
                          }}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p
                        style={{
                          color: "var(--color-text-muted)",
                          fontSize: "0.85rem",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--color-primary-light)",
          textAlign: "center",
        }}
      >
        <div className="container reveal">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              marginBottom: "12px",
            }}
          >
            Not Sure What You Need?
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "500px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}
          >
            Book a consultation and we'll help you find the perfect style.
          </p>
          <Link to="/booking">
            <button className="btn btn-primary">
              Book a Consultation
              <span style={{ fontSize: "1.2rem" }}>→</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
