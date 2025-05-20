const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@bdplantas.2doids5.mongodb.net/BDPLANTAS");
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
