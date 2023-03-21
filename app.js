const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connect = require("./database/db");
const cors = require("cors");
const productsRouter = require("./routes/products");
// const bodyParser=require("body-parser")

const app = express();
const whiteList = ["http://localhost:5173", "http://localhost:3000", "https://aeimportaciones.netlify.app"];
app.use(
  cors({
    origin: whiteList,
  })
);
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({extended:true}))
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/productos", productsRouter);


connect();

module.exports = app;
