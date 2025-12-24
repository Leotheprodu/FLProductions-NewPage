import type React from "react";

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  isOpen?: boolean;
}

export const MenuIcon = ({ isOpen, ...props }: MenuIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ overflow: "visible" }}
    {...props}
  >
    {/* Top line */}
    <line
      x1="3"
      y1="6"
      x2="21"
      y2="6"
      style={{
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isOpen ? "translateY(6px) rotate(45deg)" : "none",
        transformOrigin: "center",
      }}
    />
    {/* Middle line */}
    <line
      x1="3"
      y1="12"
      x2="21"
      y2="12"
      style={{
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: isOpen ? 0 : 1,
        transform: isOpen ? "scaleX(0)" : "none",
        transformOrigin: "center",
      }}
    />
    {/* Bottom line */}
    <line
      x1="3"
      y1="18"
      x2="21"
      y2="18"
      style={{
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isOpen ? "translateY(-6px) rotate(-45deg)" : "none",
        transformOrigin: "center",
      }}
    />
  </svg>
);
