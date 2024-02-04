import express from "express";

const router = express.Router();

router.route("/api/recipes/add-recipe")
    .post((req, res) => {
        const recipe = req.body;
        console.log(recipe);
        res.send("posted add-recipe route")
    })
export default router;