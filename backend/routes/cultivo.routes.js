const express = require("express");
const router = express.Router();
const cultivoCtrl = require("../controllers/cultivo.controller");

// Crear cultivo
router.post("/", cultivoCtrl.crearCultivo);

// Obtener todos los cultivos
router.get("/", cultivoCtrl.obtenerCultivos);

// Actualizar cultivo por ID
router.put("/:id", cultivoCtrl.actualizarCultivo);

// Eliminar cultivo por ID
router.delete("/:id", cultivoCtrl.eliminarCultivo);

module.exports = router;
