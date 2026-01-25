const db = require("../db_connection");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const adminSchema = require("../schemas/admin");

async function crearAdmin(req, res){
    console.log(req.body);
    const parseResult = adminSchema.safeParse(req.body);

    if (!parseResult.success){
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
            "SELECT usuario, correo FROM admin WHERE usuario = ? OR correo = ?",
            [datos.usuario, datos.correo]
        );

        if (duplicados.length > 0) {
            const conflicto = duplicados[0];
            const campo = conflicto.usuario === datos.usuario ? "usuario" : "correo";
            return res.status(400).json({
                success: false,
                message: `El ${campo} ya está registrado`
            });
        }

        const hash = await bcrypt.hash(datos.contrasena, saltRounds);
        const sql = "INSERT INTO admin (usuario, contraseña, correo) VALUES (?, ?, ?)";
        const values = [datos.usuario, hash, datos.correo];
        const [resultado] = await db.query(sql, values);

        return res.status(201).json({
            success: true,
            message: "Admin creado con exito",
            id: resultado.insertId
        });

    }catch (err){
        console.error("Error en el controlador de admin:", err);
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });

    }
}

module.exports = crearAdmin;