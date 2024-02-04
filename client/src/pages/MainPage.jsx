import axios from "axios";
import { useState, useEffect } from "react";

function MainPage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            const recipes = await axios.get(`/api/recipes`);
            setRecipes(recipes.data);
        }
        getRecipes();
    }, [])

    return (
        <div>
            <h2>All Recipes</h2>
            <div>
            {recipes.map((recipe, x) => (
                <div className="recipe-card" key={x}>
                    {console.log(recipe)}
                    <p>{recipe.name}</p>
                    <p>{recipe.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default MainPage;