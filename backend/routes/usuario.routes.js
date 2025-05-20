const express = require("express");
const router = express.Router();
const usuarioCtrl = require("../controllers/usuario.controller");

// Crear un nuevo usuario
router.post("/", usuarioCtrl.crearUsuario);

// Obtener todos los usuarios
router.get("/", usuarioCtrl.obtenerUsuarios);

// Actualizar un usuario por ID
router.put("/:id", usuarioCtrl.actualizarUsuario);

// Eliminar un usuario por ID
router.delete("/:id", usuarioCtrl.eliminarUsuario);

module.exports = router;
