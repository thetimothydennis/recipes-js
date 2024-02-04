import EditRecipeForm from "../forms/EditRecipeForm";

function EditRecipeView({recipeid}) {
    const handleReturnClick = () => {
        window.location = "/";
    }

    const handleBackClick = () => {
        window.location = `/recipes/${recipeid}`;
    }

    return (
        <div id="add-recipe-view">
            <h2>Edit Recipe</h2>
            <button onClick={handleReturnClick}>Return to Index</button>
            <button onClick={handleBackClick}>Return to Recipe</button>
            <EditRecipeForm {...{recipeid}} />
        </div>
    )
}

export default EditRecipeView;