import Stepper from "../stepper/Stepper.jsx";
import LanguageSelector from "./LanguageSelector.jsx";

export default function Header() {
  return (
    <header className="w-screen h-24 pl-[290px] pr-10 flex justify-between items-center border-b border-b-[#E5E0DF]">
      <Stepper steps={["Basics", "Activities", "Premise", "Results"]} currentStep={2} />
      <LanguageSelector />
    </header>
  )
}
