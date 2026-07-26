import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
  { label: "Book Now", path: "/booking", highlight: true },
];

export default function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: "var(--navbar-height)",
        display: "flex",
        alignItems: "center",
        background: isScrolled
          ? "var(--color-nav-bg)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px) saturate(1.2)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(232, 180, 184, 0.15)" : "none",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo link size="sm" />

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            listStyle: "none",
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              {link.highlight ? (
                <Link to={link.path}>
                  <button className="btn btn-primary btn-sm">
                    {link.label}
                  </button>
                </Link>
              ) : (
                <Link
                  to={link.path}
                  style={{
                    color:
                      location.pathname === link.path
                        ? "var(--color-secondary)"
                        : "var(--color-text)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    position: "relative",
                    paddingBottom: "4px",
                    transition: "color 0.2s ease",
                    opacity: location.pathname === link.path ? 1 : 0.8,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-secondary)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      location.pathname === link.path
                        ? "var(--color-secondary)"
                        : "var(--color-text)";
                    e.currentTarget.style.opacity =
                      location.pathname === link.path ? "1" : "0.8";
                  }}
                >
                  {link.label}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width:
                        location.pathname === link.path ? "100%" : "0%",
                      height: "2px",
                      background: "var(--color-secondary)",
                      transition: "width 0.3s ease",
                      borderRadius: "1px",
                    }}
                  />
                </Link>
              )}
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              title={`Switch to ${isDark ? "light" : "dark"} mode`}
              style={{
                background: "none",
                border: "1px solid var(--color-border)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-secondary)";
                e.currentTarget.style.color = "var(--color-secondary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.color = "var(--color-text-muted)";
              }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger + theme toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="hamburger">
          <button
            onClick={toggleTheme}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            style={{
              background: "none",
              border: "1px solid var(--color-border)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--color-text-muted)",
              fontSize: "1rem",
            }}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--color-text)",
            }}
            aria-label="Toggle menu"
          >
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "var(--color-text)",
                marginBottom: "6px",
                transition: "all 0.3s ease",
                transform: isMobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "var(--color-text)",
                marginBottom: "6px",
                transition: "all 0.3s ease",
                opacity: isMobileOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: "24px",
                height: "2px",
                background: "var(--color-text)",
                transition: "all 0.3s ease",
                transform: isMobileOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: "var(--navbar-height)",
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--color-overlay)",
          backdropFilter: "blur(20px)",
          display: isMobileOpen ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          zIndex: 999,
        }}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              color:
                location.pathname === link.path
                  ? "var(--color-secondary)"
                  : "var(--color-text)",
              fontSize: "1.4rem",
              fontWeight: link.highlight ? 700 : 500,
              fontFamily: link.highlight ? "var(--font-heading)" : "var(--font-body)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              animation: `fadeInUp 0.5s ease ${i * 0.08}s forwards`,
              opacity: 0,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
