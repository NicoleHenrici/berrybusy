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
    optionLabel: [],
  },
];


export default function SettingsGeneralPage() {
  return (
    <>
      <Card
        sections={settingsSections}
        pageName="General Settings"
      />
    </>
  );
}
