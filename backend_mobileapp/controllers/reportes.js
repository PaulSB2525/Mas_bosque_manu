const db = require("../db_connection");
const {reporteSchema, tablaReporteSchema, insumoSchema} = require("../schemas/reporte");

async function insertarTablaReporte(datos){
    datos.firma_paciente = Buffer.from(datos.firma_paciente.replace(/^data:image\/\w+;base64,/, ""), "base64"); 
    if (datos.firma_operador) datos.firma_operador = Buffer.from(datos.firma_operador.replace(/^data:image\/\w+;base64,/, ""), "base64");
    if (datos.firma_testigo) datos.firma_testigo = Buffer.from(datos.firma_testigo.replace(/^data:image\/\w+;base64,/, ""), "base64");

    const existingColumns = Object.keys(datosReporte).filter(key => datosReporte[key] !== undefined);
    const columns = existingColumns.join(', ');
    const placeholdersReporte = datos.existingColumns.map(() => '(?)').join(', ');
    const valuesReporte = existingColumns.map(key => datosReporte[key]);

    const [resultado] = await db.query(`INSERT INTO reporte (${columns}) VALUES (${placeholdersReporte})`, valuesReporte);
    return resultado.insertId;
}

async function insertarLugar(lugar_nombre){
    const sqlLugar = "INSERT INTO lugar (nombre) VALUES (?)";
    const [resultado] = await db.query(sqlLugar, lugar_nombre);
    return resultado.insertId;
}

async function insertarSignos(datos){  
    const sqlSignos = "INSERT INTO signos_vitales (Temp, FC, FR, SpO2, T/A, GLU) VALUES (?, ?, ?, ?, ?, ?)";
    const valuesSignos = [datos.Temp, datos.FC, datos.FR, datos.SpO2, datos.T_A, datos.GLU];
    const [resultado] = await db.query(sqlSignos, valuesSignos);
    return resultado.insertId;
}

async function insertarNivelConciencia(datos){
    const total = datos.nivel_motora + datos.nivel_verbal + datos.nivel_ocular;
    const sqlNivelConciencia = "INSERT INTO nivel_conciencia (motora, verbal, ocular, total) VALUES (?,?,?,?)";
    const valuesNC = [datos.nivel_motora, datos.nivel_verbal, datos.nivel_ocular, total];
    const [resultado] = await db.query(sqlNivelConciencia, valuesNC);
    return resultado.insertId;
}

// Tomar en cuenta que en la bd los nombres son unicos, ver si lo maneja automaticamente la bd o tengoq ue
// tomarlo en cuenta yo backend sino es error
async function insertarPupilas(pupilas, reporteID){
    const sqlPupilas = pupilas.map(pupila => `nombre = ${pupila}`).join(' OR ');
    const [pupilasIDs] = await db.query(`SELECT id_Pupilas FROM pupilas WHERE ${sqlPupilas}`);

    const valuesPupilas = pupilasIDs.map(pupilaID => [reporteID, pupilaID])
    await db.query(`INSERT INTO reporte_pupilas(paciente_id, pupilas_id) VALUES ?`, [valuesPupilas])
    // bd mal debe ser reporte_id en vez de paciente_id
}
 
async function insertarRelacionMM(datos, reporteID, tabla, columna){
    const values = datos.map(nombre => [nombre]);
    await db.query(`INSERT INTO ${tabla} (nombre) VALUES ?`, values);

    const sql = datos.map(value => `nombre = ${value}`).join(' OR ');
    const [IDs] = await db.query(`SELECT ${columna} FROM ${tabla} WHERE ${sql}`);

    const valuesReporte = IDs.map(valueID => [reporteID, valueID])
    await db.query(`INSERT INTO reporte_${tabla}(reporte_id, ${tabla}_id) VALUES ?`, [valuesReporte]);
}

async function crearReporte(req, res){
    const parseResult = reporteSchema.safeParse(req.body);

    if (!parseResult.success) {
        const errores = z.treeifyError(parseResult.error);
        return res.status(400).json({
            success: false,
            message: "Datos ingresados son invalidos",
            errors: errores
        }); 
    }

    const datos = parseResult.data;
    const datosReporte = tablaReporteSchema.parse(datos);

    try{
        // Inserciones con relacion 1:M
        const lugarID = insertarLugar(datos.lugar_nombre);
        const signosID = insertarSignos(datos);
        const nivelconcienciaID = insertarNivelConciencia(datos);
        const reporteID = insertarTablaReporte(datosReporte);
        await db.query(`UPDATE reporte SET lugar_id = ${lugarID}, signos_id = ${signosID}, nivel_conciencia_id = ${nivelconcienciaID} WHERE id_Reporte = ${reporteID}`);     

        // Inserciones con relacion M:M
        insertarPupilas(datos.pupilas, reporteID);
        insertarRelacionMM(datos.insumos, reporteID, 'insumo', 'id_Insumo');
        insertarRelacionMM(datos.lesiones, reporteID, 'lesion', 'id_Lesion');
        insertarRelacionMM(datos.anatomicas, reporteID, 'anatomica', 'id_Anatomica');

        return res.status(200).json({
            success: true,
            message: "Reporte creado exitosamente"
        });

    }catch (err){
        console.error("Error en el controlador de reporte:", err);
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });

    }
}

module.exports = crearReporte;