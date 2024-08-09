import PropTypes from "prop-types";

export default function Flag({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 18" fill="none" className={className}>
      <path
        d="M1.16669 10.6666V16.4999M13.6667 1.49991L12.0579 6.32615C12.0205 6.43835 12.0241 6.56016 12.068 6.66996L13.6667 10.6666L10.7682 11.6327C9.43436 12.0774 7.97281 11.9169 6.76716 11.1935C5.35512 10.3463 3.60809 10.2792 2.13523 11.0156L1.16669 11.4999V3.41611C1.16669 2.75246 1.54164 2.14576 2.13523 1.84897V1.84897C3.60809 1.11254 5.35512 1.17963 6.76716 2.02686C7.97281 2.75025 9.43436 2.91069 10.7682 2.46607L13.6667 1.49991Z"
        stroke="#ADA8A8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

Flag.propTypes = {
  className: PropTypes.string.isRequired
}
