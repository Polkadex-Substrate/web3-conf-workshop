import * as React from "react";

function SvgWebsite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 25 24"
      {...props}>
      <rect x="4.08398" y="12" width="16" height="2" fill="white" fillOpacity="0.5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.084 19V18H5.08398C3.42713 18 2.08398 16.6569 2.08398 15V6C2.08398 4.34315 3.42713 3 5.08398 3H19.084C20.7408 3 22.084 4.34315 22.084 6V15C22.084 16.6569 20.7408 18 19.084 18H14.084V19H18.084C18.6363 19 19.084 19.4477 19.084 20C19.084 20.5523 18.6363 21 18.084 21H6.08398C5.5317 21 5.08398 20.5523 5.08398 20C5.08398 19.4477 5.5317 19 6.08398 19H10.084ZM20.084 6V15C20.084 15.5523 19.6363 16 19.084 16H5.08398C4.5317 16 4.08398 15.5523 4.08398 15V6C4.08398 5.44772 4.5317 5 5.08398 5H19.084C19.6363 5 20.084 5.44772 20.084 6Z"
      />
    </svg>
  );
}

export default SvgWebsite;
