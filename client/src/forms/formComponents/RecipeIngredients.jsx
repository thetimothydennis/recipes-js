function RecipeIngredients(props) {

    const handleChange = (e) => {
        props.setRecipeIngredients(e.target.value)
    }

    return (
        <div id="recipe-ingredients-field" className="form-field">
            <label htmlFor="recipeIngredients" id="recipe-ingredients-label" className="form-field-label">Ingredients</label>
            <textarea required value={props.recipeIngredients} onChange={handleChange} rows="7" name="recipeIngredients" id="recipe-ingredients-input" className="form-field-input" />
        </div>
    )
}

export default RecipeIngredients;