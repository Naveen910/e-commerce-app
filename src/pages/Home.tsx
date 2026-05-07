import { useSearchParams } from "react-router-dom";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import SortDropdown from "../components/SortDropdown";
import Loader from "../components/Loader";
import useProducts from "../hooks/useProducts";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategories =
    searchParams.get("categories")?.split(",") || [];

  const sort = searchParams.get("sort") || "";

  let query = "offset=0&limit=20";

  if (selectedCategories.length > 0) {
    query += `&categoryId=${selectedCategories[0]}`;
  }

  if (sort === "asc") {
    query += "&price_min=1";
  }

  const { products, loading } = useProducts(query);

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
    <div className="container">
      <div className="top-bar">
        <Filters
          selected={selectedCategories}
          onChange={updateCategories}
        />

        <SortDropdown value={sort} onChange={updateSort} />
      </div>

      {loading ? <Loader /> : <ProductGrid products={products} />}
    </div>
  );
}