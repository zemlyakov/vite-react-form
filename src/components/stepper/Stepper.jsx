import PropTypes from "prop-types";
import StepDivider from "./StepDivider.jsx";
import Step from "./Step.jsx";

export default function Stepper({ steps, currentStep }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 rtl:space-x-reverse">
        {steps.map((step, i) => (
          <li className={`flex items-center space-x-2 ${i <= currentStep ? "text-[#18908D]" : "text-[#ADA8A8]"}`} key={i}>
            <Step name={step} index={i} done={i < currentStep} final={i === steps.length - 1}/>
            {i < steps.length - 1 && <StepDivider />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
}
