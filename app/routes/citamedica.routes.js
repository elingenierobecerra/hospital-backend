import { Router } from "express";

const route = Router();
import {
    insertarCita, 
    consultarCita, 
    modificarCita, 
    eliminarCita } from "../controllers/cita.controllers.js";

route.get("/", consultarCita)
route.post("/", insertarCita)
route.delete("/", eliminarCita);
route.patch("/", modificarCita)

export default route;