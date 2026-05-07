interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Sort</option>
      <option value="asc">Price Low to High</option>
      <option value="desc">Price High to Low</option>
    </select>
  );
}