const SensorData = require("../models/SensorData");

/**
 * Registra un nuevo dato de sensor
 */
exports.registrarDatoSensor = async (req, res) => {
    try {
        const nuevoDato = new SensorData(req.body);
        await nuevoDato.save();
        res.status(201).json(nuevoDato);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al registrar dato de sensor", error });
    }
};

/**
 * Obtiene todos los datos de sensores de un cultivo específico
 */
exports.obtenerDatosPorCultivo = async (req, res) => {
    try {
        const datos = await SensorData.find({ cultivoId: req.params.id });
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener datos", error });
    }
};

/**
 * Actualiza un dato de sensor por su ID
 */
exports.actualizarDatoSensor = async (req, res) => {
    try {
        const dato = await SensorData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(dato);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar dato de sensor", error });
    }
};

/**
 * Elimina un dato de sensor por su ID
 */
exports.eliminarDatoSensor = async (req, res) => {
    try {
        await SensorData.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: "Dato eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar dato de sensor", error });
    }
};
