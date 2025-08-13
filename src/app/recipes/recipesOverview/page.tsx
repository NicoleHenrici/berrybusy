import getRecipes from "@/lib/recipes";

export default async function RecipesOverview() {
    const recipes = await getRecipes();

    console.log(recipes)
    return (
        <>
            <h1>Overview</h1>
            <p>This is the recipesoverview page.</p>
        </>
    );
}