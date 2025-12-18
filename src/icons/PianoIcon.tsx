import type React from "react";

export const PianoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
    <line x1="6" x2="6" y1="3" y2="15" />
    <line x1="10" x2="10" y1="3" y2="15" />
    <line x1="14" x2="14" y1="3" y2="15" />
    <line x1="18" x2="18" y1="3" y2="15" />
    <line x1="2" x2="22" y1="15" y2="15" />
  </svg>
);
