import PropTypes from "prop-types";

export default function ExternalLink({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none" className={className}>
      <path
        d="M7.5 5.5V8C7.5 8.55228 7.05228 9 6.5 9H2C1.44772 9 1 8.55228 1 8V3.5C1 2.94772 1.44772 2.5 2 2.5H4.5M9 3.5V1L6.5 1M4 6L8.75 1.25"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

ExternalLink.propTypes = {
  className: PropTypes.string,
};
