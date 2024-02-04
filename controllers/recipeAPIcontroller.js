import * as recipeAPI from "../models/recipes-model.js";

export const addRecipe = async (req, res) => {
    try {
        const { recipeName, recipeDescription, recipeTime, recipeIngredients, recipeSteps } = req.body;
        const recipeObj = {name: recipeName, description: recipeDescription, time: recipeTime, ingredients: recipeIngredients, steps: recipeSteps };
        await recipeAPI.addARecipe(recipeObj);
    } catch (err) {
        console.log(err);
    }
    res.redirect("/");
}

export const getRecipes = async (req, res) => {
    try {
        const getTheRecipes = await recipeAPI.getAllRecipes();
        res.send(getTheRecipes);
    } catch (err)  {
        console.log(err);
        res.send(err.message);
    }
}

export const getRecipe = async (req, res) => {
    try {
        const recipeId = req.params.recipeid;
        const getTheRecipe = await recipeAPI.getARecipe(recipeId);
        res.send(getTheRecipe)
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

export const deleteRecipe = async (req, res) => {
    try {
        const recipeId = req.params.recipeid;
        const deleteTheRecipe = await recipeAPI.deleteARecipe(recipeId);
        res.send(deleteTheRecipe);
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

export const editRecipe = async (req, res) => {
    try {
        const recipeId = req.params.recipeid;
        const { recipeName, recipeDescription, recipeTime, recipeIngredients, recipeSteps } = req.body;
        const recipeObj = {name: recipeName, description: recipeDescription, time: recipeTime, ingredients: recipeIngredients, steps: recipeSteps };
        await recipeAPI.editARecipe(recipeId, recipeObj);
        res.redirect(`/recipes/${recipeId}`);
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
}