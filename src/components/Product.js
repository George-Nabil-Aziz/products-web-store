import { Link } from "react-router-dom";
import "./Product.css";

function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      {product ? (
        <div className={`card ${!showButton && "flex flex-row"}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p>Price: {product.price}$</p>
            {showButton && (
              <Link
                className="btn btn-primary"
                to={`product/${product.id}/${product.price}$`}
              >
                Details
              </Link>
            )}
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default Product;
