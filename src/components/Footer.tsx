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
              Premium men's grooming in Addis Ababa. Where style meets
              craftsmanship.
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
                  Sarbet Noc Bldg, 1st Floor
                  <br />
                  Next to The Food Boutique
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--color-secondary)", flexShrink: 0 }}>📞</span>
                <a href="tel:+251911032850" style={{ color: "var(--color-text-muted)" }}>
                  +251 911 03 28 50
                </a>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                <span style={{ color: "var(--color-secondary)", flexShrink: 0 }}>🕐</span>
                <span>Mon–Sat: 8:30 AM – 8:30 PM</span>
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
            &copy; {currentYear} Tamijoha Men's Studio. All rights reserved.
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
