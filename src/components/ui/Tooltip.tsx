import React, { useState } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom";
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`
            absolute z-[100] px-3 py-1.5 text-xs font-semibold text-white 
            glass-dark-strong border border-white/20 whitespace-nowrap 
            rounded-lg shadow-xl animate-scale-in pointer-events-none
            ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"}
          `}
        >
          {content}
          {/* Arrow */}
          <div
            className={`
              absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-dark-lighter border-white/20
              ${
                position === "top"
                  ? "bottom-[-5px] border-b border-r"
                  : "top-[-5px] border-t border-l"
              }
            `}
          />
        </div>
      )}
    </div>
  );
};
