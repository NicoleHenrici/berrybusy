import Card from "@/component/card";
import { FiUpload } from "react-icons/fi";

const settingsSections = [
  {
    type: "image",
    sectionLabel: "",
    options: [
      // value will contain path of active avatar
      { label: "Choosen Avatar", placeholder: "Choose an image file", value: "" },
    ],
    expandable: false,
  },
  {
    type: "upload",
    sectionLabel: "Upload Avatar  ",
    options: [
      { label: "Upload Image", placeholder: "Choose an image file", value: "" },
    ],
    expandable: false,
  },
];

export default function AvatarPage() {
  return (
    <>
      <form className="border border-foreground/25 rounded-md m-auto mt-0 w-fit flex flex-col items-end">
        <Card
          sections={settingsSections}
          pageName="Avatar"
          mode="edit"
        />
        <button type="submit" className="btn m-2 bg-brand-primary p-2 text-white rounded-md">
          <span className="inline-block align-text-top"><FiUpload /></span> Upload
        </button>
      </form>
    </>
  );
}