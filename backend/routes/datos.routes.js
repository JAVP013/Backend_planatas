const express = require("express");
const router = express.Router();
const datosCtrl = require("../controllers/datos.controller");

// Crear nuevo dato de sensor
router.post("/", datosCtrl.registrarDatoSensor);

// Obtener datos por ID de cultivo
router.get("/cultivo/:id", datosCtrl.obtenerDatosPorCultivo);

// Actualizar dato de sensor por ID
router.put("/:id", datosCtrl.actualizarDatoSensor);

// Eliminar dato de sensor por ID
router.delete("/:id", datosCtrl.eliminarDatoSensor);

module.exports = router;
