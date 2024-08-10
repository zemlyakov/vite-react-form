import Select from "../form/Select.jsx";
import TextInput from "../form/TextInput.jsx";
import Checkbox from "../form/Checkbox.jsx";

export default function BusinessLocationForm() {
  return (
    <form className="space-y-4">
      <Select id="amana-select" label="Amana" options={[{ label: "Riyadh", value: "Riyadh"}]} />
      <Select id="municipality-select" label="Municipality" options={[{ label: "Great Municipality", value: "Great Municipality"}]} />
      <div className="w-full flex gap-4">
        <TextInput id="district" label="District" placeholder="2121 Alamal Dist." />
        <TextInput id="street" label="Street" placeholder="8228 King Abdulaziz Rd." />
      </div>
      <div className="py-2">
        <Checkbox id="is-shopping-mall-business" label="My business will be located in a shopping mall" />
      </div>
    </form>
  )
}
