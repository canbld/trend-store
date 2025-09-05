import "./ProductItem.css";
import Rating from "./Rating";
import Card from "../UI/Card";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;
  const { addItem, items } = useContext(CartContext);

  console.log(items);
  return (
    <Card>
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}₺</span>
      </div>
      <button onClick={() => addItem(product)}>Add to Cart</button>
    </Card>
  );
};

export default ProductItem;
