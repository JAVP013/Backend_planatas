const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombreCompleto: String,
  rfc: String,
  contrasena: String,
  tipoUsuario: { type: String, enum: ["Experto", "Visualizador"], required: true }
});

module.exports = mongoose.model("Usuario", usuarioSchema);
