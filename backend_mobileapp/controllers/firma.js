const db = require("../db_connection");

async function obtenerFirma(req, res){
    const resultado = await db.query("SELECT firma_paramedico FROM paramedico WHERE id_paramedico=2");

    const firmaBuffer = resultado[0][0].firma_paramedico;
    const firmaBase64 = firmaBuffer.toString("base64");
    const imagenBase64 = `data:image/png;base64,${firmaBase64}`;

    res.send("Firma Aceptada");
}

module.exports = obtenerFirma;