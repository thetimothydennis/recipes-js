import * as recipeAPI from "../models/recipes-model.js";

export const addRecipe = async (req, res) => {
    console.log(req.body)
    const { recipeName, recipeDescription, recipeTime, recipeIngredients, recipeSteps } = req.body;
    const recipeObj = {name: recipeName, description: recipeDescription, time: recipeTime, ingredients: recipeIngredients, steps: recipeSteps };
    const insertTheRecipe = await recipeAPI.addARecipe(recipeObj);
    res.redirect("/");
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

export const deleteRecipe = async (req, res) => {
    const recipeId = req.params.recipeid;
    const deleteTheRecipe = await recipeAPI.deleteARecipe(recipeId);
    res.send(deleteTheRecipe);
}

export const editRecipe = async (req, res) => {
    const recipeId = req.params.recipeid;
    console.log(req.body)
    const { recipeName, recipeDescription, recipeTime, recipeIngredients, recipeSteps } = req.body;
    const recipeObj = {name: recipeName, description: recipeDescription, time: recipeTime, ingredients: recipeIngredients, steps: recipeSteps };
    const editRecipe = await recipeAPI.editARecipe(recipeId, recipeObj);
    res.send(editRecipe);
}