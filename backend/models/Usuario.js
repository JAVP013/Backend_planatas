const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombreCompleto: String,
  rfc: String,
  contrasena: String,
});

module.exports = mongoose.model("Usuario", usuarioSchema);
