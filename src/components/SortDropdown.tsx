interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <div className="w-full sm:w-[260px]">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-gray-700">
          Sort Products
        </label>

        {value && (
          <button
            onClick={() => onChange("")}
            className="text-xs font-medium text-gray-500 hover:text-black transition"
          >
            Reset
          </button>
        )}
      </div>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            appearance-none
            rounded-2xl
            border border-gray-300
            bg-white
            px-4 py-3.5
            pr-12
            text-sm
            font-medium
            text-gray-800
            shadow-sm
            outline-none
            transition-all
            duration-200
            hover:border-gray-400
            focus:border-black
            focus:ring-4
            focus:ring-black/5
            cursor-pointer
          "
        >
          <option value="">
            Default Sorting
          </option>

          <option value="asc">
            Price: Low to High
          </option>

          <option value="desc">
            Price: High to Low
          </option>
        </select>

        {/* Custom Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}