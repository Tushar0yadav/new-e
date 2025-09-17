export default function CategoryFilter({
  categories = [],
  selected,
  onSelect,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        className={`px-4 py-2 rounded ${
          !selected ? "bg-black text-white" : "bg-gray-100"
        }`}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`px-4 py-2 rounded ${
            selected === cat.id || selected === cat.name
              ? "bg-black text-white"
              : "bg-gray-100"
          }`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
