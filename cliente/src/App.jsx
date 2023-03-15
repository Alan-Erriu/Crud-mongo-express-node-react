import Nav from "@/components/Nav";
import Home from "@/components/Home";
import Products from "@/components/Products";
import { Routes, Route } from "react-router-dom";
import EditProducts from "@/components/EditProducts";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/editarproducto/:_id" element={<EditProducts />} />
      </Routes>
    </div>
  );
}

export default App;
