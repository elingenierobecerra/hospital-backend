export const insertarPaciente = ( req, res ) => {

    res.send({
        "id":1,
        "nombre":"JOSE MARIA ASNAR",
        "telefono":"3198524561"
    })

}

export const modificarPaciente = ( req, res ) => {

    res.send({
        "id":1,
        "nombre":"MODIFICADO MARIA ASNAR",
        "telefono":"96321456789"
    })

}

export const consultarPaciente = ( req, res ) => {

    res.send({
        "id":1,
        "nombre":"MUESTRAME A MARIA LA DEL BARRIO",
        "telefono":"3198524561"
    })

}

export const eliminarPaciente = ( req, res ) => {

    res.send({
        "id":1,
        "nombre":"REGISTRO ELIMINADO",
        "telefono":"XXXXXXXXXXX"
    })

}