import Card from "@/component/card";

const settingsSections = [
  {
    type: "checkbox",
    sectionLabel: "Dark Mode",
    options: [
      { label: "Light", placeholder: "", value: "light" },
      { label: "Dark", placeholder: "", value: "dark" },
    ],
    expandable: false,
  },
  {
    type: "checkbox",
    sectionLabel: "Color Scheme",
    options: [
      { label: "strawberry", placeholder: "", value: "strawberry" },
      { label: "blueberry", placeholder: "", value: "blueberry" },
    ],
    expandable: false,
  },
  {
    type: "number",
    sectionLabel: "Font Size",
    options: [
      { label: "", placeholder: "font size", value: "" },
    ],
    expandable: false,
  },
];


export default function SettingsGeneralPage() {
  return (
    <>
      <form className="border border-foreground/25 rounded-md m-auto mt-0 w-fit flex flex-col items-end">
        <Card
          sections={settingsSections}
          pageName="General Settings"
        />
        <button type="submit" className="btn m-2 bg-brand-primary p-2 text-white rounded-md">Save Changes</button>
      </form>
    </>
  );
}
