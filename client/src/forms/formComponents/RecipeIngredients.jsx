function RecipeIngredients() {
    return (
        <div id="recipe-ingredients-field" className="form-field">
            <label htmlFor="recipeIngredients" id="recipe-ingredients-label" className="form-field-label">Ingredients</label>
            <textarea name="recipeIngredients" id="recipe-ingredients-input" className="form-field-input" />
        </div>
    )
}

export default RecipeIngredients;