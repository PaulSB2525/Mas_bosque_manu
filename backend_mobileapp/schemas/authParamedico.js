const { z } = require("zod");

const authParamedicoSchema = z.object({
    usuario: z.string().min(8).max(50),
    contrasena: z.string().min(8)
});

module.exports = authParamedicoSchema;