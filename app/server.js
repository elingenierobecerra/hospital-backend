import express from "express";
import config from "./config/enviroments/index.js";
import ruta from "./routes/index.js";

//INICIALIZAR
const app = express();

app.set("port", config.PORT)
app.use(express.json());

app.use(ruta);

export default app;