const mongoose = require("mongoose");

const cultivoSchema = new mongoose.Schema({
  tipoCultivo: { type: String, enum: ["Hortaliza", "Planta", "Hongo"], required: true },
  numeroCircuito: { type: Number, required: true },
  tiposPlagas: [{ type: String }],
});

module.exports = mongoose.model("Cultivo", cultivoSchema);
