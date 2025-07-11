type Sections = {
    type: string;
    label: string;
    optionLabel: string[];
};

type CardProps = {
    sections: Sections[];
};

export default function Card({ sections }: CardProps) {
    return (
        <>
            {sections.map((section, index) => (
                <div className="card" key={index}>
                    <div className="card-header">
                        <h2 className="card-title">{section.label}</h2>
                    </div>
                    <div className="card-body">
                        {section.type === "checkbox" ? (
                            section.optionLabel.map((option, optionIndex) => (
                                <div key={optionIndex} className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">{option}</span>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </div>
                            ))
                        ) : section.type == "number" ? (
                            <input
                                type="number"
                                className="input input-bordered w-full"
                            />
                        ) : null}
                    </div>
                </div>
            ))}
        </>
    );
}