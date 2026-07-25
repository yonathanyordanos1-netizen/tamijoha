import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  link?: boolean;
}

export default function Logo({ showText = true, size = "md", link = false }: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const dimensions = {
    sm: { width: 36, height: 36, fontSize: "1.2rem" },
    md: { width: 44, height: 44, fontSize: "1.5rem" },
    lg: { width: 56, height: 56, fontSize: "1.8rem" },
  };

  const { width, height, fontSize } = dimensions[size];
  const bronze = "#cd7f32";
  const shieldFill = isDark ? "#1e293b" : "#f1f5f9";
  const textColor = isDark ? "#f1f5f9" : "#0f172a";

  const logoContent = (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Modern diamond / gem logo mark */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diamond shape */}
        <path
          d="M28 4L48 18L40 46L28 52L16 46L8 18L28 4Z"
          fill={shieldFill}
          stroke={bronze}
          strokeWidth="1.5"
        />
        {/* Inner diamond */}
        <path
          d="M28 12L40 22L34 42L28 46L22 42L16 22L28 12Z"
          fill="none"
          stroke={bronze}
          strokeWidth="1"
          opacity="0.4"
        />
        {/* Stylized 'T' monogram */}
        <text
          x="28"
          y="33"
          textAnchor="middle"
          fill={bronze}
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="20"
          fontWeight="700"
        >
          T
        </text>
        {/* Bronze accent dots */}
        <circle cx="28" cy="8" r="1.5" fill={bronze} />
        <circle cx="28" cy="48" r="1.5" fill={bronze} />
      </svg>

      {showText && (
        <div>
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize,
              fontWeight: 700,
              color: textColor,
              lineHeight: 1,
              letterSpacing: "1.5px",
            }}
          >
            TAMIJOHA
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: size === "sm" ? "0.55rem" : "0.6rem",
              color: bronze,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginTop: "3px",
              fontWeight: 500,
            }}
          >
            Men's Studio
          </div>
        </div>
      )}
    </div>
  );

  if (link) {
    return <Link to="/" style={{ textDecoration: "none" }}>{logoContent}</Link>;
  }

  return logoContent;
}
