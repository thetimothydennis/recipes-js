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
    const [recipeTypesArray, setRecipeTypesArray] = useState([]);

    const handleEditClick = () => {
        window.location = `/edit-recipe/${recipeid}`;
    }

    const handleDeleteClick = async (e) => {
        await axios.delete(`/api/recipes/${e.target.id}`);
        window.location = "/";
    }

    const handleFirstDelClick = (e) => {
        e.target.style["background-color"] = "red";
        e.target.style["transition-property"] = "background-color";
        e.target.style["transition-duration"] = "500mx";
        e.target.onclick = handleDeleteClick;
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
            setRecipeTypesArray(recipe.type);
        }
    }, [recipe])

    useEffect(() => {
        setRecipeIngredientsArray(recipeIngredients.split("\r\n"))
    }, [recipeIngredients])

    useEffect(() => {
        setRecipeStepsArray(recipeSteps.split("\r\n"))
    }, [recipeSteps])

    return ( 
        <div>
            { recipeSteps ? 
            <div id="recipe-container">
                <h1>{recipeName}</h1>
                <a href="/"><button>Return to Index</button></a>
                <h3>{recipeDescription}</h3>
                <ul id="recipe-types" className="recipe-types">{recipeTypesArray.map((type, x) => (
                    <li className="recipe-type" key={x}>{type.toUpperCase()}</li>
                ))}</ul>
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
                <button onClick={handleEditClick} className="delete-recipe-btn" id="edit-button">Edit Recipe</button>
                <button onClick={handleFirstDelClick} className="delete-recipe-btn" id={recipeid}>Delete Recipe</button>
                <button onClick={handleDeleteClick} className="delete-recipe-btn confirm-delete-btn" id={recipeid}>Confirm</button>
            </div> : <></> }
        </div>
    )
}

export default RecipeView;