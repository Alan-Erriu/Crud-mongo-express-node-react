const mongoose = require("mongoose");
require("dotenv").config()
const connect = async () => {
  try {
    await mongoose.connect( process.env.MONGO_URL);
    console.log("conectado a la base de datos ")
  } catch (error) {
    throw new Error("no se puede conectar: " + error.message);
  }
};

module.exports = connect;
