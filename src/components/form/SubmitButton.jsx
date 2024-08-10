import PropTypes from "prop-types";

export default function SubmitButton({ label }) {
  return (
    <button type="button"
            className="w-full px-5 py-2.5 text-sm font-medium leading-[150%] text-white bg-[#1CA9A6] focus:ring-4 focus:ring-blue-300 rounded-lg">{label}</button>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};
