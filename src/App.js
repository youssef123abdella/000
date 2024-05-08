import About from "./Components/About";
import Nav from "./Components/Nav";
import ProductsDetails from "./Components/routing";
import Products from "./Components/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
             
              <Products />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductsDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
