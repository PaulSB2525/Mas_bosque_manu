const express = require("express");
const router = express.Router();
const { verificarToken, verificarAdmin, verificarParamedico } = require("../middleware/auth");
const { validarSchema, sanitizarDatos } = require("../middleware/validacion");
const paramedicoSchema = require("../schemas/paramedico");

const {
    crearParamedico,
    obtenerParamedicos,
    obtenerParamedicoPorId,
    actualizarParamedico,
    eliminarParamedico,
    obtenerFirmaParamedico
} = require("../controllers/paramedicos");

// Protegidas - Solo admins pueden gestionar paramedicos
router.post("/", verificarToken, verificarAdmin, sanitizarDatos, validarSchema(paramedicoSchema.crear), crearParamedico);
router.get("/", verificarToken, verificarAdmin, obtenerParamedicos);
router.get("/:id", verificarToken, verificarAdmin, obtenerParamedicoPorId);
router.get("/:id/firma", verificarToken, verificarParamedico, obtenerFirmaParamedico);
router.put("/:id", verificarToken, verificarAdmin, sanitizarDatos, validarSchema(paramedicoSchema.actualizar), actualizarParamedico);
router.delete("/:id", verificarToken, verificarAdmin, eliminarParamedico);

module.exports = router;