import PropTypes from "prop-types";

export default function ArrowLeft({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10" fill="none" className={className}>
      <path d="M2.33333 5H12.3333M5.66674 8.77123L1.89551 5L5.66674 1.22876" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

ArrowLeft.propTypes = {
  className: PropTypes.string,
};
