// ProductCard.jsx
import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ name, image, price, addToCart, id }) => {
  const handleClick = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div className="flex flex-col bg-white p-4 sm:p-6 rounded-xl shadow-lg transition duration-500 hover:cursor-pointer transform hover:scale-105">
      <div className="bg-radial-gradient from-blue-200 to-purple-200 rounded-lg p-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 sm:h-56 object-contain mt-4"
        />
      </div>
      <div>
        <h2 className="text-center font-bold text-sm sm:text-md mt-4">
          {name}
        </h2>
      </div>
      <div className="flex justify-between items-center flex-col">
        <p className="text-center mt-2 sm:mt-4 mb-1 text-sm sm:text-md font-semibold text-gray-600">
          Price: ${price}
        </p>
        <button
          className="my-2 bg-gradient-to-l from-slate-500 to-gray-400 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-md font-bold hover:cursor-pointer"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
