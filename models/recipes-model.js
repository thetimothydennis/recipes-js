import { Recipe } from "./recipes-schema.js";

export const getAllRecipes = async () => {
    try {
        const recipes = await Recipe.find({});
        return recipes;
    } catch (err) {
        console.log(err);
        return err.message;
    }
}

export const getARecipe = async (recipeId) => {
    try {
        const recipe = await Recipe.findById(recipeId);
        return recipe;
    } catch (err) {
        console.log(err)
        return err.message;
    }
}

export const deleteARecipe = async (recipeId) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(recipeId);
        return recipe;
    } catch (err) {
        console.log(err);
        return err.message;
    }
}

export const addARecipe = async (recipeObj) => {
    try {
        const { name, description, time, ingredients, steps, type } = recipeObj;
        const insertRecipe = new Recipe({
            name,
            description,
            time,
            ingredients,
            steps,
            type
        })
        const saveRecipeToDb = await insertRecipe.save();
        return saveRecipeToDb;
    } catch (err) {
        console.log(err);
        return err.message;
    }
}

export const editARecipe = async (recipeId, recipeObj) => {
    try {
        const recipeToUpdate = await Recipe.findByIdAndUpdate(recipeId, recipeObj);
        console.log(recipeToUpdate);
        return recipeToUpdate;
    } catch (err) {
        console.log(err);
        return err.message;
    }
}