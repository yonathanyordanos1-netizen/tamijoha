import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import useParallax from "../hooks/useParallax";
import useCounter from "../hooks/useCounter";

const services = [
  { title: "Hair Styling & Braids", desc: "Expert braiding, styling, and customization for women and kids", icon: "💇‍♀️" },
  { title: "Hair Colouring", desc: "Premium colour, highlights, regrowth touch-ups, and straightening", icon: "🎨" },
  { title: "Makeup Services", desc: "Professional makeup for any occasion — from daily glam to bridal", icon: "💄" },
  { title: "Kids Haircuts", desc: "Gentle, patient styling for children in a welcoming environment", icon: "👶" },
  { title: "Hair Extensions", desc: "Premium quality extensions for length, volume, and style", icon: "✨" },
  { title: "Body Waxing", desc: "Smooth, gentle waxing services for a flawless finish", icon: "🪒" },
];

const testimonials = [
  {
    name: "Meron D.",
    text: "Zoe is absolutely amazing! My braids came out perfect and the makeup for my sister's wedding was flawless. Highly recommend!",
    rating: 5,
  },
  {
    name: "Hanna T.",
    text: "I've been coming here for months and my hair has never looked better. The colour matching is incredible — truly talented stylists!",
    rating: 5,
  },
  {
    name: "Selamawit K.",
    text: "Best salon in Summit Pepsi area! My daughter loves getting her hair done here. The staff is so patient and welcoming with kids.",
    rating: 5,
  },
  {
    name: "Bethlehem A.",
    text: "The makeup services are top-notch! I felt like a queen on my wedding day. Thank you Zoe team for making me look beautiful!",
    rating: 5,
  },
];

function FloatingParticles() {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 4 + Math.random() * 8,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
    opacity: 0.08 + Math.random() * 0.12,
  }));

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "var(--color-secondary)",
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  useReveal([], { stagger: 0.08 });
  useParallax([], { speed: 0.2 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [clientCount, clientsRef] = useCounter({ end: 300, suffix: "+" });
  const [serviceCount, servicesRef] = useCounter({ end: 12, suffix: "+" });
  const [ratingDisplay, ratingRef] = useCounter({ end: 5, suffix: ".0" });
  const [yearCount, yearsRef] = useCounter({ end: 3, suffix: "+" });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-enter">
      {/* ===== HERO SECTION ===== */}
      <section
        data-parallax
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-hero)",
            zIndex: 0,
          }}
        />
        <FloatingParticles />
        <div
          style={{
            position: "absolute",
            right: "5%",
            top: "20%",
            width: "1px",
            height: "60vh",
            background: "linear-gradient(to bottom, transparent, rgba(232, 180, 184, 0.15), transparent)",
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
              Summit Pepsi's Premier Beauty Destination
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
              Zoe Hair Salon
              <br />
              <span style={{ color: "var(--color-secondary)" }}>
                & Makeup Studio
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
              Specializing in all women & kids hair style and makeup. From
              intricate braiding and flawless colour to stunning makeup — your
              one-stop destination for all things glamorous.
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
            animation: "float 2s ease-in-out infinite",
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
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              From stunning hairstyles to flawless makeup, every service is
              crafted with care, creativity, and excellence.
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
                data-reveal-type="reveal-scale-in"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                  padding: "36px 28px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.borderColor = "var(--color-secondary)";
                  card.style.transform = "translateY(-8px)";
                  card.style.boxShadow = "0 12px 40px rgba(232, 180, 184, 0.2)";
                  const icon = card.querySelector(".service-icon") as HTMLElement;
                  if (icon) icon.style.transform = "scale(1.15)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.borderColor = "var(--color-border)";
                  card.style.transform = "none";
                  card.style.boxShadow = "none";
                  const icon = card.querySelector(".service-icon") as HTMLElement;
                  if (icon) icon.style.transform = "scale(1)";
                }}
              >
                <div
                  className="service-icon"
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "rgba(232, 180, 184, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                    fontSize: "1.5rem",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {service.icon}
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

          <div className="reveal" style={{ textAlign: "center", marginTop: "40px" }}>
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
              { display: clientCount, label: "Happy Clients", ref: clientsRef },
              { display: serviceCount, label: "Services", ref: servicesRef },
              { display: ratingDisplay, label: "Google Rating", ref: ratingRef },
              { display: yearCount, label: "Years Experience", ref: yearsRef },
            ].map((stat) => (
              <div key={stat.label} className="reveal" ref={stat.ref} style={{ position: "relative" }}>
                <div
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-secondary)",
                    marginBottom: "8px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {stat.display}
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

      {/* ===== ABOUT SECTION ===== */}
      <section className="section" style={{ background: "var(--color-primary-light)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <p
              style={{
                color: "var(--color-secondary)",
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              About Us
            </p>
            <h2 className="section-title">Welcome to Zoe</h2>
            <div className="section-divider" />
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginTop: "20px",
              }}
            >
              Located in the vibrant Summit Pepsi area, Zoe Hair Salon and Makeup
              Studio is your ultimate destination for all things beauty.
              Specializing in women and kids' hair styling, including intricate
              hair braiding, we offer a wide range of services to cater to your
              beauty needs. Our team of skilled professionals is dedicated to
              helping you look and feel your best.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS CAROUSEL ===== */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="section-divider" />
          </div>

          <div className="reveal" style={{ maxWidth: "650px", margin: "48px auto 0", position: "relative" }}>
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                padding: "40px 36px",
                position: "relative",
                minHeight: "220px",
                transition: "all 0.4s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "5rem",
                  color: "rgba(232, 180, 184, 0.12)",
                  position: "absolute",
                  top: "4px",
                  left: "24px",
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>

              <div key={activeTestimonial} style={{ position: "relative", zIndex: 1, animation: "fadeInUp 0.5s ease" }}>
                <p
                  style={{
                    color: "var(--color-text)",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    marginBottom: "24px",
                    fontStyle: "italic",
                  }}
                >
                  {testimonials[activeTestimonial].text}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ color: "var(--color-secondary)" }}>
                    {testimonials[activeTestimonial].name}
                  </strong>
                  <div style={{ color: "var(--color-secondary)", letterSpacing: "2px" }}>
                    {"★".repeat(testimonials[activeTestimonial].rating)}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "24px" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: i === activeTestimonial ? "var(--color-secondary)" : "var(--color-border)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform: i === activeTestimonial ? "scale(1.3)" : "scale(1)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section" style={{ background: "var(--color-primary-light)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal">
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontFamily: "var(--font-heading)",
                marginBottom: "16px",
              }}
            >
              Ready for a New Look?
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
              Book your appointment today and experience the best in hair and
              makeup artistry at Zoe Hair Salon and Makeup Studio.
            </p>
            <Link to="/booking">
              <button
                className="btn btn-primary"
                style={{ fontSize: "1rem", padding: "16px 40px" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
              >
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
