const express = require("express");
const router = express.Router();
const { sanitizarDatos } = require("../middleware/validacion");
const authParamedicoSchema = require("../schemas/authParamedico");

const {
    loginParamedico,
    verificarSesion,
    logoutParamedico
} = require("../controllers/authParamedicos");

// Login
router.post("/login", sanitizarDatos, loginParamedico);

// Verificar sesión activa
router.get("/verificar", verificarSesion);

// Logout
router.post("/logout", logoutParamedico);

module.exports = router;