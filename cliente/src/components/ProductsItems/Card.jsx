import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
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
    let url = `https://crud-mern-stack.onrender.com/productos/borrar/${_id}`;
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
        confirmButtonText: "Si, borrar!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          swal.fire("Borrado!", "El producto fue eliminado.", "success"),
            setTimeout(borrarProducto, 1000);
        }
      });
  };
  return (
    <Card
      sx={{
        width: { xs: "100%", xl: "90%" },
        height: "500px",
        mt: "1rem",
      }}
    >

      <CardContent>
        <Typography variant="h5" color="text.primary">
          Producto
        </Typography>

        <Typography variant="body1" color="-moz-initial">
          <br /><strong> Nombre: </strong>{nombreProducto}
          <br />
          <br />
         <strong>Categoría:</strong>  {categoria} <br />
          <br />
          <strong> Precio:</strong> ${precio.toFixed(3)} <br /> 
          <br />
          <strong> En stock:</strong> {stock}<br /><br />
          <strong>Código de producto:</strong><br /> {_id} <br />
          <br />
        </Typography>
        <Typography variant="body1" color="green">
        </Typography>

        <CardActions sx={{ mt: "8px"}}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/editarproducto/${_id}`}
          >
            <Button sx={{marginRight:"4px"}} variant="contained">Editar</Button>
          </Link>
          <Button variant="contained" color="error" onClick={modal}>
            Eliminar
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
