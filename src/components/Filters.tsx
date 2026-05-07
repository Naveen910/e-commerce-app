import { useEffect, useState } from "react";
import type { Category } from "../types/product";
import { getCategories } from "../api/products";

interface Props {
  selected: string[];
  onChange: (categories: string[]) => void;
}

export default function Filters({ selected, onChange }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleCheckbox = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="filters">
      <h3>Categories</h3>

      {categories.map((category) => (
        <label key={category.id}>
          <input
            type="checkbox"
            checked={selected.includes(String(category.id))}
            onChange={() => handleCheckbox(String(category.id))}
          />
          {category.name}
        </label>
      ))}
    </div>
  );
}