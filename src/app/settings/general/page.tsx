import Card from "@/component/card";

const settingsSections = [
  {
    type: "checkbox",
    label: "Dark Mode",
    optionLabel: ["Enable Dark Mode"],
  },
  {
    type: "checkbox",
    label: "Color Scheme",
    optionLabel: ["strawberry", "blueberry"],
  },
  {
    type: "number",
    label: "Font Size",
    optionLabel: ["Small", "Medium", "Large"],
  },
];


export default function SettingsGeneralPage() {
  return (
    <>
      <h2 className="text-lg font-bold mb-2">General Settings</h2>
      <Card
        sections={settingsSections}
      />
    </>
  );
}
