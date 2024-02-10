import axios from "axios";
import { useState, useEffect } from "react";

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
        <div id="recipe-search-box" className="form-input-field">
            <label htmlFor="recipeSearch">Search by Name</label>
            <input onChange={handleChange} value={searchValue} type="text" name="recipeSearch" />
            <button onClick={handleClear}>Clear Search</button>
        </div>
    )
}

export default SearchBox;