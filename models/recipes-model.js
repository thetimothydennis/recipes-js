import { Recipe } from "./recipes-schema.js";

export const getAllRecipes = async () => {
	try {
		const recipes = await Recipe.find({}).sort({ name: "asc" });
		return recipes;
	} catch (err) {
		console.log(err);
		return err.message;
	}
};

export const getARecipe = async recipeId => {
	try {
		const recipe = await Recipe.findById(recipeId);
		return recipe;
	} catch (err) {
		console.log(err);
		return err.message;
	}
};

export const deleteARecipe = async recipeId => {
	try {
		const recipe = await Recipe.findByIdAndDelete(recipeId);
		return recipe;
	} catch (err) {
		console.log(err);
		return err.message;
	}
};

export const addARecipe = async recipeObj => {
	try {
		const { name, description, time, ingredients, steps, type } =
			recipeObj;
		const insertRecipe = new Recipe({
			name,
			description,
			time,
			ingredients,
			steps,
			type,
		});
		const saveRecipeToDb = await insertRecipe.save();
		return saveRecipeToDb;
	} catch (err) {
		console.log(err);
		return err.message;
	}
};

export const editARecipe = async (recipeId, recipeObj) => {
	try {
		const recipeToUpdate = await Recipe.findByIdAndUpdate(
			recipeId,
			recipeObj,
		);
		return recipeToUpdate;
	} catch (err) {
		console.log(err);
		return err.message;
	}
};

export const findRecipesByType = async recipeTypeArr => {
	try {
		const recipes = await Recipe.find({
			type: { $in: recipeTypeArr },
		}).sort({ name: "asc" });
		return recipes;
	} catch (err) {
		console.log(err);
		return err.message;
	}
};

export const findRecipesByName = async recipeNameStr => {
	try {
		let regex = eval(`/.*${recipeNameStr}+.*/i`);
		const recipes = await Recipe.find({ name: regex }).sort({
			name: "asc",
		});
		return recipes;
	} catch (err) {
		console.log(err);
		return err.message;
	}
};
