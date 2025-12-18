import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  light?: boolean;
  centered?: boolean;
  className?: string;
  subtitleMaxWidth?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  gradient = false,
  light = false,
  centered = true,
  className = "",
  subtitleMaxWidth = "max-w-4xl",
}) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 ${
          gradient ? "gradient-text" : light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl ${
            light ? "text-gray-300" : "text-gray-600"
          } mx-auto ${subtitleMaxWidth}`}
        >
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mt-6 rounded-full"></div>
    </div>
  );
};
