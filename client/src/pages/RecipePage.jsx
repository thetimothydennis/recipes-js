import { useParams } from "react-router";
import { useState } from "react";
import RecipeView from "../views/RecipeView";
import axios from "axios";
import "../stylesheets/recipe-page.css";

function RecipePage() {
    const { recipeid } = useParams();
    const [recipe, setRecipe] = useState();

    const getRecipe = async () => {
        const recipeData = await axios.get(`/api/recipes/${recipeid}`);
        setRecipe(recipeData.data)
    }


    return (
        <>
            <RecipeView {...{getRecipe, recipeid, recipe}}/>     
        </>
    )
}

export default RecipePage;