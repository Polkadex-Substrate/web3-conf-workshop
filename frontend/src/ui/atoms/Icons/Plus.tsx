import * as React from "react";

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      {...props}>
      <rect
        x="8.66699"
        y="6.16667"
        width="5"
        height="1.66667"
        rx="0.833333"
        fillOpacity="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8335 12.8333C7.8335 13.2936 7.4604 13.6667 7.00016 13.6667C6.53993 13.6667 6.16683 13.2936 6.16683 12.8333V7.83334H1.16683C0.706592 7.83334 0.333496 7.46024 0.333496 7C0.333496 6.53976 0.706592 6.16667 1.16683 6.16667H6.16683V1.16667C6.16683 0.706432 6.53993 0.333336 7.00016 0.333336C7.4604 0.333336 7.8335 0.706432 7.8335 1.16667V12.8333Z"
      />
    </svg>
  );
}

export default SvgPlus;
