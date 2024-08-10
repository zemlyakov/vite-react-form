import QuestionnaireHeader from "./QuestionnaireHeader.jsx";
import BusinessLocationForm from "./BusinessLocationForm.jsx";

export default function Premise() {
  return (
    <div className="max-w-3xl mx-auto px-10 py-8 space-y-8">
      <QuestionnaireHeader/>
      <BusinessLocationForm />
    </div>
  )
}
