import app from "./app/server.js";

app.listen(app.get("port"), ()=>{
    console.log(`Estamos en el puerto ${app.get("port")}`)
})
//--------------