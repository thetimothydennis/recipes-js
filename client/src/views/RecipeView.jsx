import { useState, useEffect } from "react";
import "../stylesheets/forms.css";
import axios from "axios";

function RecipeView(props) {
	const { recipe, recipeid, getRecipe } = props;

	const [recipeName, setRecipeName] = useState("");
	const [recipeDescription, setRecipeDescription] = useState("");
	const [recipeTime, setRecipeTime] = useState("");
	const [recipeIngredients, setRecipeIngredients] = useState("");
	const [recipeSteps, setRecipeSteps] = useState("");
	const [recipeIngredientsArray, setRecipeIngredientsArray] = useState([]);
	const [qtyIngredientsArray, setQtyIngredientsArray] = useState([]);
	const [recipeStepsArray, setRecipeStepsArray] = useState([]);
	const [recipeTypesArray, setRecipeTypesArray] = useState([]);
	const [normalizedTypes, setNormalizedTypes] = useState([]);
	const [recipeQty, setRecipeQty] = useState(1);

	const handleEditClick = () => {
		window.location = `/edit-recipe/${recipeid}`;
	};

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

	const handleQtyChange = e => {
		setRecipeQty(e.target.value);
	};

	const handleDeleteClick = async e => {
		await axios.delete(`/api/recipes/${e.target.id}`);
		window.location = "/";
	};

	const handleFirstDelClick = e => {
		e.target.style["background-color"] = "red";
		e.target.style["transition-property"] = "background-color";
		e.target.style["transition-duration"] = "500mx";
		e.target.onclick = handleDeleteClick;
	};

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

	useEffect(() => {
		setRecipeIngredientsArray(recipeIngredients.split("\r\n"));
	}, [recipeIngredients]);

	useEffect(() => {
		let newIngredientsArray = [];
		for (let ingredient of recipeIngredientsArray) {
			let array = ingredient.split(" -- ");
			if (array[0] > 0) {
				array[0] = eval(array[0]) * recipeQty;
				array[0].toPrecision(3).toString();
			} else {
				array[0] = ""
			}
			let joined = array.join(" ");
			newIngredientsArray.push(joined)
		}
		setQtyIngredientsArray(newIngredientsArray);
	}, [recipeIngredientsArray, recipeQty])

	useEffect(() => {
		setRecipeStepsArray(recipeSteps.split("\r\n"));
	}, [recipeSteps]);

	return (
		<div>
			{recipeSteps ? (
				<div id='recipe-container'>
					<h2>{recipeName}</h2>
					<a href='/'>
						<button>Return to Index</button>
					</a>
					<h3>{recipeDescription}</h3>
					<ul id='recipe-types' className='recipe-types'>
						{normalizedTypes.map((type, x) => (
							<li className='recipe-type' key={x}>
								{type.toUpperCase()}
							</li>
						))}
					</ul>
					<h6>Time: {recipeTime}</h6>
					<div id="recipe-qty-input" className="form-field">
						<label className="form-field-label" htmlFor='recipeQty' >Recipe Quantity</label>
						<input
							id='recipe-qty'
							type='number'
							step="0.5"
							min="0.5"
							name='recipeQty'
							className='form-field-input'
							onChange={handleQtyChange}
							value={recipeQty}
						/>
					</div>
					<ul id='ingredients-list' className='ingredients-list'>
						{qtyIngredientsArray.map((ingredient, x) => (
							<li
								className='ingredients-list-item'
								key={x}>
								{ingredient}
							</li>
						))}
					</ul>
					<ol
						id='recipe-steps-list'
						className='recipe-steps-list'>
						{recipeStepsArray.map((step, x) => (
							<li
								className='recipe-steps-list-item'
								key={x}>
								{step}
							</li>
						))}
					</ol>
					<button
						onClick={handleEditClick}
						className='delete-recipe-btn'
						id='edit-button'>
						Edit Recipe
					</button>
					<button
						onClick={handleFirstDelClick}
						className='delete-recipe-btn'
						id={recipeid}>
						Delete Recipe
					</button>
					<button
						onClick={handleDeleteClick}
						className='delete-recipe-btn confirm-delete-btn'
						id={recipeid}>
						Confirm
					</button>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export default RecipeView;
