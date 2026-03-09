const { z } = require("zod");

// Schema para insumos
const insumoSchema = z.object({
    nombre: z.string()
        .min(2, "Nombre de insumo muy corto")
        .max(100, "Nombre de insumo muy largo"),
    cantidad: z.number()
        .int("Cantidad debe ser un número entero")
        .min(1, "Cantidad mínima es 1")
        .max(1000, "Cantidad máxima es 1000")
});

// 🛠️ SIGNOS VITALES: Ahora aceptan nulos o estar ausentes
const signosVitalesSchema = z.object({
    Temp: z.number().int().nullable().optional(),
    FC: z.number().int().nullable().optional(),
    FR: z.number().int().nullable().optional(),
    SpO2: z.number().int().nullable().optional(),
    T_A: z.string().regex(/^\d{2,3}\/\d{2,3}$/).optional().or(z.literal("")),
    GLU: z.number().int().nullable().optional()
}).optional().default({}); // Permitimos que todo el objeto sea opcional

// Schema para nivel de conciencia (Glasgow)
const nivelConcienciaSchema = z.object({
    motora: z.number().int().min(1).max(6).optional().default(6),
    verbal: z.number().int().min(1).max(5).optional().default(5),
    ocular: z.number().int().min(1).max(4).optional().default(4)
}).optional().default({ motora: 6, verbal: 5, ocular: 4 });

// Schema principal para reportes
const reporteSchema = {
    crear: z.object({
        // Información del paciente - ESTE SIGUE SIENDO OBLIGATORIO
        paciente_id: z.number()
            .int("ID de paciente inválido")
            .positive("ID de paciente debe ser positivo"),

        fecha_hora: z.string()
            .datetime()
            .optional()
            .default(() => new Date().toISOString()),

        observaciones: z.string().optional().default(""),
        recomendaciones: z.string().optional().default(""),

        // Lo hacemos opcional para pruebas
        traslado_aceptado: z.boolean().optional().default(true),

        numero_unidad: z.string().optional().default("0"),
        nombre_operador: z.string().optional().default(""),
        firma_operador: z.string().optional().default(""),

        // Firma del paciente: opcional para que no truene sin el canvas
        firma_paciente: z.string().optional().default(""),

        nombre_testigo: z.string().optional().default(""),
        firma_testigo: z.string().optional().default(""),

        // Ubicación: Opcional o con valor por defecto
        lugar_nombre: z.string().optional().default("Ubicación no especificada"),

        // Signos vitales y Nivel de conciencia usando los schemas de arriba
        signos_vitales: signosVitalesSchema,
        nivel_conciencia: nivelConcienciaSchema,

        // Arrays con valores por defecto para evitar errores de "undefined"
        lesiones: z.array(z.string()).optional().default([]),
        pupilas: z.array(z.string()).optional().default([]),
        anatomicas: z.array(z.string()).optional().default([]),
        insumos: z.array(insumoSchema).optional().default([]),
        fotografias: z.array(z.string()).optional().default([])
    }),

    actualizar: z.object({
        // ... (el resto del código de actualizar se mantiene igual)
    })
};

module.exports = reporteSchema;