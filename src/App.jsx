import { useState } from "react";
import AppHeader from "./Components/Common/AppHeader";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Components/Cart/CartPage";
import ProductList from "./Components/Products/ProductList";
import AppFooter from "./Components/Common/AppFooter";
import Alert from "./Components/Common/Alert";


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("info");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (isProductInCart) {
      setAlertMessage("⚠️ Item are already in the cart!");
      setAlertType("warning");
    } else {
      setCartItems([...cartItems, product]);
      setAlertMessage("Item added ✅");
      setAlertType("success");
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    setAlertMessage("Item removed ❌");
    setAlertType("error");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  return (
    <div>
      <AppHeader cartCount={cartItems.length} onCartClick={openCart} />
      {showAlert && <Alert message={alertMessage} type={alertType} />}
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              isOpen={isCartOpen}
              onClose={closeCart}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
      <AppFooter />
    </div>
  );
};

export default App;
