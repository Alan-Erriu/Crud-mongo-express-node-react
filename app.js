const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connect = require("./database/db");
const cors = require("cors");
const productsRouter = require("./routes/products");

const app = express();
const whiteList = ["http://localhost:5173", "http://localhost:3000"];
app.use(
  cors({
    origin: whiteList,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/productos", productsRouter);

connect();

module.exports = app;
