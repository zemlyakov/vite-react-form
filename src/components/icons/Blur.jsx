import PropTypes from "prop-types";

export default function Blur({className}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 335" fill="none"
         className={className}>
      <g opacity="0.9" filter="url(#filter0_f_16_486)">
        <circle cx="70.5" cy="45.5" r="79.5" fill="#1CA9A6"/>
      </g>
      <defs>
        <filter id="filter0_f_16_486" x="-219" y="-244" width="579" height="579" filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="105" result="effect1_foregroundBlur_16_486"/>
        </filter>
      </defs>
    </svg>
  );
}

Blur.propTypes = {
  className: PropTypes.string,
};
