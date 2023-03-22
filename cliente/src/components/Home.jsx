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
    msgNombreProducto: "Campo requerido",
    errorNombreProducto: false,
    msgCategoria: "Campo requerido",
    errorCategoria: false,
  });

  const enviarProducto = async (req, res) => {
    try {
      const product = {
        nombreProducto: nombreProducto,
        categoria: categoria,
        precio: precio,
        stock: stock,
      };
      if (
        stock > 0 &&
        stock <= 100 &&
        precio > 0 &&
        precio <= 999000 &&
        nombreProducto != "" &&
        categoria != ""
      ) {
        const url =
          "https://crud-mern-stack.onrender.com/productos/agregarproductos";
        await axios
          .post(url, product)
          .then((res) => {
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
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "8rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography textAlign={"center"} fontFamily={"fantasy"} fontSize={"80px"} color={"#7066e0"}>
        Crud Mern
      </Typography>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "75%", lg: "300px%", xl: "50%" },
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{mb:"1rem"}} variant="h4" fontFamily={"inherit"} textAlign={"center"}>
            Ingrese un nuevo producto
          </Typography>
          <InputLabel htmlFor="component-helper">
            Nombre del producto
          </InputLabel>
          <TextField
            fullWidth
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
            placeholder="EJ: Teclados mecánicos"
            type="text"
            value={categoria}
            required={true}
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
