import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

const services = [
  { title: "Custom Cut", desc: "Precision scissors & clipper work tailored to your style" },
  { title: "Hair Colouring", desc: "Premium colour treatments from subtle to bold" },
  { title: "Scalp Treatment", desc: "Rejuvenating scalp care for healthy hair growth" },
  { title: "Shampoo & Conditioning", desc: "Professional wash with luxury products" },
  { title: "Beard Grooming", desc: "Expert beard shaping, trimming & conditioning" },
  { title: "In-Home Service", desc: "Premium grooming at your doorstep" },
];

const testimonials = [
  {
    name: "Yonas A.",
    text: "Best barbershop in Addis! The attention to detail is unmatched. My go-to spot for every cut.",
    rating: 5,
  },
  {
    name: "Michael T.",
    text: "Professional, clean, and incredibly talented barbers. The scalp treatment changed my hair game completely.",
    rating: 5,
  },
  {
    name: "David K.",
    text: "Tamijoha sets the standard for men's grooming in the city. The in-home service is a game changer.",
    rating: 5,
  },
];

export default function Home() {
  useReveal();

  return (
    <div className="page-enter">
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "0 24px",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-hero)",
            zIndex: 0,
          }}
        />

        {/* Decorative lines */}
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "20%",
            width: "1px",
            height: "60vh",
            background: "linear-gradient(to bottom, transparent, rgba(205, 127, 50, 0.15), transparent)",
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal" style={{ maxWidth: "750px" }}>
            <p
              style={{
                color: "var(--color-secondary)",
                textTransform: "uppercase",
                letterSpacing: "4px",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              Premium Men's Grooming
            </p>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 8vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                marginBottom: "24px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Addis Ababa's
              <br />
              <span style={{ color: "var(--color-secondary)" }}>
                Finest Cut
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-text-muted)",
                maxWidth: "540px",
                lineHeight: 1.8,
                marginBottom: "36px",
              }}
            >
              Where precision meets artistry. Experience world-class barbering
              in the heart of Addis — custom cuts, premium colour, and
              treatments that redefine men's grooming.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link to="/booking">
                <button className="btn btn-primary">
                  Book Appointment
                  <span style={{ fontSize: "1.2rem" }}>→</span>
                </button>
              </Link>
              <Link to="/services">
                <button className="btn btn-outline">Our Services</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "var(--color-text-muted)",
            fontSize: "0.75rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <span>Scroll</span>
          <div
            style={{
              width: "1px",
              height: "30px",
              background: "linear-gradient(to bottom, var(--color-secondary), transparent)",
            }}
          />
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="section" style={{ background: "var(--color-primary-light)" }}>
        <div className="container">
          <div className="reveal">
            <p
              style={{
                color: "var(--color-secondary)",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "0.8rem",
                fontWeight: 600,
                textAlign: "center",
                marginBottom: "8px",
              }}
            >
              What We Offer
            </p>
            <h2 className="section-title">Premium Services</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              From classic cuts to modern styles, every service is crafted with
              precision and care.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            {services.map((service, i) => (
              <div
                key={service.title}
                className="reveal"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "32px 28px",
                  transition: "all 0.35s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-secondary)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(205, 127, 50, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(205, 127, 50, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    fontSize: "1.2rem",
                    color: "var(--color-secondary)",
                    fontStyle: "italic",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    marginBottom: "10px",
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{ textAlign: "center", marginTop: "40px" }}
          >
            <Link to="/services">
              <button className="btn btn-outline">View All Services & Pricing</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / STATS ===== */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {[
              { number: "100+", label: "Happy Clients" },
              { number: "5.0", label: "Google Rating" },
              { number: "6+", label: "Premium Services" },
              { number: "3+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="reveal">
                <div
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-secondary)",
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" style={{ background: "var(--color-primary-light)" }}>
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="section-divider" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "32px",
                  position: "relative",
                }}
              >
                {/* Quote marks */}
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "4rem",
                    color: "rgba(205, 127, 50, 0.15)",
                    position: "absolute",
                    top: "8px",
                    left: "20px",
                    lineHeight: 1,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    color: "var(--color-text)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                    fontStyle: "italic",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {t.text}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong style={{ color: "var(--color-secondary)" }}>
                    {t.name}
                  </strong>
                  <div style={{ color: "var(--color-secondary)", letterSpacing: "2px" }}>
                    {"★".repeat(t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section">
        <div
          className="container"
          style={{ textAlign: "center" }}
        >
          <div className="reveal">
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontFamily: "var(--font-heading)",
                marginBottom: "16px",
              }}
            >
              Ready for a Fresh Look?
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1.05rem",
                maxWidth: "500px",
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              Book your appointment today and experience premium men's grooming
              at Tamijoha Men's Studio.
            </p>
            <Link to="/booking">
              <button className="btn btn-primary" style={{ fontSize: "1rem", padding: "16px 40px" }}>
                Schedule Your Visit
                <span style={{ fontSize: "1.3rem" }}>→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
