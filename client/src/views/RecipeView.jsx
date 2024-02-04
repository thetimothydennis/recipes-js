import { useState, useEffect } from "react";
import axios from "axios";

function RecipeView(props) {
    const { recipe, recipeid, getRecipe } = props;

    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [recipeTime, setRecipeTime] = useState("");
    const [recipeIngredients, setRecipeIngredients] = useState("");
    const [recipeSteps, setRecipeSteps] = useState("");
    const [recipeIngredientsArray, setRecipeIngredientsArray] = useState([]);
    const [recipeStepsArray, setRecipeStepsArray] = useState([]);

    const handleDeleteClick = async (e) => {
        await axios.delete(`/api/recipes/${e.target.id}`);
        window.location = "/";
    }

    useEffect(() => {
        getRecipe(recipeid)
    },[])

    useEffect(() => {
        if (recipe !== undefined) {
            setRecipeName(recipe.name);
            setRecipeDescription(recipe.description);
            setRecipeTime(recipe.time);
            setRecipeIngredients(recipe.ingredients);
            setRecipeSteps(recipe.steps);
        }
    }, [recipe])

    useEffect(() => {
        setRecipeIngredientsArray(recipeIngredients.split("\r\n"))
    }, [recipeIngredients])

    useEffect(() => {
        setRecipeStepsArray(recipeSteps.split("\r\n"))
    }, [recipeSteps])

    return (
        <div id="recipe-container">
            <h1>{recipeName}</h1>
            <a href="/"><button>Return to Index</button></a>
            <h3>{recipeDescription}</h3>
            <h6>Time: {recipeTime}</h6>
            <ul id="ingredients-list" className="ingredients-list">{recipeIngredientsArray.map((ingredient, x) => (
                <li className="ingredients-list-item" key={x}>
                    {ingredient}
                </li>
            ))}</ul>
            <ol id="recipe-steps-list" className="recipe-steps-list">
                {recipeStepsArray.map((step, x) => (
                    <li className="recipe-steps-list-item" key={x}>
                        {step}
                    </li>
                ))}
            </ol>
            <button onClick={handleDeleteClick} className="delete-recipe-btn" id={recipeid}>Delete Recipe</button>
        </div>
    )
}

export default RecipeView;