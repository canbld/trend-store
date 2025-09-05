import "./HeaderCartButton.css";
import CartIcon from "./Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";

const HeaderCartButton = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const [isBumping, setIsBumping] = useState(false);

  const { items } = cartCtx;

  const totalItemsCart = items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;

    setIsBumping(true);

    const timer = setTimeout(() => {
      setIsBumping(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `button ${isBumping ? "bump" : ""}`;

  return (
    <button className={btnClasses} onClick={showCartHandler}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className="badge">{totalItemsCart}</span>
    </button>
  );
};

export default HeaderCartButton;
