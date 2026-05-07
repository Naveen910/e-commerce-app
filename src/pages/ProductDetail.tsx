import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import type { Product } from "../types/product";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        if (id) {
          const data = await getProductById(id);
          setProduct(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;

  if (!product) {
    return (
      <div className="flex items-center justify-center py-20">
        <h2 className="text-2xl font-semibold text-gray-600">
          Product not found
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition"
      >
        ← Back
      </button>

      {/* Product Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10">
          
          {/* Product Image */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-[400px] lg:h-[550px] object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              {/* Category */}
              <span className="inline-block w-fit px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 text-gray-600 rounded-full">
                {product.category.name}
              </span>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base">
                {product.description}
              </p>

              {/* Price */}
              <div className="pt-2">
                <h2 className="text-4xl font-bold text-black">
                  ${product.price}
                </h2>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-black text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-800 transition duration-200"
              >
                Add To Cart
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="flex-1 border border-gray-300 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-200"
              >
                Go To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}