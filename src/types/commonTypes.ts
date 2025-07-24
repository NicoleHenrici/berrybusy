export type Option = {
    label: string;
    placeholder: string;
    value: string;
};

export type Section = {
    type: string;
    sectionLabel: string;
    options: Option[];
    expandable: boolean;
};