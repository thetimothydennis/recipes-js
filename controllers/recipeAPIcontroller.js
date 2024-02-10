import * as recipeAPI from "../models/recipes-model.js";

function typeSelector(requestObj) {
    let typeArray = [];
    if (requestObj.breakfast) {
        typeArray.push("breakfast");
    }
    if (requestObj.appetizer) {
        typeArray.push("appetizer")
    }
    if (requestObj.soup) {
        typeArray.push("soup")
    }
    if (requestObj.entree) {
        typeArray.push("entree")
    }
    if (requestObj.side) {
        typeArray.push("side")
    }
    if (requestObj.beverage) {
        typeArray.push("beverage")
    }
    if (requestObj. dessert) {
        typeArray.push("dessert")
    }
    if (requestObj.salad) {
        typeArray.push("salad")
    }
    if (requestObj.sauces) {
        typeArray.push("sauces")
    }
    if (requestObj.breadsPastas) {
        typeArray.push("breadsPastas")
    }
    if (requestObj.meats) {
        typeArray.push("meats")
    }
    if (requestObj.ingredientPrep) {
        typeArray.push("ingredientPrep")
    }
    return typeArray;
}

export const addRecipe = async (req, res) => {
    try {
        let typesArray = typeSelector(req.body);
        const { 
            recipeName, 
            recipeDescription, 
            recipeTime, 
            recipeIngredients, 
            recipeSteps 
        } = req.body;

        const recipeObj = {
            name: recipeName, 
            description: recipeDescription, 
            time: recipeTime, 
            ingredients: 
            recipeIngredients, 
            steps: recipeSteps, 
            type: typesArray 
        };
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
        let typesArray = typeSelector(req.body);
        const recipeId = req.params.recipeid;
        const { 
            recipeName, 
            recipeDescription, 
            recipeTime, 
            recipeIngredients, 
            recipeSteps 
        } = req.body;
        const recipeObj = {
            name: recipeName, 
            description: recipeDescription, 
            time: recipeTime, 
            ingredients: recipeIngredients, 
            steps: recipeSteps,
            type: typesArray
        };
        await recipeAPI.editARecipe(recipeId, recipeObj);
        res.redirect(`/recipes/${recipeId}`);
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
}

export const getRecipesOfTypes = async (req, res) => {
    try {
        const recipes = await recipeAPI.findRecipesByType(req.body.type);
        res.send(recipes);
    } catch (err) {
        console.log(err);
        res.send(err.message);
    }
}

export const searchRecipesByName = async (req, res) => {
    try {
        const recipes = await recipeAPI.findRecipesByName(req.query.name)
        res.send(recipes)
    } catch (err) {
        console.log(err);
        res.send(err.mesage);
    }
}