import PropTypes from "prop-types";
import Checkmark from "../icons/Checkmark.jsx";
import StepNumber from "./StepNumber.jsx";
import Flag from "../icons/Flag.jsx";

export default function Step({index, name, done, final}) {
  return (
    <div className="inline-flex items-center space-x-1.5 text-sm font-medium">
      {done && <Checkmark className="w-[1.125rem] h-[1.125rem]"/>}
      {!done && !final && <StepNumber number={index + 1}/>}
      {final && <Flag className="w-[0.9375rem] h-[1.125rem]" />}
      <span>{name}</span>
    </div>
  )
}

Step.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  final: PropTypes.bool.isRequired
}
