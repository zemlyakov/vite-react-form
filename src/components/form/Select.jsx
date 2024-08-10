import PropTypes from "prop-types";
import InputLabel from "./InputLabel.jsx";

export default function Select({ id, label, options }) {
  return (
    <div>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <select id={id}
              className="block w-full p-3 bg-white border border-[#E5E0DF] text-sm text-[#272525] rounded-lg focus:ring-blue-500 focus:border-blue-500">
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
}
