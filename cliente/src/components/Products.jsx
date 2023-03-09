import { Button, Grid, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const url = "http://localhost:8080/productos/verproductos";
      const productos = await axios.get(url);
      setProducts(productos.data.productos);
    };
    obtenerProductos();
  }, []);
 
  return (
    <Box sx={{ marginTop: "8rem" }}>
      <Typography variant="h2" textAlign="center">
        obtener productos
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 10, md: 2, lg: 4, xl: 3 }}
        mt="8rem"
      >
        {products.length === 0 ? (
          <Typography
            sx={{ marginInlineStart: "30rem" }}
            variant="h2"
            textAlign="center"
          >
            cargando...
          </Typography>
        ) : (
          products.map((producto) => (
            <Grid
              key={producto._id}
              producto={producto}
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
            >
              <Box
                sx={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  xs: "colunm",
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
