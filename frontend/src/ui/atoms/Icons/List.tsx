import * as React from "react";

function SvgList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 18 14"
      fill="none"
      {...props}>
      <rect y="8" width="18" height="2" rx="1" fillOpacity="0.5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM0 5C0 4.44772 0.447715 4 1 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H1C0.447716 6 0 5.55228 0 5ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447716 14 1 14H17C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12H1Z"
      />
    </svg>
  );
}

export default SvgList;
