function IngredientsList({ qtyIngredientsArray }) {
	return (
		<ul id='ingredients-list' className='ingredients-list'>
			{qtyIngredientsArray.map((ingredient, x) => (
				<li className='ingredients-list-item' key={x}>
					{ingredient}
				</li>
			))}
		</ul>
	);
}

export default IngredientsList;
