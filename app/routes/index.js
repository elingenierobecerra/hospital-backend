import { Router } from "express";
import cita from "./citamedica.routes.js";
import paciente from "./paciente.routes.js";

const route = Router();

route.use("/cita",cita);
route.use("/paciente",paciente);

export default route;