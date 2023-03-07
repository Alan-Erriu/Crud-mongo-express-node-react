import Nav from "@/components/Nav";
import Home from "@/components/Home";
import Products from "@/components/Products";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
