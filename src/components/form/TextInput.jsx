import PropTypes from "prop-types";
import InputLabel from "./InputLabel.jsx";

export default function TextInput({ id, label, placeholder, required = false }) {
  return (
    <div className="w-full">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <input type="text" id="first_name"
             className="block w-full px-4 py-3 bg-white border border-[#E5E0DF] text-sm text-[#272525] rounded-lg focus:ring-blue-500 focus:border-blue-500"
             placeholder={placeholder} {...required && { required: "" }}/>
      {!required && <small className="text-sm text-[#8F8B8B] leading-[125%]">Optional</small>}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
}
