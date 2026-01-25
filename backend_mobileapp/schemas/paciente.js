const { z } = require("zod");

const pacienteSchema = z.object({
    nombre: z.string().max(50),
    edad: z.number().int().min(0).max(120),
    genero: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    alergia_nombre: z.string().optional(),
    patologia_nombre: z.string().optional(),
    medicamento_nombre: z.string().optional()
});

module.exports = pacienteSchema;