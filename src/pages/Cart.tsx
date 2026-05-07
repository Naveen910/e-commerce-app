import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, totalItems, totalPrice } = useCart();

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="cart-summary">
            <h2>Total Items: {totalItems}</h2>
            <h2>Total Price: ${totalPrice}</h2>
          </div>
        </>
      )}
    </div>
  );
}