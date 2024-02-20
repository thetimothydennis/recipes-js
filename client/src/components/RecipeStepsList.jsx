import { useEffect, useState } from "react";

function RecipeStepsList({ splitDBStrings, recipeSteps }) {
	const [recipeStepsArray, setRecipeStepsArray] = useState([]);

	useEffect(() => {
		setRecipeStepsArray(splitDBStrings(recipeSteps));
	}, [recipeSteps]);

	return (
		<ol id='recipe-steps-list' className='recipe-steps-list'>
			{recipeStepsArray.map((step, x) => (
				<li className='recipe-steps-list-item' key={x}>
					{step}
				</li>
			))}
		</ol>
	);
}

export default RecipeStepsList;
