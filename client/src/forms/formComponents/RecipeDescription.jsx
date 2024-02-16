function RecipeDescription(props) {
	const handleChange = e => {
		props.setRecipeDescription(e.target.value);
	};

	return (
		<div id='recipe-description-field' className='form-field'>
			<label
				htmlFor='recipeDescription'
				id='recipe-description-label'
				className='form-field-label'>
				Description
			</label>
			<input
				value={props.recipeDescription}
				onChange={handleChange}
				type='text'
				name='recipeDescription'
				id='recipe-description-input'
				className='form-field-input'
			/>
		</div>
	);
}

export default RecipeDescription;
