import Card from "@/component/card";

const settingsSections = [
  {
    type: "text",
    label: "Name",
    optionLabel: [],
  },
  {
    type: "text-group",
    label: "Address Information",
    optionLabel: ["phone", "street", "city", "zip"],
  },
];

export default function UserDataPage() {
  return (
   <>
         <Card
           sections={settingsSections}
           pageName="User Data Settings"
         />
       </>
  );
}