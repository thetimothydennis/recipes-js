import axios from "axios";
import { useEffect, useState } from "react";
import RecipeName from "./formComponents/RecipeName";
import RecipeDescription from "./formComponents/RecipeDescription";
import RecipeTime from "./formComponents/RecipeTime";
import RecipeIngredients from "./formComponents/RecipeIngredients";
import RecipeSteps from "./formComponents/RecipeSteps";
import SubmitButton from "./formComponents/SubmitButton";
import "../stylesheets/forms.css";

function EditRecipeForm ({recipeid}) {
    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [recipeTime, setRecipeTime] = useState("");
    const [recipeIngredients, setRecipeIngredients] = useState("");
    const [recipeSteps, setRecipeSteps] = useState("");

    const getRecipeData = async () => {
        const recipe = await axios.get(`/api/recipes/${recipeid}`)
        const recipeData = recipe.data;
        setRecipeName(recipeData.name);
        setRecipeDescription(recipeData.description);
        setRecipeTime(recipeData.time);
        setRecipeIngredients(recipeData.ingredients);
        setRecipeSteps(recipeData.steps);
        return recipe.data;
    }

    useEffect(() => {
        getRecipeData();
    }, [])

    return (
        <form id="add-recipe-form" className="recipe-form" method="POST" action={`/api/recipes/${recipeid}`}>
            <RecipeName {...{recipeName, setRecipeName}} />
            <RecipeDescription {...{recipeDescription, setRecipeDescription}} />
            <RecipeTime {...{recipeTime, setRecipeDescription}} />
            <RecipeIngredients {...{recipeIngredients, setRecipeIngredients}} />
            <RecipeSteps {...{recipeSteps, setRecipeSteps}} />
            <SubmitButton />
        </form>
    )
}

export default EditRecipeForm;