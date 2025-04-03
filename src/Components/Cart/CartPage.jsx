import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FiPlus, FiMinus, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  useEffect(() => {
    setQuantities(
      cartItems.reduce((acc, item) => {
        acc[item.id] = quantities[item.id] || 1;
        return acc;
      }, {})
    );
  }, [cartItems]);

  const increaseQuantity = (id) => {
    setQuantities({
      ...quantities,
      [id]: (quantities[id] || 0) + 1,
    });
  };

  const decreaseQuantity = (id) => {
    if (quantities[id] > 1) {
      setQuantities({
        ...quantities,
        [id]: quantities[id] - 1,
      });
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * (quantities[item.id] || 1);
    }, 0);
  };

  const calculateDiscount = () => {
    return calculateSubtotal() * 0.1;
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount();
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 min-h-screen pt-20 pb-10 px-4 sm:px-0">
      <div className="container mx-auto p-4 sm:p-6">
        {/* Back button for mobile */}
        <button
          onClick={() => navigate(-1)}
          className="lg:hidden flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </button>

        <h2 className="font-bold text-2xl sm:text-3xl text-center mb-6 sm:mb-8 bg-gradient-to-l from-slate-500 to-gray-400 bg-clip-text text-transparent">
          Your Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg sm:text-xl mb-6">
              Your cart is empty
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-l from-slate-500 to-gray-400 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity hover:cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-300">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <div className="flex space-x-4 mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-contain hover:cursor-pointer"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">
                            {item.name.length > 50
                              ? `${item.name.substring(0, 50)}...`
                              : item.name}
                          </h3>
                          <p className="text-gray-500 text-sm sm:text-base">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex sm:flex-col justify-between sm:justify-end items-end">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 h-6 mb-2 sm:mb-4 hover:cursor-pointer"
                        >
                          <BiTrash />
                        </button>
                        <div className="flex items-center">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="p-1 sm:p-2 border border-gray-300 rounded-l hover:bg-gray-100 hover:cursor-pointer"
                          >
                            <FiMinus size={14} />
                          </button>
                          <span className="px-3 sm:px-4 py-1 border-t border-b border-gray-300 text-sm sm:text-base">
                            {quantities[item.id] || 1}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="p-1 sm:p-2 border border-gray-300 rounded-r hover:bg-gray-100 hover:cursor-pointer"
                          >
                            <FiPlus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-right font-medium text-sm sm:text-base">
                      ${(item.price * (quantities[item.id] || 1)).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary - Right Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-4">
                <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600 text-sm sm:text-base">
                    <span>Discount (10%)</span>
                    <span>-${calculateDiscount().toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-400 pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-l from-slate-500 to-gray-400 text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity hover:cursor-pointer" >
                  Proceed to Checkout {/*Without the Functions to work */}
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full mt-4 text-center text-gray-600 hover:text-gray-900 text-sm sm:text-base hover:cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
