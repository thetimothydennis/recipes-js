import * as recipeAPI from "../models/recipes-model.js";

export const addRecipe = async (req, res) => {
    console.log(req.body)
    const { recipeName, recipeDescription, recipeTime, recipeIngredients, recipeSteps } = req.body;
    const recipeObj = {name: recipeName, description: recipeDescription, time: recipeTime, ingredients: recipeIngredients, steps: recipeSteps };
    const insertTheRecipe = await recipeAPI.addARecipe(recipeObj);
    res.send(insertTheRecipe);
}

export const getRecipes = async (req, res) => {
    const getTheRecipes = await recipeAPI.getAllRecipes();
    console.log(getTheRecipes);
    res.send(getTheRecipes);
}

export const getRecipe = async (req, res) => {
    const recipeId = req.params.recipeid;
    const getTheRecipe = await recipeAPI.getARecipe(recipeId);
    res.send(getTheRecipe)
}