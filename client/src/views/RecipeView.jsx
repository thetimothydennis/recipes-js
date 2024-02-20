import { useState, useEffect } from "react";
import "../stylesheets/forms.css";
import RecipeButtons from "../components/RecipeButtons";
import RecipeTypesDisplay from "../components/RecipeTypesDisplay";
import RecipeStepsList from "../components/RecipeStepsList";
import RecipeIngredientsContainer from "../components/RecipeIngredientsContainer";
import ReturnToIndex from "../ReturnToIndexBtn";

function RecipeView({ recipe, recipeid, getRecipe }) {
	const [recipeName, setRecipeName] = useState("");
	const [recipeDescription, setRecipeDescription] = useState("");
	const [recipeTime, setRecipeTime] = useState("");
	const [recipeIngredients, setRecipeIngredients] = useState("");
	const [recipeSteps, setRecipeSteps] = useState("");
	const [recipeTypesArray, setRecipeTypesArray] = useState([]);

	useEffect(() => {
		getRecipe(recipeid);
	}, []);

	useEffect(() => {
		if (recipe !== undefined) {
			setRecipeName(recipe.name);
			setRecipeDescription(recipe.description);
			setRecipeTime(recipe.time);
			setRecipeIngredients(recipe.ingredients);
			setRecipeSteps(recipe.steps);
			setRecipeTypesArray(recipe.type);
		}
	}, [recipe]);

	const splitDBStrings = arr => {
		return arr.split("\r\n");
	};

	return (
		<div>
			{recipeSteps ? (
				<div id='recipe-container'>
					<h2>{recipeName}</h2>
					<ReturnToIndex />
					<h3>{recipeDescription}</h3>
					<RecipeTypesDisplay {...{ recipeTypesArray }} />
					<h6>Time: {recipeTime}</h6>
					<RecipeIngredientsContainer
						{...{ recipeIngredients, splitDBStrings }}
					/>
					<RecipeStepsList {...{ recipeSteps, splitDBStrings }} />
					<RecipeButtons
						{...{
							recipeid,
						}}
					/>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export default RecipeView;
