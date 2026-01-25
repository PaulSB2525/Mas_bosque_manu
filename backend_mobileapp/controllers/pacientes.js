const db = require("../db_connection");
const { z } = require("zod");
const pacienteSchema = require("../schemas/paciente");

async function insertar_ObtenerId(nombre, tabla) {
  const [existente] = await db.query(`SELECT id_${tabla} FROM ${tabla} WHERE nombre = ?`, [nombre]);

  if (existente.length > 0) {
    return existente[0][`id_${tabla}`];
  }

  const [resultado] = await db.query(`INSERT INTO ${tabla} (nombre) VALUES (?)`, [nombre]);
  return resultado.insertId;
}

async function crearPaciente(req, res){
    console.log(req.body);
    const parseResult = pacienteSchema.safeParse(req.body);

    if (!parseResult.success) {
        const errores = z.treeifyError(parseResult.error);
        return res.status(400).json({
            success: false,
            message: "Datos ingresados son invalidos",
            errors: errores
        }); 
    }

    const datos = parseResult.data;

    try{
        const sql = "INSERT INTO paciente (nombre, edad, genero) VALUES (?, ?, ?)";
        const values = [datos.nombre, datos.edad, datos.genero];
        const [resultado_paciente] = await db.query(sql, values);

        if (datos.alergia_nombre){
            const id_alergia = await insertar_ObtenerId(datos.alergia_nombre, 'alergia');
            await db.query("INSERT INTO paciente_alergia (paciente_id, alergia_id) VALUES (?, ?)", [resultado_paciente.insertId, id_alergia]);
        }
        if (datos.patologia_nombre){
            const id_patologia = await insertar_ObtenerId(datos.patologia_nombre, 'patologia');
            await db.query("INSERT INTO paciente_patologia (paciente_id, patologia_id) VALUES (?, ?)", [resultado_paciente.insertId, id_patologia]);
        }
        if (datos.medicamento_nombre){
            const id_medicamento = await insertar_ObtenerId(datos.medicamento_nombre, 'medicamento');
            await db.query("INSERT INTO paciente_medicamento (paciente_id, medicamento_id) VALUES (?, ?)", [resultado_paciente.insertId, id_medicamento]);
        }
        
        return res.status(201).json({
            success: true,
            message: "Paciente creado con exito",
        });

    }catch (err){
        console.error("Error en el controlador de paciente:", err);
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });

    }
}

module.exports = crearPaciente;