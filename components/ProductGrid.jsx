import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  if (!products || products.length === 0)
    return (
      <div className="py-12 text-center text-gray-500">No products found</div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
