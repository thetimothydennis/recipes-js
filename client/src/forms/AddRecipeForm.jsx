import RecipeName from "./formComponents/RecipeName";
import RecipeDescription from "./formComponents/RecipeDescription";
import RecipeTime from "./formComponents/RecipeTime";
import RecipeIngredients from "./formComponents/RecipeIngredients";
import RecipeSteps from "./formComponents/RecipeSteps";
import SubmitButton from "./formComponents/SubmitButton";
import "../stylesheets/forms.css";
import RecipeType from "./formComponents/RecipeType";

function AddRecipeForm () {
    return (
        <form id="add-recipe-form" className="recipe-form" method="POST" action="/api/recipes/add-recipe">
            <RecipeName />
            <RecipeDescription />
            <RecipeTime />
            <RecipeIngredients />
            <RecipeSteps />
            <RecipeType />
            <SubmitButton />
        </form>
    )
}

export default AddRecipeForm;