type Sections = {
    type: string;
    label: string;
    optionLabel: string[];
};

type CardProps = {
    sections: Sections[];
};

export default function Card({ sections, pageName }: CardProps & { pageName: string }) {
    return (
        <>
            <div className="card border border-foreground/25 rounded-md m-auto mt-0 w-fit">
                <div className="card-header p-2 bg-brand-accent">
                    <h2 className="card-title font-bold text-xl">{pageName}</h2>
                </div>
                <div className="card-body">
                    {sections.map((section, index) => (

                        <div className={`form-control  not-[&:last-child]:border-b border-foreground/25`} key={index}>
                            <div className="card-section p-2 bg-brand-accent/50">
                                <h3 className="text-lg mb-1">{section.label}:</h3>
                            </div>
                            {section.type === "checkbox" ? (
                                section.optionLabel.map((option, optionIndex) => (
                                    <div key={index + '.' + optionIndex} className="form-control p-2  bg-background">
                                        <label className="label cursor-pointer flex justify-start items-center">
                                            <span className="label-text w-95 text-s">{option}</span>
                                            <input type="checkbox" className="checkbox rounded-md ml-4 w-25" id={section.label.toLowerCase().replace(/\s+/g, '-') + '-input-' + optionIndex + '-' + section.type} />
                                        </label>
                                    </div>
                                ))
                            ) : section.type == "number" || section.type == "text" ? (
                                <div className="form-control p-2">
                                    <input
                                        type="number"
                                        className="input border border-brand-accent bg-brand-accent/50 w-full p-1"
                                        id={section.label.toLowerCase().replace(/\s+/g, '-') + '-input-' + index + '-' + section.type}
                                        placeholder={section.label.toLowerCase()}
                                    />

                                </div>
                            ) : section.type == "text-group" ? (
                                <div className="form-control p-2 ">
                                    {section.optionLabel.map((field, fieldIndex) => (
                                        <input
                                            key={fieldIndex}
                                            type="text"
                                            className="input border border-brand-accent bg-brand-accent/50 p-1 w-full mb-2"
                                            id={section.label.toLowerCase().replace(/\s+/g, '-') + '-input-' + fieldIndex + '-' + section.type}
                                            placeholder={field}
                                        />
                                    ))}
                                </div>
                            ) : null}
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}