import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import frontendRouter from "./routers/frontendRouter.js";
import recipeAPIRouter from "./routers/recipeAPIrouter.js";

config();

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(frontendRouter);
app.use(recipeAPIRouter);

export default app;
