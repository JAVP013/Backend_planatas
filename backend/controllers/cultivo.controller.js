const Cultivo = require("../models/Cultivo");

/**
 * Crea un nuevo cultivo en la base de datos
 */
exports.crearCultivo = async (req, res) => {
    try {
        const nuevoCultivo = new Cultivo(req.body);
        await nuevoCultivo.save();
        res.status(201).json(nuevoCultivo);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear cultivo", error });
    }
};

/**
 * Obtiene todos los cultivos registrados
 */
exports.obtenerCultivos = async (req, res) => {
    try {
        const cultivos = await Cultivo.find();
        res.status(200).json(cultivos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener cultivos", error });
    }
};

/**
 * Actualiza un cultivo por su ID
 */
exports.actualizarCultivo = async (req, res) => {
    try {
        const cultivo = await Cultivo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(cultivo);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar cultivo", error });
    }
};

/**
 * Elimina un cultivo por su ID
 */
exports.eliminarCultivo = async (req, res) => {
    try {
        await Cultivo.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: "Cultivo eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar cultivo", error });
    }
};
