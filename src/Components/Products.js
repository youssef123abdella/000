import Product from "./Product";
import { useEffect, useState } from "react";
import './Products.css'
export default function Products() {
  let [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    
  }, []);
  return (
    <>

      <div className="container ">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3 product-container" key={product.id}>
                <Product showButton={true} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
