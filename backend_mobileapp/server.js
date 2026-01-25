const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:8081",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

const adminRoutes = require("./routes/admins");
const pacientesRoutes = require("./routes/pacientes");
const paramedicoRoutes = require("./routes/paramedicos");
const reportesRoutes = require("./routes/reportes");
const firmaRoutes = require("./routes/firma");
const authParamedicosRoutes = require("./routes/authParamedico");

app.use("/admin", adminRoutes);
app.use("/paciente", pacientesRoutes);
app.use("/paramedico", paramedicoRoutes);
app.use("/reporte", reportesRoutes);
app.use("/firma", firmaRoutes);
app.use("/auth/paramedico", authParamedicosRoutes);

app.get("/", (req, res) => {
    res.send("Backend Working");
});

app.listen(port, () => {
    console.log("Conexion establecida en puerto " + port);
}); 