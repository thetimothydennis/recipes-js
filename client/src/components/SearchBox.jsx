import axios from "axios";
import { useState, useEffect } from "react";
import "../stylesheets/forms.css";

function SearchBox (props) {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = async (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue)

    }

    const getSearch = async (searchValue) => {
        const recipes = await axios.get(`/api/searchrecipes?name=${searchValue}`)
        console.log(recipes)
        props.setRecipes(recipes.data)
    }

    useEffect(() => {
        if (searchValue != "") {
            getSearch(searchValue)
        }
    }, [searchValue])

    const handleClear = async () => {
        setSearchValue("");
        props.getRecipes();
    }

    return (
        <div id="recipe-search-box" className="form-field">
            <label htmlFor="recipeSearch" id="recipe-name-search-label" className="form-field-label">Search by Name</label>
            <input onChange={handleChange} value={searchValue} type="text" name="recipeSearch" id="recipe-search-name-input" className="form-field-input" />
            <button onClick={handleClear}>Clear Search</button>
        </div>
    )
}

export default SearchBox;