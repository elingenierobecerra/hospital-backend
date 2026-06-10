import { insertar, eliminar, modificar, consultar } from "./paciente.controllers.js";
import { insertar, eliminar, modificar, consultar } from "./cita.controllers.js";

export default {
    paciente: {
        insertar: insertarPaciente,
        eliminar: eliminarPaciente,
        modificar: modificarPaciente,
        consultar: consultarPaciente
    },
    cita: {
        insertar: insertarCita,
        eliminar: eliminarCita,
        modificar: modificarCita,
        consultar: consultarCita
    }
};