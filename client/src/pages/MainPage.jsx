import axios from "axios";
import { useState, useEffect } from "react";
import "../stylesheets/recipe-card.css";
import FindByTypeForm from "../forms/FindByFilterForm";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        let typesArr = [];
        for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].checked === true) {
                typesArr.push(e.target[i].name)
            }
        }
        let filteredRecipes = await axios.post("/api/recipes", {
            type: typesArr
        })
        setRecipes(filteredRecipes.data);
    }

    useEffect(() => {
        getRecipes();
    }, [])

    return (
        <div>
            <h2>All Recipes</h2>
            <a href="/add-recipe"><button>Add Recipe</button></a>
            <FindByTypeForm {...{handleSubmit}} />
            <div id="recipe-cards-container" className="recipe-cards-container">
            {recipes.map((recipe, x) => (
                <div onClick={handleClick} id={recipe._id} className="recipe-card" key={x}>
                    <h3 className="recipe-card-item recipe-card-title" id={recipe._id}>{recipe.name}</h3>
                    <p className="recipe-card-item recipe-card-description" id={recipe._id}>{recipe.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MainPage;