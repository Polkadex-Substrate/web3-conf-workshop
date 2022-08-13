import * as React from "react";

function SvgLike(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 19 17"
      {...props}>
      <path
        opacity="0.4"
        d="M3.648 17H2.28C1.67531 17 1.09538 16.7172 0.667796 16.2138C0.240214 15.7105 0 15.0277 0 14.3159L0 8.94757C0 8.23569 0.240214 7.55297 0.667796 7.04959C1.09538 6.54622 1.67531 6.26343 2.28 6.26343H3.648C3.88988 6.26343 4.12185 6.37654 4.29288 6.57789C4.46391 6.77924 4.56 7.05233 4.56 7.33708V15.9263C4.56 16.2111 4.46391 16.4842 4.29288 16.6855C4.12185 16.8869 3.88988 17 3.648 17ZM2.28 8.41074C2.15906 8.41074 2.04308 8.4673 1.95756 8.56797C1.87204 8.66865 1.824 8.80519 1.824 8.94757V14.3159C1.824 14.4582 1.87204 14.5948 1.95756 14.6954C2.04308 14.7961 2.15906 14.8527 2.28 14.8527H2.736V8.41074H2.28Z"
      />
      <path d="M15.0936 16.9998H7.92527C7.68554 17.0031 7.44761 16.9507 7.22509 16.8457C7.00257 16.7407 6.79982 16.585 6.62844 16.3877C6.45705 16.1903 6.3204 15.9551 6.22629 15.6955C6.13218 15.4359 6.08247 15.1571 6.07999 14.8748V7.87371C6.08239 7.39629 6.16517 6.92416 6.32353 6.48463C6.4819 6.0451 6.71271 5.64689 7.00263 5.31304C7.29491 4.98018 7.52724 4.58142 7.68576 4.14055C7.84427 3.69968 7.92573 3.22574 7.92527 2.747V1.06226C7.92656 0.921184 7.95145 0.781793 7.99853 0.652053C8.0456 0.522313 8.11394 0.404767 8.19962 0.306136C8.28531 0.207504 8.38667 0.129721 8.49791 0.0772319C8.60914 0.0247429 8.72808 -0.00142237 8.84791 0.00023175C8.89874 -0.000987105 8.94957 0.0026033 8.99991 0.0109683L11.1872 0.435957C11.8173 0.547316 12.3929 0.920112 12.8102 1.4871C13.2274 2.05409 13.4588 2.77794 13.4626 3.52809V4.25012C13.465 4.53242 13.5147 4.81139 13.6087 5.07108C13.7028 5.33077 13.8394 5.56607 14.0108 5.76352C14.1822 5.96097 14.385 6.1167 14.6076 6.22179C14.8301 6.32688 15.0681 6.37927 15.3079 6.37596H16.2305C16.9611 6.37445 17.6628 6.71162 18.1837 7.31452C18.4409 7.60558 18.6456 7.95454 18.7858 8.34065C18.9261 8.72676 18.9989 9.14212 19 9.56204C18.9985 9.86833 18.958 10.1726 18.8799 10.4648L17.746 14.7281C17.5705 15.3924 17.2175 15.9723 16.7397 16.3816C16.2618 16.7909 15.6845 17.0077 15.0936 16.9998ZM9.95143 2.35333C9.9041 2.35308 9.85856 2.37459 9.82451 2.41327C9.80745 2.43227 9.79387 2.45515 9.7846 2.48054C9.77532 2.50592 9.77054 2.53327 9.77055 2.5609C9.77017 4.14876 9.24557 5.67428 8.30755 6.81527C8.18706 6.95334 8.09134 7.11849 8.02607 7.30091C7.96079 7.48334 7.92729 7.67934 7.92755 7.87729V14.4499C7.92875 14.5639 7.96829 14.6728 8.03752 14.7526C8.10674 14.8324 8.20001 14.8767 8.29691 14.8757H15.0936C15.2902 14.8763 15.4818 14.8032 15.6408 14.6672C15.7998 14.5311 15.918 14.3391 15.9782 14.1188L17.1076 9.83582C17.1351 9.73966 17.1504 9.63928 17.1532 9.53788C17.1453 9.25735 17.0443 8.99164 16.872 8.79765C16.6997 8.60365 16.4697 8.49682 16.2313 8.50001H15.3079C14.3401 8.51099 13.408 8.06966 12.7162 7.2728C12.0243 6.47594 11.6292 5.3886 11.6173 4.24923V3.52809C11.6164 3.28592 11.542 3.05212 11.4075 2.86886C11.273 2.68561 11.0873 2.56496 10.8839 2.52869L9.98107 2.35601C9.97126 2.35419 9.96135 2.35329 9.95143 2.35333Z" />
    </svg>
  );
}

export default SvgLike;