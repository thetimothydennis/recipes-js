function RecipeTime(props) {
	const handleChange = e => {
		props.setRecipeTime(e.target.value);
	};

	return (
		<div id='recipe-time-field' className='form-field'>
			<label
				htmlFor='recipeTime'
				id='recipe-time-label'
				className='form-field-label'>
				Time
			</label>
			<input
				type='text'
				value={props.recipeTime}
				onChange={handleChange}
				required
				name='recipeTime'
				id='recipe-time-input'
				className='form-field-input'
			/>
		</div>
	);
}

export default RecipeTime;
