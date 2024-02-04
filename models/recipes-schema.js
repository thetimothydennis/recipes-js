import { connect, createConnection, Schema } from "mongoose";
import { config } from "dotenv";
config();

const MONGO_URI = process.env.MONGO_URI;

connect(MONGO_URI);

const connection = createConnection(MONGO_URI);

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    time: {
        type: String
    },
    ingredients: {
        type: String,
        required: true
    },
    steps: {
        type: String,
        required: true
    }
})

export const Recipe = connection.model("Recipes", RecipeSchema);