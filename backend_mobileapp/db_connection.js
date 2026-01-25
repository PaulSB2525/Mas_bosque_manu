const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "frap"
});
const db = pool.promise();


async function verificarConexion(){
    try{
        await db.query("SELECT 1");
        console.log("Conexion con base de datos correcta");
    }catch (error){
        console.log("No se pudo conectar a la base: ", error.message);
    }
}

verificarConexion();

module.exports = db;