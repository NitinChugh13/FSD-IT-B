import React, { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const cats = ["All", ...new Set(productsData.map(p=>p.category))];

  const filtered = productsData.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) &&
    (cat === "All" || p.category === cat)
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-indigo-500">Products</h2>
        <div className="flex items-center gap-4">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..." className="px-4 py-2 rounded-lg border bg-white/70 dark:bg-gray-800/60" />
          <select value={cat} onChange={e=>setCat(e.target.value)} className="px-3 py-2 rounded-lg border bg-white/70 dark:bg-gray-800/60">
            {cats.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
      </div>
    </section>
  );
}
