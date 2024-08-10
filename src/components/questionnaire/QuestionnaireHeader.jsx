import QuestionnaireProgress from "./QuestionnaireProgress.jsx";
import BackButton from "./BackButton.jsx";

export default function QuestionnaireHeader() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <BackButton/>
        <QuestionnaireProgress/>
        <div/>
      </div>
      <h4 className="text-2xl font-semibold leading-[125%]">Specify the business location</h4>
    </div>
  )
}
