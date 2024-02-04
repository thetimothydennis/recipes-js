import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import frontendRouter from "./routers/frontendRouter.js";

config();

const app = express();

app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(frontendRouter)

export default app;