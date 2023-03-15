import { Box} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardEdit from "@/components/CardEdit";

const EditarProducto = () => {
  //requerimos el id de la ruta con useparams
  const params = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    //pasamos el id obtenido como parametro para traer el producto del servidor
    const obtenerProducto = async () => {
      const url = "http://localhost:8080/productos/obtenerproducto";
      const item = await axios.post(url, { _id: params._id });
      setProducto(item.data.productos);
    };
    obtenerProducto();
  }, []);



  return (
    <Box sx={{ mt: "20rem" }}>
      {producto.map((item) => (
        <CardEdit key={item._id} producto={item} />
      ))}
    </Box>
  );
};

export default EditarProducto;
