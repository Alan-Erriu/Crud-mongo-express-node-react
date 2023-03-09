import {Link} from "react-router-dom"
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";


export default function RecipeReviewCard({
  producto: { _id, nombreProducto, categoria, precio, stock },
}) {
  return (
    <Card sx={{ width: 345, height: 400 }}>
      <CardHeader title={nombreProducto} subheader={categoria} />

      <CardContent>
        <Typography variant="h5" color="text.primary">
          Características:
        </Typography>

        <Typography variant="body1" color="-moz-initial">
          Categoria: {categoria} <br />
          Cantidad: {stock} <br />
          Código de producto: {_id} <br />
        </Typography>

        <Typography variant="body1" color="green">
          Precio: ${precio}
        </Typography>
        <CardActions >
          <Link to={`/editarproducto/${_id}`}>
          <Button variant="contained">Editar</Button>
          </Link>
          <Button variant="contained" color="error">Eliminar</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
