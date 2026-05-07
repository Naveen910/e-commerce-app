import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-black"
        >
          ShopEase
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-xl text-sm font-medium transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Cart

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}