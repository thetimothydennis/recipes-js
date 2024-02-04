import http from "http";
import app from "./index.js";
import { config } from "dotenv";

config();

const PORT = process.env.PORT;

http.createServer(app).listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});