import { Link } from "react-router-dom";
import type { Product } from "../types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm">
          {product.category.name}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        
        {/* Title */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-snug">
            {product.title}
          </h3>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Price */}
          <p className="text-2xl font-bold text-black">
            ${product.price}
          </p>

          {/* CTA */}
          <Link to={`/product/${product.id}`}>
            <button className="px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}