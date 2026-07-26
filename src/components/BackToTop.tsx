import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 999,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "var(--color-secondary)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.3rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 4px 16px rgba(232, 180, 184, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 6px 24px rgba(232, 180, 184, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = visible ? "translateY(0)" : "translateY(20px)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(232, 180, 184, 0.3)";
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
