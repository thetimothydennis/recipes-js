import RecipeType from "./formComponents/RecipeType";
import SubmitButton from "./formComponents/SubmitButton";
import "../stylesheets/forms.css";

 function FindByTypeForm({handleSubmit}) {
    return (
        <form id="find-recipe-types-form" className="type-form" method="POST" onSubmit={handleSubmit} action="/api/recipes">
            <RecipeType />
            <SubmitButton />
        </form>
    )
}

export default FindByTypeForm