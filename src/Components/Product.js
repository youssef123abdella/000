import { Link } from "react-router-dom";
import './Products.css'

export default function Product(props) {
  const { product } = props;

  console.log(product)

  return (
    <>
      <img src={product.image} className="card-img-top product-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{"Salary : "+product.price+' $'}</h5>
        <p className="card-text product-desc">{product.description}</p>
        {props.showButton && (
          <Link to={`product/${product.id}`} className="botton ">
            Buy
          </Link>
        )}
      </div>
    </>
  );
}
