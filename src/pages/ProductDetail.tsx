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

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)}>
        Back
      </button>

      <img
        src={product.images[0]}
        alt={product.title}
      />

      <div>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}