import * as React from "react";

function SvgFractal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 22"
      width="1em"
      height="1em"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7321 0.827637C19.9631 0.827637 20.1502 1.01505 20.1502 1.24594C20.1502 1.477 19.9631 1.66408 19.7321 1.66408H10.4398C9.3865 1.66408 8.44546 2.32293 8.08414 3.31264C7.30852 5.43764 6.69582 7.11618 6.24621 8.34794C6.54206 8.18568 6.86357 8.06774 7.20107 8.0011L8.60721 4.14891C8.96854 3.15937 9.90974 2.50052 10.9629 2.50052H19.1345C19.3653 2.50052 19.5525 2.68793 19.5525 2.91882C19.5525 3.14988 19.3653 3.33696 19.1345 3.33696H10.9629C10.2609 3.33696 9.63338 3.77625 9.3925 4.43611L8.11446 7.93746H8.93155L9.90574 5.26905C10.148 4.60486 10.7793 4.1629 11.4861 4.1629H18.5074C18.7439 4.1629 18.9358 4.35515 18.9358 4.5917C18.9358 4.82842 18.7439 5.02033 18.5074 5.02033H11.4861C11.1393 5.02033 10.8295 5.23707 10.7105 5.56308L9.84377 7.93746H17.1489C17.3799 7.93746 17.567 8.12488 17.567 8.3556C17.567 8.58666 17.3799 8.7739 17.1489 8.7739H7.85075C6.79644 8.7739 5.85456 9.43376 5.49424 10.4251L1.63847 21.0243C1.55967 21.2415 1.31979 21.3535 1.10273 21.2744C0.886002 21.1954 0.773891 20.9555 0.853018 20.7385L4.44142 10.8733C4.47691 10.7633 4.51789 10.6444 4.56453 10.5163C5.1724 8.8517 6.08345 6.35504 7.29886 3.02577C7.78079 1.70589 9.0355 0.827637 10.4398 0.827637H19.7321ZM15.9075 11.2728C16.1442 11.2728 16.3361 11.4647 16.3361 11.7016C16.3361 11.9383 16.1442 12.13 15.9075 12.13H8.89507C8.54808 12.13 8.23823 12.3473 8.11929 12.6734L5.07595 21.0282C4.99499 21.2507 4.74894 21.3654 4.52672 21.2841C4.30433 21.2031 4.18988 20.9572 4.27084 20.7347L7.31418 12.3797C7.5564 11.7151 8.18775 11.2728 8.89507 11.2728H15.9075ZM16.5429 9.61038C16.7736 9.61038 16.961 9.79779 16.961 10.0287C16.961 10.2594 16.7736 10.4468 16.5429 10.4468H8.37275C7.67009 10.4468 7.04207 10.8866 6.80168 11.5471L3.35238 21.0247C3.27325 21.2416 3.03337 21.3535 2.81664 21.2744C2.59958 21.1953 2.4878 20.9552 2.56693 20.7383L6.01624 11.2611C6.37706 10.2699 7.31876 9.61038 8.37275 9.61038H16.5429Z"
      />
    </svg>
  );
}

export default SvgFractal;