import AddRecipeForm from "../forms/AddRecipeForm";

function AddRecipeView() {
	const handleReturnClick = () => {
		window.location = "/";
	};

	return (
		<div id='add-recipe-view'>
			<h2>Add Recipe</h2>
			<button onClick={handleReturnClick}>Return to Index</button>
			<AddRecipeForm />
		</div>
	);
}

export default AddRecipeView;
