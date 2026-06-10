import express from "express";
import config from "./config/enviroments/index.js";
import { Router } from "express";

//INICIALIZAR
const app = express();
const router = Router();

app.set("port", config.PORT)

router.get("/",(req, res)=>{
    res.send("hola mundo");
})

app.use(router);

export default app;