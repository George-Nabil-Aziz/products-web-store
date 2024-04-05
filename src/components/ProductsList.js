import { useEffect, useState } from "react";
import Product from "./Product";
function ProductsList() {
  const [product, setProduct] = useState();
  const [categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getCategory = (categoryName) => {
    fetch(`${api_url}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Main Products</h2>
      {product ? (
        <div className="container">
          <div className="text-center">
            <button
              className="btn btn-info m-2"
              onClick={() => {
                getProducts();
              }}
            >
              All
            </button>
            {categories.map((category) => {
              return (
                <button
                  className="btn btn-info m-2"
                  key={category}
                  onClick={() => {
                    getCategory(category);
                  }}
                >
                  <span className="text-capitalize">{category}</span>
                </button>
              );
            })}
          </div>
          <div className="row">
            {product.map((product) => {
              return (
                <div className="col-3" key={product.id}>
                  <Product product={product} showButton={true} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
export default ProductsList;
