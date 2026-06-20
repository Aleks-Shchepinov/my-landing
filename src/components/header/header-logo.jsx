import React from "react";

export const HeaderLogo = () => {
  return (
    <div>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4"></stop>
            <stop offset="50%" stopColor="#3b82f6"></stop>
            <stop offset="100%" stopColor="#6366f1"></stop>
          </linearGradient>
        </defs>
        <polygon
          points="50,8 88,30 88,70 50,92 12,70 12,30"
          stroke="url(#logo-grad)"
          strokeWidth="6"
          fill="#030712"
          strokeLinejoin="round"
        ></polygon>
        <path
          d="M35,38 L23,50 L35,62 M65,38 L77,50 L65,62 M55,31 L45,69"
          stroke="url(#logo-grad)"
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};
