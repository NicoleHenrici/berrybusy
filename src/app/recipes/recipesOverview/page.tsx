import getRecipes from "@/lib/recipes";

type Recipe = {
    slug: string | number;
    name: string;
    duration: number;
    ingredients: string;
    instructions: string;
    image: string;
};

export default async function RecipesOverview() {
    const recipes = await getRecipes() as Recipe[];

    console.log(recipes)
    return (
        <>
            <h1>Overview</h1>
            <p>This is the recipesoverview page.</p>
            {recipes.map((recipe) => (
              <div key={recipe.slug}>
                <h2>{recipe.name}</h2>
                <p>{recipe.ingredients}</p>
              </div>
            ))}
        </>
    );
}