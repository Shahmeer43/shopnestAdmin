import React, { useEffect, useState } from "react";
import Product from "../Components/Product";

export default function Home() {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    let dataJSON = await fetch("http://localhost:8000/products");
    let data = await dataJSON.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    products && (
      <>
        <div
          className="container d-flex justify-content-center align-items-center flex-column mt-2"
          style={{ textAlign: "center" }}
        >
          <p
            className="fw-bold"
            style={{ fontFamily: "Nunito", fontSize: "3rem" }}
          >
            Welcome to Shopnest! Admin
          </p>

          <p
            className="fw-bold"
            style={{ fontFamily: "Nunito", fontSize: "2.5rem" }}
          >
            Your Products
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {products.map((product) => {
            return (
              <Product
                key={product._id}
                item={product}
                fetchProducts={fetchProducts}
              ></Product>
            );
          })}
        </div>
      </>
    )
  );
}
