import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  InputLabel,
  TextField,
} from "@mui/material";
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
  // Maneja las validaciones de los formularios stock y precio, aun no esta implementada.
  const [error, seterror] = useState({
    msgStock: "El máximo es 100",
    errorStock: false,
    msgPrecio: "El máximo es 999000",
    errorPrecio: false,
  });
  //Con axios pasamos la url concatenada con el id y en el body el objeto creado por el usuario
  const enviarProductoEditado = async (producto) => {
    const url = `https://crud-mern-stack.onrender.com/productos/editarproducto/${_id}`;
    await axios
      .put(url, producto)
      .then((res) => {
        navegar("/products");
        swal.fire("Ok", "Producto modificado exitosamente", "success");
      })
      .then((err) => {
        console.log(err);
      });
  };
  //esta función crea un objeto con los datos ingresados por el usuario, luego se envia con la funcion enviarProductoEditado()
  const editarProducto = async () => {
    try {
   // precio y stock no pueden ser menor a 1, precio no puede ser mayor a  999000 y quantity a 100   
      if (quantity > 0 && quantity <= 100 && price > 0 && price <= 999000) {
        // si el cliente ingreso un nuevo valor, se actualiza el estado, de lo contrario conserva su valor inicial
        const producto = {
          nombreProducto: nameProduct === "" ? nombreProducto : nameProduct,
          categoria: category === "" ? categoria : category,
          precio: price === "" ? precio : price,
          stock: quantity === "" ? stock : quantity,
        };
        await enviarProductoEditado(producto);
        // precio conserva su valor por defecto y stock no puede ser menor a 1 ni mayor a 100  
      } else if (price === "" && quantity > 0 && quantity <= 100  ) {
        const producto = {
          nombreProducto: nameProduct === "" ? nombreProducto : nameProduct,
          categoria: category === "" ? categoria : category,
          precio: price === "" ? precio : price,
          stock: quantity === "" ? stock : quantity,
        };
        await enviarProductoEditado(producto);
        // stock conserva su valor por defecto y precio no puede ser menor a 1 ni mayor a 999000 
      } else if (quantity === "" && price > 0 && price <= 999000 ) {
        const producto = {
          nombreProducto: nameProduct === "" ? nombreProducto : nameProduct,
          categoria: category === "" ? categoria : category,
          precio: price === "" ? precio : price,
          stock: quantity === "" ? stock : quantity,
        };
        await enviarProductoEditado(producto);
        // precio y stock conservan su valor por defecto
      } else if (quantity === "" && price === "" ) {
        const producto = {
          nombreProducto: nameProduct === "" ? nombreProducto : nameProduct,
          categoria: category === "" ? categoria : category,
          precio: price === "" ? precio : price,
          stock: quantity === "" ? stock : quantity,
        };
        await enviarProductoEditado(producto);
      } 
      // Si stock es menor a 1 o mayor a 100 o precio menor 1 o mayor a  999000. Sale un alerta x
       else {
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
          width: { xs: "100%", sm: "100%", md: "75%", lg: "300px%", xl: "50%" },
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2">Editar Producto</Typography>
          <InputLabel htmlFor="component-helper">
            Nombre del producto
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
            placeholder="EJ: Teclados mecánicos"
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
            defaultValue={precio.toFixed(3)}
            error={price < 0 || price > 999000}
            helperText={
              price < 0 || price > 999000 ? error.msgPrecio : error.errorPrecio
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
            error={quantity < 0 || quantity > 100}
            helperText={
              quantity < 0 || quantity > 100 ? error.msgStock : error.errorStock
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
            Editar producto
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardEdit;
