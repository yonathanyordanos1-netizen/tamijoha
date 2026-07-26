import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

const serviceCategories = [
  {
    category: "Hair Styling",
    items: [
      { name: "Hairstyling (Blow-dry)", price: "400 ETB", desc: "Professional blow-dry and styling" },
      { name: "Hairstyling (Curly)", price: "600 ETB", desc: "Specialized curly hair care & styling" },
      { name: "Hair Straightening", price: "800 ETB", desc: "Sleek straightening treatment" },
      { name: "Shampoo & Conditioning", price: "200 ETB", desc: "Professional wash with quality products" },
      { name: "Children's Haircut", price: "250 ETB", desc: "Gentle, patient cuts for kids" },
    ],
  },
  {
    category: "Braids & Extensions",
    items: [
      { name: "Braids (Full Head)", price: "1,000 ETB", desc: "Classic braiding styles" },
      { name: "Box Braids", price: "1,500 ETB", desc: "Full head classic box braids" },
      { name: "Twist Braids", price: "1,200 ETB", desc: "Elegant twist braid styles" },
      { name: "Curly Hair Extensions", price: "From 2,000 ETB", desc: "Premium quality curly extensions" },
      { name: "Hair Extensions", price: "From 2,500 ETB", desc: "Premium hair extensions installed" },
    ],
  },
  {
    category: "Colour Services",
    items: [
      { name: "Hair Colouring (Full)", price: "1,500 ETB", desc: "Premium permanent colour application" },
      { name: "Hair Colouring (Roots)", price: "800 ETB", desc: "Root touch-up application" },
      { name: "Hair Highlighting", price: "1,800 ETB", desc: "Full head foil highlights" },
      { name: "Hair Regrowth Treatment", price: "1,200 ETB", desc: "Root regrowth colour treatment" },
    ],
  },
  {
    category: "Makeup Services",
    items: [
      { name: "Makeup Application", price: "1,500 ETB", desc: "Professional makeup for any occasion" },
      { name: "Bridal Makeup", price: "3,000 ETB", desc: "Complete bridal makeup package" },
      { name: "Eye Makeup", price: "800 ETB", desc: "Professional eye makeup application" },
      { name: "Makeup Consultation", price: "500 ETB", desc: "Personalized makeup consultation & trial" },
    ],
  },
  {
    category: "Body & Additional",
    items: [
      { name: "Body Waxing (Full)", price: "800 ETB", desc: "Full body waxing service" },
      { name: "Body Waxing (Partial)", price: "400 ETB", desc: "Selective body waxing" },
      { name: "Eyebrow Shaping", price: "200 ETB", desc: "Precision eyebrow shaping" },
      { name: "Manicure", price: "500 ETB", desc: "Professional nail shaping, cuticle care & polish" },
      { name: "Pedicure", price: "600 ETB", desc: "Complete foot care & nail polish" },
    ],
  },
];

export default function Services() {
  useReveal([], { stagger: 0.04 });

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
            Our Services
          </p>
          <h1 className="section-title reveal">Services & Pricing</h1>
          <div className="section-divider" />
          <p className="section-subtitle reveal">
            From stunning hair transformations to flawless makeup artistry,
            every service is delivered with care, creativity, and expertise.
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
                    className="reveal"
                    data-reveal-type="reveal-fade-left"
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
                      e.currentTarget.style.transform = "translateX(8px)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(232, 180, 184, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
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
