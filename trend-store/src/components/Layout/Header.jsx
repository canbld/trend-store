import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ showCartHandler }) => {
  return (
    <header className="header">
      <h1>Trend Store</h1>
      <HeaderCartButton showCartHandler={showCartHandler} />
    </header>
  );
};

export default Header;
