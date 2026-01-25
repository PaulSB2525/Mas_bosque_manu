const { z } = require("zod");

const paramedicoSchema = z.object({
    nombre: z.string().max(100),
    correoInst: z.email().max(100),
    correoEsc: z.email().max(100),
    usuario: z.string().min(8).max(50),
    contrasena: z.string().min(8),
    firma_paramedico: z.string()
});

module.exports = paramedicoSchema;