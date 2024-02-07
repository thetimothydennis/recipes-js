import RecipeType from "./formComponents/RecipeType";
import SubmitButton from "./formComponents/SubmitButton";
import "../stylesheets/forms.css";

 function FindByTypeForm({handleSubmit, getRecipes}) {

    const resetFilters = () => {
        document.querySelectorAll("input[type='checkbox']:checked").forEach(element => element.click());
        setTimeout(() => {
            getRecipes();
        }, 500)
    }

    return (
        <div id="find-recipe-types">
            <form id="find-recipe-types-form" className="type-form" method="POST" onSubmit={handleSubmit} action="/api/recipes">
                <RecipeType />
                <SubmitButton />
            </form>
            <button id="reset-filters-btn" className="form-field-input"  onClick={resetFilters}>Reset Filters</button>
        </div>
    )
}

export default FindByTypeForm