import { Router } from "express";

const route = Router();
import { 
    insertarPaciente, 
    consultarPaciente, 
    modificarPaciente, 
    eliminarPaciente } from "../controllers/paciente.controllers.js";

route.get("/", consultarPaciente)
route.post("/", insertarPaciente)
route.delete("/", eliminarPaciente);
route.patch("/", modificarPaciente)

export default route;