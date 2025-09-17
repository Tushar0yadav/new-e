"use client";

import ExplorebyColors from "../components/ExplorebyColors";

import Testimonial from "../components/Testimonial";
import Head from "next/head";
import BlogFooter from "../components/BlogFooter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import ProductGrid from "../components/ProductGrid";
import { fetchCategories, fetchProducts } from "../lib/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filters
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const [page, setPage] = useState(0);
  const limit = 20;

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const [cats, prods] = await Promise.all([
          fetchCategories(),
          fetchProducts(page * limit, limit),
        ]);
        setCategories(cats);
        setProducts(prods);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [page]);

  // derived filtered products
  const filtered = products.filter((p) => {
    const inCategory = selectedCategory
      ? p.category &&
        (p.category.id === selectedCategory ||
          p.category.name === selectedCategory)
      : true;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q));
    return inCategory && matchesQuery;
  });

  return (
    <div>
      <Head>
        <title>E‑Commerce – Landing</title>
      </Head>

      <Header onSearch={setQuery} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        <section className="mt-12">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="mt-6">
            {loading && (
              <div className="py-10 text-center">Loading products...</div>
            )}
            {error && (
              <div className="py-10 text-center text-red-600">{error}</div>
            )}
            {!loading && !error && <ProductGrid products={filtered} />}

            {/* simple pagination controls */}
            <div className="flex items-center justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-100 rounded"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
              >
                Prev
              </button>
              <div>Page {page + 1}</div>
              <button
                className="px-4 py-2 bg-gray-100 rounded"
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <ExplorebyColors />
          <br />
          <br />
          <Testimonial />
          {/* <ContactForm /> */}
        </section>
      </main>
      <BlogFooter />

      {/* <Footer /> */}
    </div>
  );
}
