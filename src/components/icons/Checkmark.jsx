import PropTypes from "prop-types";

export default function Checkmark({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className={className}>
      <path fillRule="evenodd" clipRule="evenodd"
            d="M9.00066 0.666588C4.39829 0.666588 0.667328 4.39755 0.667328 8.99992C0.667328 13.6023 4.39829 17.3333 9.00066 17.3333C13.603 17.3333 17.334 13.6023 17.334 8.99992C17.334 4.39755 13.603 0.666588 9.00066 0.666588ZM13.1253 7.16267C13.4508 6.83723 13.4508 6.3096 13.1253 5.98416C12.7999 5.65872 12.2722 5.65872 11.9468 5.98416L7.82202 10.1089L6.05426 8.34118C5.72882 8.01574 5.20118 8.01574 4.87574 8.34118C4.55031 8.66662 4.55031 9.19426 4.87574 9.51969L7.23277 11.8767C7.5582 12.2022 8.08584 12.2022 8.41128 11.8767L13.1253 7.16267Z"
            fill="currentColor"/>
    </svg>
  );
}

Checkmark.propTypes = {
  className: PropTypes.string,
};
