import * as React from "react";

function SvgLess(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 4"
      fill="none"
      {...props}>
      <path d="M15.1891 3.13909V0.29126H0.000732422V3.13909H15.1891Z" />
    </svg>
  );
}

export default SvgLess;
