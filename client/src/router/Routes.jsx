import { Route, Routes } from "react-router-dom"
import AddRecipePage from "../pages/AddRecipePage"
import MainPage from "../pages/MainPage"
import RecipePage from "../pages/RecipePage";
import EditRecipePage from "../pages/EditRecipePage";

function RoutesUI() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add-recipe" element={<AddRecipePage />} />
            <Route path="/edit-recipe/:recipeid" element={<EditRecipePage />} />
            <Route path="/recipes/:recipeid" element={<RecipePage />} />
        </Routes>
    )
}

export default RoutesUI;