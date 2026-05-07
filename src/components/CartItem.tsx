import { useCart } from "../context/CartContext";
import type { Product } from "../types/product";

interface Props {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: Props) {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.images[0]} alt={item.title} />

      <div>
        <h3>{item.title}</h3>
        <p>Qty: {item.quantity}</p>
        <p>${item.price}</p>
      </div>

      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}