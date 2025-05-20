// Importa Express para crear el servidor
const express = require("express");

// CORS permite que el frontend (por ejemplo, React) se comunique con este backend
const cors = require("cors");

// Conexión a la base de datos MongoDB
const connectDB = require("./config/db");

// Importación de rutas
const cultivoRoutes = require("./routes/cultivo.routes");
const usuarioRoutes = require("./routes/usuario.routes");
const datosRoutes = require("./routes/datos.routes");

// Inicializa la aplicación de Express
const app = express();

// Aplica middleware CORS (aceptar peticiones de otros orígenes)
app.use(cors());

// Middleware para interpretar datos en formato JSON (body-parser integrado)
app.use(express.json());

// Conecta a la base de datos MongoDB (ver archivo config/db.js)
connectDB();

// Rutas de la API
app.use("/api/cultivos", cultivoRoutes);     // Ej: GET /api/cultivos
app.use("/api/usuarios", usuarioRoutes);     // Ej: POST /api/usuarios
app.use("/api/datos", datosRoutes);          // Ej: GET /api/datos/cultivo/:id

// Levanta el servidor en el puerto 3000 (o puedes usar process.env.PORT)
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
