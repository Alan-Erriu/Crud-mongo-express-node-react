import { Grid, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/ProductsItems/Card";
import ProductsIsEmpty from "@/components/ProductsItems/ProductsIsEmpty";
import Loading from "@/components/ProductsItems/Loading";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [cargando, setcargando] = useState(true);
  useEffect(() => {
    const obtenerProductos = async () => {
      const url = "http://localhost:8080/productos/verproductos";
      const productos = await axios.get(url);
      setProducts(productos.data.productos);
      setcargando(false);
    };
    obtenerProductos();
  }, []);

  return (
    <Box className="container">
      <Typography fontFamily={"fantasy"}fontSize={"70px"} color={"#7066e0"} sx={{ marginTop:"4rem",marginBottom: "5rem" }} variant="h2" textAlign="center">
        Productos
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 10, md: 2, lg: 4, xl: 3 }}
      >
        {/* Si la variable de estado es true significa que estamos esperando la respuesta del servidor ya que la funcion "obtenerProductos" 
        actualiza el estado a false */}
        {cargando ? (
          <Loading />
        ) : // Si ya se actualizo el estado a false y el array products esta en 0 quiere decir que no hay productos ingresados
        cargando === false && products.length === 0 ? (
          <ProductsIsEmpty />
        ) : (
          // Por ultimo: si la variable de estado fue actualizada a  false y el array prodcuts tiene contenido, lo renderizamos
          products.map((producto) => (
            <Grid
              key={producto._id}
              producto={producto}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
            >
              <Box
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  xs: "colunm",
                  mt: "1rem",
                }}
              >
                <Card producto={producto} />
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Products;
