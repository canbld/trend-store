import Header from "./components/Layout/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Cart from "./components/Layout/Cart/Cart.jsx";
import { useState } from "react";
import CartProvider from "./components/context/CartProvider.jsx";
import Footer from "./components/Layout/Footer.jsx";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = (e) => {
    setCartIsShow(false);
    e.preventdefault();
  };
  return (
    <CartProvider>
      <Header showCartHandler={showCartHandler} />
      <Hero />
      <Products />
      {cartIsShow && <Cart hideCartHandler={hideCartHandler} />}
      <Footer />
    </CartProvider>
  );
}

export default App;
