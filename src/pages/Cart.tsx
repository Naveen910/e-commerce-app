import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalItems, totalPrice } = useCart();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-1">
            Review your selected products
          </p>
        </div>

        <Link
          to="/"
          className="w-fit px-5 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition text-sm font-medium"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-3">
            Add some products to get started.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 h-fit sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between text-gray-600">
                <span>Total Items</span>
                <span className="font-medium text-black">
                  {totalItems}
                </span>
              </div>

              <div className="flex items-center justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-black">
                  ${totalPrice}
                </span>
              </div>

              <div className="flex items-center justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">
                  Free
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                Total
              </span>

              <span className="text-2xl font-bold text-black">
                ${totalPrice}
              </span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition duration-200">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}