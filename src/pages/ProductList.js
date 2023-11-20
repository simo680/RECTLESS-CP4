import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchShop = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Invalid data format:", data);
          navigate("*");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("*");
      }
    };

    fetchShop();
  }, [navigate]);

  return (
    <div className="product-list-container">
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/products/${product.id}`} className="product-link">
              <div className="product-info">
                <div className="product-title">{product.title}</div>
                <StarRating rating={Math.round(product.rating)} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
