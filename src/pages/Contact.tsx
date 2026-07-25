import { useState } from "react";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  useReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to Convex or an email service
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            left: "20%",
            top: "-30%",
            width: "400px",
            height: "400px",
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
            Get in Touch
          </p>
          <h1 className="section-title reveal">Contact Us</h1>
          <div className="section-divider" />
          <p className="section-subtitle reveal">
            Have a question or want to book a specific service? Reach out to us
            — we're here to help.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "48px",
              alignItems: "flex-start",
            }}
          >
            {/* Left: Info */}
            <div className="reveal">
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.6rem",
                  marginBottom: "24px",
                }}
              >
                Visit Our Studio
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Address */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px",
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-secondary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; }}
                >
                  <div style={{ fontSize: "1.5rem" }}>📍</div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        marginBottom: "6px",
                        color: "var(--color-secondary)",
                      }}
                    >
                      Address
                    </h3>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      Sarbet Noc Building, 1st Floor
                      <br />
                      Next to The Food Boutique
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px",
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-secondary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; }}
                >
                  <div style={{ fontSize: "1.5rem" }}>📞</div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        marginBottom: "6px",
                        color: "var(--color-secondary)",
                      }}
                    >
                      Phone
                    </h3>
                    <a
                      href="tel:+251911032850"
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-secondary)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
                    >
                      +251 911 03 28 50
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px",
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-secondary)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-border)"; }}
                >
                  <div style={{ fontSize: "1.5rem" }}>🕐</div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        marginBottom: "6px",
                        color: "var(--color-secondary)",
                      }}
                    >
                      Business Hours
                    </h3>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      <p>Monday – Saturday: 8:30 AM – 8:30 PM</p>
                      <p>Sunday: 8:30 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Google Map embed */}
                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                    height: "250px",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.573973612327!2d38.7577605!3d8.9806052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b6b7b7b7b7%3A0x7b7b7b7b7b7b7b7b!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tamijoha Men's Studio Location"
                  />
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="reveal">
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.6rem",
                  marginBottom: "24px",
                }}
              >
                Send Us a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "var(--color-text-muted)",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--color-primary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      color: "var(--color-text)",
                      fontSize: "0.95rem",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "var(--color-text-muted)",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--color-primary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      color: "var(--color-text)",
                      fontSize: "0.95rem",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label
                    htmlFor="phone"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "var(--color-text-muted)",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--color-primary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      color: "var(--color-text)",
                      fontSize: "0.95rem",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "var(--color-text-muted)",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--color-primary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      color: "var(--color-text)",
                      fontSize: "0.95rem",
                      resize: "vertical",
                      minHeight: "120px",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--color-secondary)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  style={{ fontSize: "0.95rem" }}
                >
                  {submitted ? "✓ Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
