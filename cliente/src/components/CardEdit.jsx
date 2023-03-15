import { Box, Button, Card, CardContent, Typography, InputLabel,
  TextField, } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const CardEdit = ({
  producto: { _id, nombreProducto, categoria, precio, stock },
}) => {
  //las variables en ingles son para diferenciarlas, de las props
  const [nameProduct, setNameProduct] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navegar = useNavigate();
  // Maneja las validaciones de los formularios stock y precio
  const [error, seterror] = useState({
    msgStock: "El máximo es 100",
    errorStock: false,
    msgPrecio: "El máximo es 999000",
    errorPrecio: false,
  });
   
  //esta función crea un objeto con los datos ingresados por el usuario
  const editarProducto = async () => {
    try{
      const producto = {
        nombreProducto: nameProduct,
        categoria: category,
        precio: price,
        stock: quantity,
      }
      if (stock > 0 && stock <= 100 && precio > 0 && precio <= 999000){

        //luego con axios pasamos la url concatenada con el id y en el body el objeto creado por el usuario
        const url = `http://localhost:8080/productos/editarproducto/${_id}`;
       await axios
          .put(url, producto)
          .then((res) => {
            navegar("/products");
            swal.fire("Ok", "Producto modificado exitosamente", "success");
          })
          .then((err) => {
            console.log(err);
          });
      }else{
        swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Revise los campos!",
        })
      }
    }catch(error){
   console.log(error)
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
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
          <Typography variant="h2">Editar Producto</Typography>
          <InputLabel htmlFor="component-helper">
            Nompre del producto
          </InputLabel>
          <TextField
            fullWidth
            label={nameProduct}
            type="text"
            required
            placeholder="EJ: Teclado gamer razer"
            defaultValue={nombreProducto}
            onChange={(e) => {
              setNameProduct(e.target.value);
            }}
          ></TextField>
          <InputLabel htmlFor="component-helper">Categoría</InputLabel>
          <TextField
            placeholder="EJ: Teclados mecanicos"
            type="text"
            defaultValue={categoria}
            required
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          ></TextField>
          <InputLabel htmlFor="component-helper">Precio</InputLabel>
          <TextField
            placeholder="Precio del producto"
            type="number"
            inputProps={{ min: 0, max: 100 }}
            variant="outlined"
            required
            defaultValue={precio}
            error={precio < 0 || precio > 999000}
            helperText={
              precio < 0 || precio > 999000 ? error.msgPrecio : error.errorPrecio
            }
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></TextField>
          <InputLabel htmlFor="component-helper">Stock</InputLabel>
          <TextField
            placeholder="Unidades del producto"
            type="number"
            inputProps={{ min: 0, max: 100 }}
            defaultValue={stock}
            variant="outlined"
            error={stock < 0 || stock > 100}
            helperText={
              stock < 0 || stock > 100 ? error.msgStock : error.errorStock
            }
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></TextField>
          <Button
            sx={{ marginTop: "1rem" }}
            variant="contained"
            onClick={editarProducto}
          >
            Crear producto
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardEdit;