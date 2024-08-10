import Stepper from "../stepper/Stepper.jsx";
import LanguageSelector from "./LanguageSelector.jsx";

export default function Header() {
  return (
    <header className="w-full h-24 px-10 flex justify-between items-center border-b border-b-[#E5E0DF]">
      <Stepper steps={["Basics", "Activities", "Premise", "Results"]} currentStep={2} />
      <LanguageSelector />
    </header>
  )
}
