import PropTypes from "prop-types";

export default function Alert({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" className={className}>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M7.00001 0.333313C3.31811 0.333313 0.333344 3.31808 0.333344 6.99998C0.333344 10.6819 3.31811 13.6666 7.00001 13.6666C10.6819 13.6666 13.6667 10.6819 13.6667 6.99998C13.6667 3.31808 10.6819 0.333313 7.00001 0.333313ZM7.62501 3.66665C7.62501 3.32147 7.34519 3.04165 7.00001 3.04165C6.65483 3.04165 6.37501 3.32147 6.37501 3.66665V7.66665C6.37501 8.01182 6.65483 8.29165 7.00001 8.29165C7.34519 8.29165 7.62501 8.01182 7.62501 7.66665V3.66665ZM7.00001 9.04165C6.65483 9.04165 6.37501 9.32147 6.37501 9.66665C6.37501 10.0118 6.65483 10.2916 7.00001 10.2916H7.00131C7.34649 10.2916 7.62631 10.0118 7.62631 9.66665C7.62631 9.32147 7.34649 9.04165 7.00131 9.04165H7.00001Z"
            fill="currentColor"/>
    </svg>
  );
}

Alert.propTypes = {
  className: PropTypes.string.isRequired
}
