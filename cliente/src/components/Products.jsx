import { Button,Box } from "@mui/material"
import axios from "axios"





const Products = () => {
const getUsers=async()=>{

  const url = 'http://localhost:8080/productos/verproductos'
  const getData= await axios.get(url) 
  console.log(getData)  
}

  return (
    <>
    <h1>obtener productos desde la base de datos por consola</h1>
    <Box>
    
    <Button onClick={getUsers}> get</Button>
    </Box>
    </>
  )
}

export default Products