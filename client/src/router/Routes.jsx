import { Route, Routes } from "react-router-dom"
import AddRecipePage from "../pages/AddRecipePage"
import MainPage from "../pages/MainPage"
import RecipePage from "../pages/RecipePage";

function RoutesUI() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add-recipe" element={<AddRecipePage />} />
            <Route path="/recipes/:recipeid" element={<RecipePage />} />
        </Routes>
    )
}

export default RoutesUI;