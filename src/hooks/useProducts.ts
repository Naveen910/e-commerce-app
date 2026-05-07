import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../api/products";

export default function useProducts(
  selectedCategories: string[],
  sort: string
) {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        setError("");

        let mergedProducts: Product[] = [];

        // No categories selected
        if (selectedCategories.length === 0) {
          const data = await getProducts(
            "offset=0&limit=20"
          );

          mergedProducts = Array.isArray(data)
            ? data
            : [];
        } else {
          // Fetch all selected categories
          const responses = await Promise.all(
            selectedCategories.map((id) =>
              getProducts(
                `categoryId=${id}&offset=0&limit=20`
              )
            )
          );

          // Flatten safely
          mergedProducts = responses
            .filter(Array.isArray)
            .flat();
        }

        // Remove duplicate products
        mergedProducts = mergedProducts.filter(
          (product, index, self) =>
            index ===
            self.findIndex(
              (p) => p.id === product.id
            )
        );

        // Sorting by price
        if (sort === "asc") {
          mergedProducts.sort(
            (a, b) => a.price - b.price
          );
        }

        if (sort === "desc") {
          mergedProducts.sort(
            (a, b) => b.price - a.price
          );
        }

        setProducts([...mergedProducts]);
      } catch (err) {
        console.log(err);

        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories, sort]);

  return {
    products,
    loading,
    error,
  };
}