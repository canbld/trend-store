import "./Cart.css";
import CartItem from "./CartItem";
import OffCanvas from "../../UI/OffCanvas";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Cart = ({ hideCartHandler }) => {
  const { items, totalAmount, clearItems } = useContext(CartContext);
  const cartItems = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <OffCanvas hideCartHandler={hideCartHandler}>
      <div className="cart-head">
        <h2>My cart</h2>
        <a href="#" onClick={hideCartHandler}>
          X
        </a>
      </div>
      {cartItems}
      <div className="total">
        <span className="total-amount-text">Total amount :</span>
        <span className="total-amount-price">{totalAmount}₺</span>
      </div>
      <div className="actions">
        <button className="cart-order">Checkout</button>
        <button className="cart-clear" onClick={clearItems}>
          Clear all
        </button>
      </div>
    </OffCanvas>
  );
};

export default Cart;
