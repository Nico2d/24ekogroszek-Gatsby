import React from "react";

export const Polygon = ({ color1, color2 }) => {
  return (
    <svg
      width="276"
      height="317"
      viewBox="0 0 276 317"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.49273 129.14C-0.947449 118.036 1.99888 106.43 9.44019 97.8329L83.1273 12.7016C97.6967 -4.13067 123.886 -3.84219 138.069 13.3068L267.041 169.249C281.63 186.889 276.265 213.497 255.98 224.112L88.1787 311.921C67.1588 322.921 41.4429 310.933 36.3506 287.76L1.49273 129.14Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="58.342"
          y1="2.8606"
          x2="175.486"
          y2="279.021"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color2} />
          <stop offset="1" stopColor={color1} />
        </linearGradient>
      </defs>
    </svg>
  );
};
