import React from "react";

export type CardVariant =
  | "glass"
  | "glass-dark"
  | "glass-dark-strong"
  | "solid"
  | "gradient";

interface CardProps {
  variant?: CardVariant;
  hover?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = "glass",
  hover = true,
  children,
  className = "",
}) => {
  const baseStyles = "rounded-2xl p-6 transition-all duration-300";

  const variants = {
    glass: "glass",
    "glass-dark": "glass-dark",
    "glass-dark-strong": "glass-dark-strong",
    solid: "bg-white shadow-lg",
    gradient:
      "bg-gradient-to-br from-primary/10 to-primary-light/10 border border-primary/20",
  };

  const hoverStyles = hover ? "hover-lift cursor-pointer" : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
