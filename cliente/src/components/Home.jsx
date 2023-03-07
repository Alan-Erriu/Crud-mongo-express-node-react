import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import uniqid from "uniqid"

const Home = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  function sendProduct() {
    const product = {
      name: name,
      category: category,
      price: price,
      stock: stock,
      id:uniqid()
    };
    console.log(product);
    axios
      .post("/productos/agregarProducto", product)
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
      {/* <Stack
        component="form"
        sx={{
          width: "25ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      > */}
        <label htmlFor="nombre">nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label htmlFor="category">category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>
        <label htmlFor="price">price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
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
        {/* <TextField
          component="input"
          helperText="ingrese nombre del producto"
          id="demo-helper-text-aligned"
          label="ej:teclado razer"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          helperText="ingrese categoria"
          id="demo-helper-text-aligned"
          label="ej:teclados"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <TextField
          helperText="ingrese el precio"
          id="demo-helper-text-aligned"
          label="ej:1500"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          helperText="ingrese el stock"
          id="demo-helper-text-aligned"
          label="ej:2"
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
        /> */}
        <Button variant="contained" onClick={sendProduct}>
          Send
        </Button>
      {/* </Stack> */}
    </Box>
  );
};

export default Home;
