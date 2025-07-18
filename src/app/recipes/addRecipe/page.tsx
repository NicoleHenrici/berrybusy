import Card from "@/component/card";

const addRecipeSections = [
    {
        type: "upload",
        sectionLabel: "Upload Image",
        options: [
            { label: "Upload Image", placeholder: "Choose an image file", value: "" },
        ],
        expandable: false,
    },
    {
        type: "text",
        sectionLabel: "Recipe Name",
        options: [
            { label: "Name", placeholder: "Enter recipe name", value: "" },
        ],
        expandable: false,
    },
    {
        type: "number",
        sectionLabel: "Cooking Duration",
        options: [
            { label: "Duration", placeholder: "Enter cooking duration in minutes", value: "" },
        ],
        expandable: false,
    },
    {
        type: "text-group",
        sectionLabel: "Ingredients",
        options: [
            { label: "Ingredients", placeholder: "Enter ingredients separated by commas", value: "" },
        ],
        expandable: true,
    },
    {
        type: "textarea-group",
        sectionLabel: "Cooking Instructions",
        options: [
            { label: "Instructions", placeholder: "Enter cooking instructions", value: "" },
        ],
        expandable: true,
    },
];

export default function AddRecipePage() {

    return (
        <>
            <form className="border border-foreground/25 rounded-md m-auto mt-0 w-fit flex flex-col items-end">
                <Card
                    sections={addRecipeSections}
                    pageName="Add Recipe"
                />
                <button type="submit" className="btn m-2 bg-brand-primary p-2 text-white rounded-md">Save Recipe</button>
            </form>
        </>
    );
}