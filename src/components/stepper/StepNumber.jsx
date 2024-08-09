import PropTypes from "prop-types";

export default function StepNumber({ number }) {
  return (
    <div className="w-5 h-5 flex items-center justify-center text-xs font-semibold border border-current rounded-xl">
      {number}
    </div>
  )
}

StepNumber.propTypes = {
  number: PropTypes.number.isRequired
}
