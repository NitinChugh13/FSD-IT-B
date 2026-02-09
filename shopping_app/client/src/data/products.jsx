import React, { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";

export default function Products() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("none");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  // FILTER LOGIC
  let products = productsData.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  if (category !== "All") {
    products = products.filter((p) => p.category === category);
  }

  // SORT LOGIC
  if (sort === "low-high") products.sort((a, b) => a.price - b.price);
  if (sort === "high-low") products.sort((a, b) => b.price - a.price);
  if (sort === "rating") products.sort((a, b) => b.rating - a.rating);

  return (
    <>
      {/* 🟦 STICKY FILTER BAR */}
      <div className="sticky top-[60px] bg-white z-40 shadow-navbar py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-center justify-between">
          
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-fkBlue outline-none"
          />

          {/* CATEGORY */}
          <select
            className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-fkBlue"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          {/* SORT */}
          <select
            className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-fkBlue"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
          </select>
        </div>
      </div>

      {/* 🟦 PRODUCT GRID SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Products ({products.length})
        </h1>

        {products.length === 0 && (
          <div className="py-20 text-center text-gray-500 text-lg">
            No products found 😢
          </div>
        )}

        {/* GRID */}
        <motion.div 
          layout 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
