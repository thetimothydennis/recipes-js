import express from "express";
import * as recipesAPICtrl from "../controllers/recipeAPIcontroller.js";

const router = express.Router();

router.route("/api/recipes/add-recipe")
    .post(recipesAPICtrl.addRecipe)

router.route("/api/recipes")
    .get(recipesAPICtrl.getRecipes)

router.route("/api/recipes/:recipeid")
    .get(recipesAPICtrl.getRecipe)

export default router;