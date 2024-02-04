import axios from "axios";
import { useState, useEffect } from "react";
import "../stylesheets/recipe-card.css";

function MainPage() {
    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        const recipes = await axios.get(`/api/recipes`);
        setRecipes(recipes.data);
    }

    const handleClick = async (e) => {
        const recipeId = e.target.id;
        window.location = `/recipes/${recipeId}`;
    }

    useEffect(() => {
        getRecipes();
    }, [])

    return (
        <div>
            <h2>All Recipes</h2>
            <a href="/add-recipe"><button>Add Recipe</button></a>
            <div id="recipe-cards-container" className="recipe-cards-container">
            {recipes.map((recipe, x) => (
                <div onClick={handleClick} id={recipe._id} className="recipe-card" key={x}>
                    <p className="recipe-card-item" id={recipe._id}>{recipe.name}</p>
                    <p className="recipe-card-item" id={recipe._id}>{recipe.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MainPage;