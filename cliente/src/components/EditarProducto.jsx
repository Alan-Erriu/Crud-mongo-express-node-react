import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


const EditarProducto = () => {
  const params = useParams();
  const [producto, setProducto] = useState([])
  useEffect(() => {
    const obtenerProducto = async () => {
      const url = "http://localhost:8080/productos/obtenerproducto";
      const item = await axios.post(url, { _id: params._id });
      setProducto(item.data.productos)
      
    };
    obtenerProducto();
  }, []);

  const mostrarporconsola=()=>{
    console.log(producto)
  }
  return (
    <Box>
      <Typography variant="h4" color="initial">
        Código de producto : {params._id}
      </Typography>
      <Button onClick={mostrarporconsola} variant="contained">Enviar</Button>
    </Box>
  );
};

export default EditarProducto;
