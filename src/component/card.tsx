import { Section } from "@/types/commonTypes";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";

type CardProps = {
  sections: Section[];
  pageName: string;
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
          {sections.map((section, index) => (
            <div
              className={`form-control  not-[&:last-child]:border-b border-foreground/25`}
              key={index}
            >
              {section.sectionLabel !== "" && (
                <div className="card-section p-2 bg-brand-accent/50">
                  <h3 className="text-lg mb-1">{section.sectionLabel}:</h3>
                </div>
              )}
              {section.type === "checkbox" ? (
                section.options.map((option, optionIndex) => (
                  <div
                    key={index + "-" + optionIndex}
                    className="form-control p-2  bg-background"
                  >
                    <label className="label cursor-pointer flex justify-start items-center">
                      <span className="label-text w-95 text-s">
                        {option.label}
                      </span>
                      <input
                        type="checkbox"
                        className="checkbox rounded-md ml-4 w-25"
                        id={
                          section.sectionLabel
                            .toLowerCase()
                            .replace(/\s+/g, "-") +
                          "-input-" +
                          optionIndex +
                          "-" +
                          section.type
                        }
                      />
                    </label>
                  </div>
                ))
              ) : section.type == "number" || section.type == "text" ? (
                <div className="form-control p-2" key={index}>
                  <input
                    type={`${section.type}`}
                    className="input border border-brand-accent bg-brand-accent/50 p-1 mb-2"
                    id={
                      section.sectionLabel.toLowerCase().replace(/\s+/g, "-") +
                      "-input-" +
                      index +
                      "-" +
                      section.type
                    }
                    placeholder={section.sectionLabel.toLowerCase()}
                  />
                </div>
              ) : section.type == "text-group" ? (
                <div
                  className="form-control p-2 grid grid-cols-12 gap-2 place-items-start"
                  key={index}
                >
                  {section.options.map((field, fieldIndex) => (
                    <>
                      <label
                        key={index + "-" + fieldIndex}
                        className="mb-2 col-span-11 grid grid-cols-subgrid gap-0 place-items-stretch"
                      >
                        {section.expandable && (
                          <span className="place-self-center">
                            {fieldIndex + 1}:{" "}
                          </span>
                        )}
                        <input
                          type="text"
                          className="input border border-brand-accent bg-brand-accent/50 p-1 col-span-10 col-start-2"
                          id={
                            section.sectionLabel
                              .toLowerCase()
                              .replace(/\s+/g, "-") +
                            "-input-" +
                            fieldIndex +
                            "-" +
                            section.type
                          }
                          placeholder={field.placeholder}
                        />
                      </label>
                      {section.expandable && (
                        <button
                          type="button"
                          className={`btn mb-2 border ${section.options.length <= 1
                              ? "border-color-brand-primary/25 text-brand-primary/25"
                              : "border-color-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                            } p-2 rounded-md place-self-center`}
                          disabled={section.options.length <= 1}
                          onClick={(e) =>
                            onDeleteListElement &&
                            onDeleteListElement(e, section, fieldIndex)
                          }
                        >
                          <FiMinus />
                        </button>
                      )}

                    </>
                  ))}
                  {section.expandable && (
                    <button
                      type="button"
                      className="btn bg-brand-primary p-2 text-white rounded-md col-start-12 place-self-end"
                      onClick={(e) =>
                        extendListHandler && extendListHandler(e, section)
                      }
                    >
                      <FiPlus />
                    </button>
                  )}
                </div>
              ) : section.type == "textarea-group" ? (
                <div
                  className="form-control p-2 grid grid-cols-12 gap-2 place-items-start"
                  key={index}
                >
                  {section.options.map((field, fieldIndex) => (
                    <>
                      <label
                        key={index + "-" + fieldIndex}
                        className="mb-2 col-span-11 grid grid-cols-subgrid gap-0 place-items-stretch"
                      >
                        {section.expandable && (
                          <span className="place-self-center">
                            {fieldIndex + 1}:{" "}
                          </span>
                        )}
                        <textarea
                          className="input border border-brand-accent bg-brand-accent/50 p-1 col-span-10 col-start-2"
                          id={
                            section.sectionLabel
                              .toLowerCase()
                              .replace(/\s+/g, "-") +
                            "-input-" +
                            fieldIndex +
                            "-" +
                            section.type
                          }
                          placeholder={field.placeholder}
                        />
                      </label>
                      <button
                        type="button"
                        className={`btn mb-2 border ${section.options.length <= 1
                            ? "border-color-brand-primary/25 text-brand-primary/25"
                            : "border-color-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                          } p-2 rounded-md place-self-center`}
                        disabled={section.options.length <= 1}
                        onClick={(e) =>
                          onDeleteListElement &&
                          onDeleteListElement(e, section, fieldIndex)
                        }
                      >
                        <FiMinus />
                      </button>
                    </>
                  ))}
                  {section.expandable && (
                    <button
                      type="button"
                      className="btn mb-2 bg-brand-primary p-2 text-white rounded-md col-start-12 place-self-end"
                      onClick={(e) =>
                        extendListHandler && extendListHandler(e, section)
                      }
                    >
                      <FiPlus />
                    </button>
                  )}
                </div>
              ) : section.type == "image" ? (
                section.options.map((field, fieldIndex) => (
                  <Image
                    src={field.value}
                    alt={field.label}
                    className="w-full h-auto"
                    width={500}
                    height={300}
                    key={index + "-" + fieldIndex}
                  />
                ))
              ) : section.type == "upload" ? (
                section.options.map((field, fieldIndex) => (
                  <div
                    className="form-control p-2 flex items-center"
                    key={index + "-" + fieldIndex}
                  >
                    <label className="label cursor-pointer flex justify-start items-center flex-wrap">
                      <span className="label-text w-full text-s">
                        {field.label}
                      </span>
                      <input
                        type="file"
                        className="file-input border border-brand-accent bg-brand-accent/50 p-1"
                      />
                    </label>
                  </div>
                ))
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
