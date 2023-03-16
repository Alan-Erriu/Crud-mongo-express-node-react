import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const CartIsEmpty = () => {
  return (
    <Box
      sx={{
        minHeight: "47vh",
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        xs: "colunm",
        flexDirection: "column",
      }}
    >
      <Typography align="center" gutterBottom variant="h4" color="black">
        Cargando...
      </Typography>
    </Box>
  );
};

export default CartIsEmpty;
