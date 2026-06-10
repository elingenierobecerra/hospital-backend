import { pool } from "../config/db/basedatos.js";

export const insertarCita = async ( req, res ) => {

    try {
        const id = req.body.id
        const nombre = req.body.nombre
        const estado = req.body.estado
        const result = await pool.query(`insert into cita (id, nombre, estado) values (${id}, '${nombre}', ${estado})`);
        res.json(result)
    } catch (error) {
        res.status(500).json({ "error": error.message || "Error interno del servidor" });        
    }

}

export const modificarCita = async ( req, res ) => {

    try {
        const id = req.body.id
        const nombre = req.body.nombre
        const result = await pool.query(`update cita set nombre = '${nombre}' where id = ${id} `);
        res.json(result)
    } catch (error) {
        res.status(500).json({ "error": error.message || "Error interno del servidor" });        
    }

}

export const consultarCita = async( req, res ) => {

    try {
        const id = req.body.id
        const result = await pool.query(`select * from cita where id = ${id} `);
        res.json(result)
    } catch (error) {
        res.status(500).json({ "error": error.message || "Error interno del servidor" });        
    }
}

export const eliminarCita = async( req, res ) => {

    try {
        const id = req.body.id
        const result = await pool.query(`delete from cita where id = ${id} `);
        res.json(result)
    } catch (error) {
        res.status(500).json({ "error": error.message || "Error interno del servidor" });        
    }

}