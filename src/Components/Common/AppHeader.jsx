import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const AppHeader = ({ cartCount }) => {
  return (
    <header className="flex items-center justify-evenly p-4 bg-gradient-to-l from-blue-500 to-purple-600 h-20">
      <h1 className="text-white font-bold text-2xl sm:text-4xl font-serif">
        SHOP ON
      </h1>
      <Link
        to="/cart"
        className="text-white text-3xl sm:text-5xl p-2 sm:p-4 relative hover:cursor-pointer focus:outline-none"
      >
        <LuShoppingCart />
        {cartCount > 0 && (
          <span className="absolute top-1 right-0 text-white font-bold text-sm sm:text-lg bg-black rounded-lg px-1 sm:px-2">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
};

export default AppHeader;
