import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Shop
      </Link>

      <Link to="/cart" className="cart-link">
        Cart ({totalItems})
      </Link>
    </nav>
  );
}