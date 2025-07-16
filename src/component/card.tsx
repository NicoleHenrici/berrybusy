
import Image from "next/image";

type Option = {
    label: string;
    placeholder: string;
    value: string;
};

type Section = {
    type: string;
    sectionLabel: string;
    options: Option[];
};

type CardProps = {
    sections: Section[];
};

export default function Card({ sections, pageName }: CardProps & { pageName: string }) {
    return (
        <>
            <div className="card w-fit">
                <div className="card-header p-2 bg-brand-accent">
                    <h2 className="card-title font-bold text-xl">{pageName}</h2>
                </div>
                <div className="card-body">
                    {sections.map((section, index) => (

                        <div className={`form-control  not-[&:last-child]:border-b border-foreground/25`} key={index}>
                            {section.sectionLabel !== "" &&
                                <div className="card-section p-2 bg-brand-accent/50">
                                    <h3 className="text-lg mb-1">{section.sectionLabel}:</h3>
                                </div>}
                            {section.type === "checkbox" ? (
                                section.options.map((option, optionIndex) => (
                                    <div key={index + '.' + optionIndex} className="form-control p-2  bg-background">
                                        <label className="label cursor-pointer flex justify-start items-center">
                                            <span className="label-text w-95 text-s">{option.label}</span>
                                            <input type="checkbox" className="checkbox rounded-md ml-4 w-25" id={section.sectionLabel.toLowerCase().replace(/\s+/g, '-') + '-input-' + optionIndex + '-' + section.type} />
                                        </label>
                                    </div>
                                ))
                            ) : section.type == "number" || section.type == "text" ? (
                                <div className="form-control p-2">
                                    <input
                                        type="number"
                                        className="input border border-brand-accent bg-brand-accent/50 w-full p-1"
                                        id={section.sectionLabel.toLowerCase().replace(/\s+/g, '-') + '-input-' + index + '-' + section.type}
                                        placeholder={section.sectionLabel.toLowerCase()}
                                    />

                                </div>
                            ) : section.type == "text-group" ? (
                                <div className="form-control p-2 ">
                                    {section.options.map((field, fieldIndex) => (
                                        <input
                                            key={fieldIndex}
                                            type="text"
                                            className="input border border-brand-accent bg-brand-accent/50 p-1 w-full mb-2"
                                            id={section.sectionLabel.toLowerCase().replace(/\s+/g, '-') + '-input-' + fieldIndex + '-' + section.type}
                                            placeholder={field.placeholder}
                                        />
                                    ))}
                                </div>
                            ) : section.type == "image" ? (
                                section.options.map((field, fieldIndex) => (
                                    <Image src={field.value} alt={field.label} className="w-full h-auto" width={500} height={300} key={fieldIndex} />
                                ))
                            ) : section.type == "upload" ? (
                                section.options.map((field, fieldIndex) => (
                                    <div className="form-control p-2 flex items-center" key={fieldIndex}>
                                        <label className="label cursor-pointer flex justify-start items-center flex-wrap">
                                            <span className="label-text w-full text-s">{field.label}</span>
                                            <input type="file" className="file-input border border-brand-accent bg-brand-accent/50 p-1" />
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