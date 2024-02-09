import RecipeType from "./formComponents/RecipeType";
import { useState, useEffect } from "react";
import SubmitButton from "./formComponents/SubmitButton";
import "../stylesheets/forms.css";
import { isMobile } from "react-device-detect";


 function FindByTypeForm({handleSubmit, getRecipes}) {

    const [openState, setOpenState] = useState(false);
    const [menuState, setMenuState] = useState(<></>)

    const handleOpenClick = () => {
        if (!openState) {
            setOpenState(true)
        } else if (openState) {
            setOpenState(false)
        }
    }

    useEffect(() => {
        if (openState) {
            setMenuState(
            <div>
                <form id="find-recipe-types-form" className="type-form" method="POST" onSubmit={handleSubmit} action="/api/recipes">
                <RecipeType />
                <SubmitButton />
                </form>
                <button id="reset-filters-btn" className="form-field-input" onClick={resetFilters}>Reset Filters</button>
            </div>)
        } else if (!openState) {
            setMenuState(<></>)
        }
    }, [openState])

    const resetFilters = () => {
        document.querySelectorAll("input[type='checkbox']:checked").forEach(element => element.click());
        setTimeout(() => {
            getRecipes();
        }, 500)
    }

    return (
        <div id="find-recipe-types">
            <div>
            <button onClick={handleOpenClick}></button>
            {menuState}                
            </div>
          </div>
    )
}

export default FindByTypeForm