'use client';

import Card from "@/component/card";
import { Section } from "@/types/commonTypes";
import { useState } from "react";

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
            { label: "Ingredients", placeholder: "Enter ingredient", value: "" },
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

    const [newRecipe, addNewRecipe] = useState(addRecipeSections);

    function extendListHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, section: Section) {
        e.preventDefault();

        addNewRecipe(prevSections => {
            return prevSections.map((sec) => {
                if (sec.sectionLabel === section.sectionLabel) {
                    return {
                        ...sec,
                        options: [...sec.options, { label: sec.options[0].label, placeholder: sec.options[0].placeholder, value: sec.options[0].value }],
                    };
                }
                return sec;
            });
        });
    }

    function onDeleteListElement(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, section: Section, index: number) {
        e.preventDefault();

        addNewRecipe(prevSections => {
            return prevSections.map((sec) => {
                if (sec.sectionLabel === section.sectionLabel) {
                    const newOptions = sec.options.filter((_, i) => i !== index);
                    return { ...sec, options: newOptions };
                }
                return sec;
            });
        });
    }   

    return (
        <>
            <form className="border border-foreground/25 rounded-md m-auto mt-0 w-fit flex flex-col items-end">
                <Card
                    sections={newRecipe}
                    pageName="Add Recipe"
                    extendListHandler={extendListHandler}
                    onDeleteListElement={onDeleteListElement}
                    mode="edit"
                />
                <button type="submit" className="btn m-2 bg-brand-primary p-2 text-white rounded-md">Save Recipe</button>
            </form>
        </>
    );
}