import { Section } from "@/types/commonTypes";
import FormElements from "./formElements";

type CardProps = {
  sections: Section[];
  pageName: string;
  mode: "edit" | "view";
  extendListHandler?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    section: Section
  ) => void;
  onDeleteListElement?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    section: Section,
    index: number
  ) => void;
};

export default function Card({
  sections,
  pageName,
  mode,
  extendListHandler,
  onDeleteListElement,
}: CardProps) {
  return (
    <>
      <div className="card w-fit">
        <div className="card-header p-2 bg-brand-accent">
          <h2 className="card-title font-bold text-xl">{pageName}</h2>
        </div>
        <div className="card-body">
          {sections.map((section, index) =>
            mode === "edit" ? (
              <FormElements
                key={index}
                section={section}
                extendListHandler={extendListHandler}
                onDeleteListElement={onDeleteListElement}
              />
            ) : (
              <p key={index}>view</p>
            )
          )}
        </div>
      </div>
    </>
  );
}
