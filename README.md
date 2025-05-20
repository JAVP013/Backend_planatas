# 🌿 Backend - Sistema de Monitoreo de Cultivos

Este backend forma parte de una solución para el monitoreo y control de cultivos (hongos, plantas y hortalizas) mediante sensores ambientales y usuarios con distintos roles (experto y visualizador).

---

## 🚀 Tecnologías Usadas

- **Node.js** + **Express.js**
- **MongoDB Atlas** + **Mongoose**
- **Nodemon** (modo desarrollo)
- **CORS** (comunicación con frontend)
- **Arquitectura MVC** (Modelos, Controladores, Rutas)

---

## 📁 Estructura del Proyecto

```
backend/
│
├── app.js
├── config/
│   └── db.js
│
├── models/
│   ├── Usuario.js
│   ├── Cultivo.js
│   └── SensorData.js
│
├── controllers/
│   ├── usuario.controller.js
│   ├── cultivo.controller.js
│   └── datos.controller.js
│
├── routes/
│   ├── usuario.routes.js
│   ├── cultivo.routes.js
│   └── datos.routes.js
└── package.json
```

---

## 🧭 Diagrama del Flujo del Backend

1. **Usuarios (Expertos / Visualizadores)** pueden:
   - Crear cuenta / iniciar sesión (en versiones futuras)
   - Consultar cultivos y variables ambientales
   - Registrar o modificar cultivos (solo expertos)

2. **Cultivos**:
   - Tienen tipo (Planta, Hongo, Hortaliza)
   - Están asociados a un número de circuito
   - Pueden incluir tipos de plagas

3. **Sensores**:
   - Envían datos: temperatura, humedad, luz, CO₂ y nutrientes
   - Los datos se almacenan con timestamp e ID del cultivo

4. **Base de Datos (MongoDB Atlas)**:
   - Almacena usuarios, cultivos y registros sensoriales

5. **Frontend**:
   - Consume los endpoints REST
   - Muestra gráficas, reportes y alertas

---

## ⚙️ Instalación y Ejecución

### Paso 1: Clona el repositorio

```bash
git clone https://github.com/tuusuario/tu-repo.git
cd backend
```

### Paso 2: Instala las dependencias

```bash
npm install
```

### Paso 3: Agrega scripts al `package.json`

Asegúrate de tener esta sección:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

### Paso 4: Conexión a MongoDB

Ya configurada en `config/db.js`:

```js
mongoose.connect("mongodb+srv://admin:admin@bdplantas.2doids5.mongodb.net/BDPLANTAS");
```

Verifica que tu IP esté autorizada en MongoDB Atlas (`Network Access`).

### Paso 5: Ejecuta el servidor

- En desarrollo:
```bash
npm run dev
```

- En producción:
```bash
npm start
```

---

## 📡 Endpoints REST disponibles

### 🧑 Usuarios

| Método | Ruta                  | Descripción                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/usuarios`       | Listar usuarios              |
| POST   | `/api/usuarios`       | Crear usuario                |
| PUT    | `/api/usuarios/:id`   | Actualizar usuario por ID    |
| DELETE | `/api/usuarios/:id`   | Eliminar usuario por ID      |

---

### 🌾 Cultivos

| Método | Ruta                  | Descripción                    |
|--------|-----------------------|--------------------------------|
| GET    | `/api/cultivos`       | Listar cultivos                |
| POST   | `/api/cultivos`       | Crear cultivo                  |
| PUT    | `/api/cultivos/:id`   | Editar cultivo por ID          |
| DELETE | `/api/cultivos/:id`   | Eliminar cultivo por ID        |

---

### 📊 Datos Sensoriales

| Método | Ruta                         | Descripción                          |
|--------|------------------------------|--------------------------------------|
| GET    | `/api/datos/cultivo/:id`     | Datos por cultivo                    |
| POST   | `/api/datos`                 | Registrar dato sensorial             |
| PUT    | `/api/datos/:id`             | Actualizar dato sensorial            |
| DELETE | `/api/datos/:id`             | Eliminar dato sensorial              |

---

## 🔁 Datos de Prueba para Postman

### Usuario

```json
POST /api/usuarios

{
  "nombreCompleto": "Laura García",
  "rfc": "GARL880101XXX",
  "contrasena": "123456",
  "tipoUsuario": "Experto"
}
```

### Cultivo

```json
POST /api/cultivos

{
  "tipoCultivo": "Hongo",
  "numeroCircuito": 2,
  "tiposPlagas": ["Ácaros", "Moho blanco"]
}
```

### SensorData

```json
POST /api/datos

{
  "cultivoId": "664a6e0e30a7ff39c9f3157a",
  "temperatura": 24,
  "humedad": 65,
  "luz": 300,
  "co2": 400,
  "nutrientes": "óptimos"
}
```


