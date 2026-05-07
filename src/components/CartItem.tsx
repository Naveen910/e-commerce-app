import { useCart } from "../context/CartContext";
import type { Product } from "../types/product";

interface Props {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: Props) {
  const { removeFromCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row gap-5">
        
        {/* Product Image */}
        <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {item.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <p>
                Qty:{" "}
                <span className="font-medium text-black">
                  {item.quantity}
                </span>
              </p>

              <p>
                Price:{" "}
                <span className="font-medium text-black">
                  ${item.price}
                </span>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-black">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition duration-200 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}