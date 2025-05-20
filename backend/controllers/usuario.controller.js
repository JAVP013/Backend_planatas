const Usuario = require("../models/Usuario");

/**
 * Crea un nuevo usuario en la base de datos.
 * Espera recibir en el cuerpo (body):
 * - nombreCompleto: String
 * - rfc: String
 * - contrasena: String
 * - tipoUsuario: "Experto" o "Visualizador"
 */
exports.crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear usuario", error });
    }
};

/**
 * Obtiene todos los usuarios registrados.
 * Retorna un arreglo de usuarios con sus datos básicos.
 */
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener usuarios", error });
    }
};

/**
 * Actualiza un usuario existente por su ID.
 * Espera recibir en el body los campos a modificar.
 * ID se recibe por URL: /api/usuarios/:id
 */
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Devuelve el nuevo documento actualizado
        );
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario", error });
    }
};

/**
 * Elimina un usuario por su ID.
 * El ID se debe enviar en la URL: /api/usuarios/:id
 */
exports.eliminarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar usuario", error });
    }
};
