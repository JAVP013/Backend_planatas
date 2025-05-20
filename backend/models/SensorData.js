const mongoose = require("mongoose");

const sensorDataSchema = new mongoose.Schema({
  cultivoId: { type: mongoose.Schema.Types.ObjectId, ref: "Cultivo", required: true },
  temperatura: Number,
  humedad: Number,
  luz: Number,
  co2: Number,
  nutrientes: String, // Puedes cambiarlo a Number si es cuantitativo
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SensorData", sensorDataSchema);
