const { z } = require("zod");

const insumoSchema = z.object({
    nombre: z.string(),
    cantidad: z.number().int(),
});

const reporteSchema = z.object({
     fecha_hora: z.iso.datetime(),
     observaciones: z.string().optional(),
     recomendaciones: z.string().optional(),
     traslado_aceptado: z.boolean(),
     numero_unidad: z.string(),
     nombre_operador: z.string().optional(),
     firma_operador: z.string().optional(),
     firma_paciente: z.string(),
     nombre_testigo: z.string().optional(),
     firma_testigo: z.string().optional(), 
     lugar_nombre: z.string(),
     Temp: z.number().int(),
     FC: z.number().int(),
     FR: z.number().int(),
     SpO2: z.number().int(),
     T_A: z.string(), 
     GLU: z.number().int(),
     lesiones: z.array(z.string()),
     pupilas: z.array(z.string()),
     anatomicas: z.array(z.string()),
     identificacion_anatomica: z.array(z.string()),
     nivel_motora: z.number().int(),
     nivel_verbal: z.number().int(),
     nivel_ocular: z.number().int(),
     insumos: z.array(insumoSchema).optional(),
});

const tablaReporteSchema = reporteSchema.omit({
     lugar_nombre: true,
     Temp: true,
     FC: true,
     FR: true,
     SpO2: true,
     T_A: true,
     GLU: true,
     lesion_nombres: true,
     pupila_nombre: true,
     identificacion_anatomica: true,
     nivel_motora: true,
     nivel_verbal: true,
     nivel_ocular: true,
     insumos: true,
});

module.exports = {reporteSchema, tablaReporteSchema, insumoSchema};