import axios from "axios";

function RecipeButtons({ recipeid }) {
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

	const handleEditClick = () => {
		window.location = `/edit-recipe/${recipeid}`;
	};

	return (
		<div className='btns-container' id='recipe-btns-container'>
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
	);
}

export default RecipeButtons;
