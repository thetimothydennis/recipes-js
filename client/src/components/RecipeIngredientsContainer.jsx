import IngredientsList from "../components/IngredientsList.jsx";
import RecipeQtyField from "../components/RecipeQtyField.jsx";
import { useState, useEffect } from "react";

function RecipeIngredientsContainer({ recipeIngredients, splitDBStrings }) {
	const [qtyIngredientsArray, setQtyIngredientsArray] = useState([]);
	const [recipeIngredientsArray, setRecipeIngredientsArray] = useState([]);

	useEffect(() => {
		setRecipeIngredientsArray(splitDBStrings(recipeIngredients));
	}, [recipeIngredients]);

	return (
		<div>
			<RecipeQtyField
				{...{
					setQtyIngredientsArray,
					recipeIngredientsArray,
				}}
			/>
			<IngredientsList {...{ qtyIngredientsArray }} />
		</div>
	);
}

export default RecipeIngredientsContainer;
