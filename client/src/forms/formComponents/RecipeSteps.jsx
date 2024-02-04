function RecipeSteps() {
    return (
        <div id="recipe-steps-field" className="form-field">
            <label htmlFor="recipeSteps" id="recipe-steps-label" className="form-field-label">Steps</label>
            <textarea required rows="10" name="recipeSteps" id="recipe-steps-input" className="form-field-input" />
        </div>
    )
}

export default RecipeSteps;