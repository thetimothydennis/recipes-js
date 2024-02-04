import { useState, useEffect } from "react";

function RecipeView(props) {
    const { recipe, recipeid, getRecipe } = props;

    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [recipeTime, setRecipeTime] = useState("");
    const [recipeIngredients, setRecipeIngredients] = useState("");
    const [recipeSteps, setRecipeSteps] = useState("");

    useEffect(() => {
        getRecipe(recipeid)
    },[])

    console.log(recipe)

    useEffect(() => {
        if (recipe !== undefined) {
            setRecipeName(recipe.name);
            setRecipeDescription(recipe.description);
            setRecipeTime(recipe.time);
            setRecipeIngredients(recipe.ingredients);
            setRecipeSteps(recipe.steps);
        }
    }, [recipe])

    return (
        <div id="recipe-container">
            <h1>{recipeName}</h1>
            <a href="/"><button>Return to Index</button></a>
            <h3>{recipeDescription}</h3>
            <h6>{recipeTime}</h6>
            <p>{recipeIngredients}</p>
            <p>{recipeSteps}</p>
        </div>
    )
}

export default RecipeView;