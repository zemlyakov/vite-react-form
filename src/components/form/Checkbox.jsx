import PropTypes from "prop-types";

export default function Checkbox({id, label}) {
  return (
    <div className="flex items-center gap-2">
      <input id={id} type="checkbox" value=""
             className="w-4 h-4 text-[#18908D] bg-white border-[#CAC5C4] rounded focus:ring-blue-500 focus:ring-2"/>
      <label htmlFor={id} className="text-sm leading-[100%] text-[#272525]">{label}</label>
    </div>
  )
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}
