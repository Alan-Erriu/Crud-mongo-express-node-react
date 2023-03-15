import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import axios from "axios";
import swal from "sweetalert2";

export default function RecipeReviewCard({
  producto: { _id, nombreProducto, categoria, precio, stock },
}) {
  const navegar = useNavigate();
  const borrarProducto = async () => {
    let url = `http://localhost:8080/productos/borrar/${_id}`;
    await axios.delete(url).then((res) => {
      console.log(res);
    });
    navegar(0).then((err) => {
      console.log(err);
    });
  };

  const modal = () => {
    swal
      .fire({
        title: "Esta seguro?",
        text: "Esta acción es irremediable!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
       
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ),setTimeout(borrarProducto, 1000)
        }
            
      });
  };
  return (
    <Card sx={{ width: 345, height: 400 }}>
      <CardHeader title={nombreProducto} subheader={categoria} />

      <CardContent>
        <Typography variant="h5" color="text.primary">
          Características:
        </Typography>

        <Typography variant="body1" color="-moz-initial">
          Categoria: {categoria} <br />
          En stock: {stock} <br />
          Código de producto: {_id} <br />
        </Typography>

        <Typography variant="body1" color="green">
          Precio: ${precio}
        </Typography>
        <CardActions>
          <Link to={`/editarproducto/${_id}`}>
            <Button variant="contained">Editar</Button>
          </Link>
          <Button variant="contained" color="error" onClick={modal}>
            Eliminar
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
