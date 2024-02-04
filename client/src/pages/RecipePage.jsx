import { useParams } from "react-router";
import { useState, useEffect } from "react";
import RecipeView from "../views/RecipeView";
import axios from "axios";

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