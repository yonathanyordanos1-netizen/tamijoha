import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-primary-light)",
        borderTop: "1px solid var(--color-border)",
        padding: "60px 0 30px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand */}
          <div>
            <Logo size="md" />
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                marginTop: "16px",
                lineHeight: 1.7,
                maxWidth: "300px",
              }}
            >
              Specialize in all women & kids hair style & makeup. Your one-stop
              destination for all things glamorous in Summit Pepsi, Addis Ababa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text)",
                fontSize: "1.1rem",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Book Appointment", path: "/booking" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s ease, padding-left 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-secondary)";
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-muted)";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text)",
                fontSize: "1.1rem",
                marginBottom: "16px",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "10px", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--color-secondary)", flexShrink: 0 }}>📍</span>
                <span>
                  Summit PEPSI Factory
                  <br />
                  Addis Ababa 1000
                  <br />
                  Ethiopia
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--color-secondary)", flexShrink: 0 }}>📞</span>
                <a href="tel:+251922873589" style={{ color: "var(--color-text-muted)" }}>
                  +251 922 87 35 89
                </a>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--color-secondary)", flexShrink: 0 }}>🕐</span>
                <span>Mon–Sun: 8:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.85rem",
            }}
          >
            &copy; {currentYear} Zoe Hair Salon and Makeup Studio. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <span
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.85rem",
                transition: "color 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-secondary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
            >
              Privacy Policy
            </span>
            <span
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.85rem",
                transition: "color 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-secondary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
            >
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
