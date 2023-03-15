import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import swal from "sweetalert2";

const Home = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  // Maneja las validaciones de los formularios stock y precio
  const [error, seterror] = useState({
    msgStock: "El máximo es 100",
    errorStock: false,
    msgPrecio: "El máximo es 999000",
    errorPrecio: false,
  });

  const enviarProducto = async (req, res) => {
    try {
      const product = {
        nombreProducto: nombreProducto,
        categoria: categoria,
        precio: precio,
        stock: stock,
      };
      if (stock > 0 && stock <= 100 && precio > 0 && precio <= 999000) {
        console.log(product);
        const url = "http://localhost:8080/productos/agregarproductos";
        await axios
          .post(url, product)
          .then((res) => {
            console.log(res.data);
            swal.fire("Ok", "Producto Creado", "success");
          })
          .then((err) => {
            console.log(err);
          });
      } else {
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Revise los campos!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", justifyContent: "center", marginTop: "8rem" }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2">Ingrese un nuevo producto</Typography>
          <InputLabel htmlFor="component-helper">
            Nompre del producto
          </InputLabel>
          <TextField
            fullWidth
            label={nombreProducto}
            type="text"
            required
            placeholder="EJ: Teclado gamer razer"
            value={nombreProducto}
            onChange={(e) => {
              setNombreProducto(e.target.value);
            }}
          ></TextField>
          <InputLabel htmlFor="component-helper">Categoría</InputLabel>
          <TextField
            placeholder="EJ: Teclados mecanicos"
            type="text"
            value={categoria}
            required
            onChange={(e) => {
              setCategoria(e.target.value);
            }}
          ></TextField>
          <InputLabel htmlFor="component-helper">Precio</InputLabel>
          <TextField
            placeholder="Precio del producto"
            type="number"
            inputProps={{ min: 0, max: 100 }}
            variant="outlined"
            required
            value={precio}
            error={precio < 0 || precio > 999000}
            helperText={
              precio < 0 || precio > 999000
                ? error.msgPrecio
                : error.errorPrecio
            }
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
          ></TextField>
          <InputLabel htmlFor="component-helper">Stock</InputLabel>
          <TextField
            placeholder="Unidades del producto"
            type="number"
            inputProps={{ min: 0, max: 100 }}
            value={stock}
            variant="outlined"
            error={stock < 0 || stock > 100}
            helperText={
              stock < 0 || stock > 100 ? error.msgStock : error.errorStock
            }
            onChange={(e) => {
              setStock(e.target.value);
            }}
          ></TextField>
          <Button
            sx={{ marginTop: "1rem" }}
            variant="contained"
            onClick={enviarProducto}
          >
            Crear producto
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
