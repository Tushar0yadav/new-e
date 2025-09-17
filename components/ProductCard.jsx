import { useState } from "react";

export default function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="border rounded-2xl overflow-hidden relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={
          product.images && product.images[0]
            ? product.images[0]
            : "https://via.placeholder.com/400x300"
        }
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-sm line-clamp-2">{product.title}</h4>
        <div className="mt-2 font-bold">${product.price}</div>
      </div>

      {hover && (
        <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4">
          <button className="bg-white px-4 py-2 rounded">Add to cart</button>
        </div>
      )}
    </div>
  );
}
