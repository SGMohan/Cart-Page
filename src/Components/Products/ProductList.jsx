// ProductList.jsx
import { useEffect } from "react";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProductList = ({ addToCart }) => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("ERROR! Fetching Products", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 pt-20">
      {" "}
      {/* Updated background color */}
      <div className="container mx-auto p-4 sm:p-8">
        <h2 className="font-bold text-2xl sm:text-4xl text-center mb-6 sm:mb-10 bg-gradient-to-l from-slate-500 to-gray-400 bg-clip-text text-transparent">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {product.length ? (
            product.map((product, ind) => (
              <ProductCard
                key={ind}
                id={product.id}
                name={product.title}
                image={product.image}
                price={product.price}
                addToCart={addToCart}
              />
            ))
          ) : (
            <div className="flex text-xl sm:text-3xl my-4 justify-center items-center text-gray-400 gap-4">
              <AiOutlineLoading3Quarters />
              Loading products...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
