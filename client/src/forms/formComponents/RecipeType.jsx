import { useEffect } from "react";

function RecipeType(props) {
	return (
		<div id='recipe-type-field' className='form-field'>
			<h3>Recipe Type</h3>
			<div id='recipe-types-container' className='recipe-type-field'>
				<div className='checkbox-container'>
					<label
						htmlFor='breakfast'
						id='breakfast-label'
						className='form-field-label type-label'>
						Breakfast
					</label>
					<input
						type='checkbox'
						name='breakfast'
						id='breakfast'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='appetizer'
						id='appetizer-label'
						className='form-field-label type-label'>
						Appetizers
					</label>
					<input
						type='checkbox'
						name='appetizer'
						id='appetizer'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='soup'
						id='soup-label'
						className='form-field-label type-label'>
						Soups
					</label>
					<input
						type='checkbox'
						name='soup'
						id='soup'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='entree'
						id='entree-label'
						className='form-field-label type-label'>
						Entree
					</label>
					<input
						type='checkbox'
						name='entree'
						id='entree'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='side'
						id='side-label'
						className='form-field-label type-label'>
						Sides
					</label>
					<input
						type='checkbox'
						name='side'
						id='side'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='beverage'
						id='beverage-label'
						className='form-field-label type-label'>
						Beverages
					</label>
					<input
						type='checkbox'
						name='beverage'
						id='beverage'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='dessert'
						id='dessert-label'
						className='form-field-label type-label'>
						Dessert
					</label>
					<input
						type='checkbox'
						name='dessert'
						id='dessert'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='salad'
						id='salad-label'
						className='form-field-label type-label'>
						Salad
					</label>
					<input
						type='checkbox'
						name='salad'
						id='salad'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='sauces'
						id='sauces-label'
						className='form-field-label type-label'>
						Sauces
					</label>
					<input
						type='checkbox'
						name='sauces'
						id='sauces'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='breadsPastas'
						id='breadsPastas-label'
						className='form-field-label type-label'>
						Breads and Pasta
					</label>
					<input
						type='checkbox'
						name='breadsPastas'
						id='breadsPastas'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='meats'
						id='meats-label'
						className='form-field-label type-label'>
						Meats
					</label>
					<input
						type='checkbox'
						name='meats'
						id='meats'
						className='form-field-checkbox type-input'
					/>
				</div>
				<div className='checkbox-container'>
					<label
						htmlFor='ingredientPrep'
						id='ingredientPrep-label'
						className='form-field-label type-label'>
						Ingredient Prep
					</label>
					<input
						type='checkbox'
						name='ingredientPrep'
						id='ingredientPrep'
						className='form-field-checkbox type-input'
					/>
				</div>
			</div>
		</div>
	);
}

export default RecipeType;
