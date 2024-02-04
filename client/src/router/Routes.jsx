import { Route, Routes } from "react-router-dom"
import AddRecipePage from "../pages/AddRecipePage"
import MainPage from "../pages/MainPage"

function RoutesUI() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add-recipe" element={<AddRecipePage />} />
        </Routes>
    )
}

export default RoutesUI;