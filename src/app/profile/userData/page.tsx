import Card from "@/component/card";

const settingsSections = [
  {
    type: "text",
    sectionLabel: "Name",
    options: [],
    expandable: false,
  },
  {
    type: "text-group",
    sectionLabel: "Address Information",
    options: [
      { label: "phone", placeholder: "Enter your phone number", value: "" },
      { label: "street", placeholder: "Enter your street address", value: "" },
      { label: "city", placeholder: "Enter your city", value: "" },
      { label: "zip", placeholder: "Enter your zip code", value: "" },
    ],
    expandable: false,
  },
];

export default function UserDataPage() {
  return (
    <>
      <form className="border border-foreground/25 rounded-md m-auto mt-0 w-fit flex flex-col items-end">
        <Card
          sections={settingsSections}
          pageName="User Data Settings"
        />
        <button type="submit" className="btn m-2 bg-brand-primary p-2 text-white rounded-md">Save Changes</button>
      </form>
    </>
  );
}