import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import uniqid from "uniqid";

const Home = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  function sendProduct() {
    const product = {
      nombreProducto: nombreProducto,
      categoria: categoria,
      precio: precio,
      stock: stock,
      
    };
    console.log(product);
    const url ="http://localhost:8080/productos/agregarproductos"
    axios.post(url, product)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">Ingrese un nuevo producto</Typography>

      <label htmlFor="nombre">nombre</label>
      <input
        type="text"
        value={nombreProducto}
        onChange={(e) => {
          setNombreProducto(e.target.value);
        }}
      ></input>
      <label htmlFor="category">category</label>
      <input
        type="text"
        value={categoria}
        onChange={(e) => {
          setCategoria(e.target.value);
        }}
      ></input>
      <label htmlFor="price">price</label>
      <input
        type="text"
        value={precio}
        onChange={(e) => {
          setPrecio(e.target.value);
        }}
      ></input>
      <label htmlFor="stock">stock</label>
      <input
        type="text"
        value={stock}
        onChange={(e) => {
          setStock(e.target.value);
        }}
      ></input>

      <Button variant="contained" onClick={sendProduct}>
        Enviar
      </Button>
    </Box>
  );
};

export default Home;
