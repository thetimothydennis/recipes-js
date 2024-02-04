function RecipeName() {
    return (
        <div id="recipe-name-field" className="form-field">
            <label htmlFor="recipeName" id="recipe-name-label" className="form-field-label">Name</label>
            <input type="text" name="recipeName" id="recipe-name-input" className="form-field-input" />
        </div>
    )
}

export default RecipeName;