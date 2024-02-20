import { useEffect, useState } from "react";

function RecipeQtyField({ setQtyIngredientsArray, recipeIngredientsArray }) {
	const [recipeQty, setRecipeQty] = useState(1);

	useEffect(() => {
		let newIngredientsArray = [];
		for (let ingredient of recipeIngredientsArray) {
			let array = ingredient.split(" -- ");
			if (array[0] > 0) {
				array[0] = eval(array[0]) * recipeQty;
				array[0] = array[0].toFixed(2);
				array[0] = array[0].toString();
			} else {
				array[0] = "";
			}
			let joined = array.join(" ");
			newIngredientsArray.push(joined);
		}
		setQtyIngredientsArray(newIngredientsArray);
	}, [recipeIngredientsArray, recipeQty]);

	const handleQtyChange = e => {
		setRecipeQty(e.target.value);
	};

	return (
		<div id='recipe-qty-input' className='form-field'>
			<label className='form-field-label' htmlFor='recipeQty'>
				Recipe Quantity
			</label>
			<input
				id='recipe-qty'
				type='number'
				step='0.5'
				min='0.5'
				name='recipeQty'
				className='form-field-input'
				onChange={handleQtyChange}
				value={recipeQty}
			/>
		</div>
	);
}

export default RecipeQtyField;
