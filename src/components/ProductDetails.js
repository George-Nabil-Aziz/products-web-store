import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductsDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${api_url}/${params.productID}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productID]);
  return (
    <div className="container">
      <h1>ProductsDetails {params.productID}</h1>
      <Product product={product} showButton={false} />
    </div>
  );
}

export default ProductsDetails;
