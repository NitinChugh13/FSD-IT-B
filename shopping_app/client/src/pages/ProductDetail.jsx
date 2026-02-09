import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <div className="py-20 text-center">Product not found</div>;

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-2xl" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-500 my-2">{product.category}</p>
          <div className="text-2xl font-bold text-indigo-600 my-4">₹{product.price}</div>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{product.desc}</p>

          <div className="flex items-center gap-4">
            <button onClick={() => addToCart(product)} className="btn-primary">Add to cart</button>
            <Link to="/cart" className="px-5 py-2 rounded-full border border-indigo-500 text-indigo-500">Go to cart</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
