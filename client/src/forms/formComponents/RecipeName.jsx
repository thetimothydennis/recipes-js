function RecipeName(props) {
	const handleChange = e => {
		props.setRecipeName(e.target.value);
	};

	return (
		<div id='recipe-name-field' className='form-field'>
			<label
				htmlFor='recipeName'
				id='recipe-name-label'
				className='form-field-label'>
				Name
			</label>
			<input
				value={props.recipeName}
				onChange={handleChange}
				type='text'
				required
				name='recipeName'
				id='recipe-name-input'
				className='form-field-input'
			/>
		</div>
	);
}

export default RecipeName;
