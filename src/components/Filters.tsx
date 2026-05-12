import { useEffect, useMemo, useState } from "react";
import type { Category } from "../types/product";
import { getCategories } from "../api/products";

interface Props {
  selected: string[];
  onChange: (categories: string[]) => void;
}

export default function Filters({
  selected,
  onChange,
}: Props) {
  const [categories, setCategories] = useState<Category[]>(
    []
  );

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  // Remove unwanted/duplicate categories
  const filteredCategories = useMemo(() => {
    const unwantedKeywords = [
      "test",
      "misc",
      "other",
      "changes",
      "new",
    ];

    return categories
      .filter((category) => {
        const name = category.name.toLowerCase();

        return (
          name.length > 2 &&
          !unwantedKeywords.some((word) =>
            name.includes(word)
          )
        );
      })
      .slice(0, 8);
  }, [categories]);

  const handleCheckbox = (id: string) => {
    if (selected.includes(id)) {
      onChange(
        selected.filter((item) => item !== id)
      );
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="space-y-5">
      {/* Heading */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Categories
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Filter products by category
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {filteredCategories.map((category) => {
          const checked = selected.includes(
            String(category.id)
          );

          return (
            <button
              key={category.id}
              onClick={() =>
                handleCheckbox(String(category.id))
              }
              className={`
                px-4 py-2 rounded-full text-sm font-medium border transition duration-200
                ${
                  checked
                    ? "bg-black text-white border-black shadow-sm"
                    : "bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black"
                }
              `}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}