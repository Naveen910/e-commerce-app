import { useSearchParams } from "react-router-dom";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import SortDropdown from "../components/SortDropdown";
import Loader from "../components/Loader";
import useProducts from "../hooks/useProducts";
import { useMemo } from "react";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

const selectedCategories = useMemo(() => {
  return (
    searchParams.get("categories")?.split(",") || []
  );
}, [searchParams]);

  const sort = searchParams.get("sort") || "";



const { products, loading } = useProducts(
  selectedCategories,
  sort
);

  const updateCategories = (categories: string[]) => {
    const params: any = {};

    if (categories.length) {
      params.categories = categories.join(",");
    }

    if (sort) {
      params.sort = sort;
    }

    setSearchParams(params);
  };

  const updateSort = (value: string) => {
    const params: any = {};

    if (selectedCategories.length) {
      params.categories = selectedCategories.join(",");
    }

    if (value) {
      params.sort = value;
    }

    setSearchParams(params);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        
        {/* Filters */}
        <div className="w-full lg:w-72 bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Filters
          </h2>

          <Filters
            selected={selectedCategories}
            onChange={updateCategories}
          />
        </div>

        {/* Products Section */}
        <div className="flex-1 space-y-6">
          
          {/* Top Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Products
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Browse our latest collection
              </p>
            </div>

            <div className="w-full sm:w-60">
              <SortDropdown
                value={sort}
                onChange={updateSort}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div>
            {loading ? (
              <Loader />
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}