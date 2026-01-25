const db = require("../db_connection");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const paramedicoSchema = require("../schemas/paramedico");

async function crearParamedico(req, res){
    console.log(req.body);
    const parseResult = paramedicoSchema.safeParse(req.body);

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
        const [duplicados] = await db.query(
            "SELECT usuario, correoInst FROM paramedico WHERE usuario = ? OR correoInst = ?",
            [datos.usuario, datos.correoInst]
        );

        if (duplicados.length > 0) {
            const conflicto = duplicados[0];
            const campo = conflicto.usuario === datos.usuario ? "usuario" : "correoInst";
            return res.status(400).json({
                success: false,
                message: `El ${campo} ya esta registrado`
            });
        }

        const hash = await bcrypt.hash(datos.contrasena, saltRounds);
        const firmaBuffer = Buffer.from(datos.firma_paramedico.replace(/^data:image\/\w+;base64,/, ""), "base64");
        const sql = "INSERT INTO paramedico (nombre, correoInst, correoEsc, usuario, contraseña, firma_paramedico) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [datos.nombre, datos.correoInst, datos.correoEsc, datos.usuario, hash, firmaBuffer];
        const [resultado] = await db.query(sql, values);

        return res.status(201).json({
            success: true,
            message: "Paramedico creado con exito",
            id: resultado.insertId
        });

    }catch (err){
        console.error("Error en el controlador de paramedico:", err);
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });

    }
}

module.exports = crearParamedico;