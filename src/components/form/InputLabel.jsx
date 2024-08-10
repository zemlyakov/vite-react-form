import PropTypes from "prop-types";

export default function InputLabel({htmlFor, children}) {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium leading-[150%] text-[#272525]">
      {children}
    </label>
  );
};

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
