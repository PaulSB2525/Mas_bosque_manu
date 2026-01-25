const db = require("../db_connection");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const authParamedicoSchema = require("../schemas/authParamedico");

async function authParamedico(req, res){
    console.log(req.body);
    const parseResult = authParamedicoSchema.safeParse(req.body);

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
        const [resultado] = await db.query(
            "SELECT usuario, contraseña FROM paramedico WHERE usuario = ?",
            [datos.usuario]
        );

        if (resultado.length <= 0){
            return res.status(400).json({
                success: false,
                message: "Este usuario no esta registrado"
            });
        };

        const usuarioExistente = resultado[0];
        const contrasenasIguales = await bcrypt.compare(datos.contrasena, usuarioExistente.contraseña);
        if (!contrasenasIguales){
            return res.status(400).json({
                success: false,
                message: "Contraseña Incorrecta"
            });
        };        

        return res.status(201).json({
            success: true,
            message: "Sesion iniciada con exito",
        });

    }catch (err){
        console.error("Error en el controlador de admin:", err);
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor"
        });

    }
}

module.exports = authParamedico;