import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          No Products Found
        </h2>

        <p className="text-gray-500 mt-3">
          Try changing filters or categories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}