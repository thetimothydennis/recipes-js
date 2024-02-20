import { useEffect, useState } from "react";

function RecipeTypesDisplay({ recipeTypesArray }) {
	const [normalizedTypes, setNormalizedTypes] = useState([]);

	const normalizeType = typeArr => {
		let normalized = [];
		for (let type of typeArr) {
			if (type === "ingredientPrep") {
				normalized.push("ingredient prep");
			} else if (type === "breadsPastas") {
				normalized.push("breads and pastas");
			} else {
				normalized.push(type);
			}
		}
		return normalized;
	};

	useEffect(() => {
		setNormalizedTypes(normalizeType(recipeTypesArray));
	}, [recipeTypesArray]);

	return (
		<ul id='recipe-types' className='recipe-types'>
			{normalizedTypes.map((type, x) => (
				<li className='recipe-type' key={x}>
					{type.toUpperCase()}
				</li>
			))}
		</ul>
	);
}

export default RecipeTypesDisplay;
