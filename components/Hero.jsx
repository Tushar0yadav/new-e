import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchProducts } from "../lib/api"; // adjust path if needed

export default function Hero() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(0, 6); // fetch 6 products for hero section
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    loadProducts();
  }, []);

  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Big Hero Product */}
        {products[0] && (
          <motion.div
            className="lg:col-span-2 rounded-2xl overflow-hidden relative bg-slate-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={products[0].images?.[0]}
              alt={products[0].title}
              className="w-full h-96 object-cover md:h-[420px]"
            />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center bg-black/30">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow">
                {products[0].title}
              </h1>
              <p className="mt-4 text-white max-w-md line-clamp-2">
                {products[0].description}
              </p>
              <button className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full">
                View Collections
              </button>
            </div>
          </motion.div>
        )}

        {/* Side Cards */}
        <div className="flex flex-col gap-6">
          {products.slice(1, 3).map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white shadow"
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 text-lg font-medium">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Static CTA card */}
        <div className="rounded-2xl p-6 flex flex-col justify-center bg-gray-50 ">
          <h3 className="text-2xl font-bold">Casual Inspirations</h3>
          <p className="mt-4 text-sm text-slate-600 ">
            Our favorite combinations for casual outfit that can inspire you to
            apply on your daily activity.
          </p>
          <button className="mt-7  px-4 py-2 border rounded-3xl">
            Browse Inspirations
          </button>
        </div>
        {products.slice(3, 5).map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden bg-white shadow"
          >
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">{item.title}</div>
          </div>
        ))}

        {/* Static CTA card
        <div className="rounded-2xl p-6 flex flex-col justify-center bg-gray-50">
          <h3 className="text-2xl font-bold">Casual Inspirations</h3>
          <p className="mt-2 text-sm text-slate-600">
            Our favorite combinations for casual outfit that can inspire you to
            apply on your daily activity.
          </p>
          <button className="mt-4 px-4 py-2 border rounded">
            Browse Inspirations
          </button>
        </div> */}
      </div>
    </section>
  );
}
