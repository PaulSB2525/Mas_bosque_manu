const { z } = require("zod");

const adminSchema = z.object({
    usuario: z.string(),
    contrasena: z.string(),
    correo: z.email()
}); 

module.exports = adminSchema;