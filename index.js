import app from "./app/server.js";

app.listen(app.get("port"), ()=>{
    console.log(`Estamo en el puerto ${app.get("port")}`)
})
//--------------