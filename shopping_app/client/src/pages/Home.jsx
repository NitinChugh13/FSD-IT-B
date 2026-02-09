import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import hero1 from "../assets/banner1.jpg";
import hero2 from "../assets/banner2.jpg";
import hero3 from "../assets/banner3.jpg";

export default function Home() {
  const { addToCart } = useCart();

  const heroBanners = [hero1, hero2, hero3];

  return (
    <>
      {/* 🟦 HERO BANNER SLIDER */}
      <section className="max-w-7xl mx-auto mt-4 px-4">
        <div className="rounded-xl overflow-hidden shadow-card">
          <div className="w-full h-[270px] relative">
            <motion.img
              key={hero1}
              src={hero1}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </section>

      {/* 🟦 CATEGORY ICONS ROW */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
        {[
          { name: "Electronics", img: "https://img.icons8.com/fluency/96/laptop.png" },
          { name: "Appliances", img: "https://img.icons8.com/fluency/96/washing-machine.png" },
          { name: "Furniture", img: "https://img.icons8.com/fluency/96/armchair.png" },
          { name: "Travel", img: "https://img.icons8.com/fluency/96/suitcase.png" },
          { name: "Beauty", img: "https://img.icons8.com/fluency/96/lipstick.png" },
          { name: "Grocery", img: "https://img.icons8.com/fluency/96/grocery-bag.png" },
          { name: "Mobiles", img: "https://img.icons8.com/fluency/96/iphone.png" },
          { name: "Fashion", img: "https://img.icons8.com/fluency/96/t-shirt.png" },
        ].map((cat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={cat.img} className="w-16 h-16" />
            <p className="text-sm font-medium mt-2">{cat.name}</p>
          </div>
        ))}
      </section>

      {/* 🟦 DEALS OF THE DAY */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-card p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Deals of the Day</h2>
            <button className="px-4 py-1 bg-fkBlue text-white rounded-md font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {products.slice(0, 5).map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold">{p.title}</p>
                <p className="text-sm text-green-600 font-medium">₹{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 TRENDING OFFERS (Horizontal slider look) */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-card p-4">
          <h2 className="text-xl font-semibold mb-4">Trending Offers</h2>

          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {products.map((p) => (
              <motion.div
                key={p.id}
                className="min-w-[180px] bg-white p-3 rounded-lg shadow-card hover:scale-105 transition"
                whileHover={{ y: -5 }}
              >
                <img
                  src={p.image}
                  className="w-full h-32 object-cover rounded-md"
                />
                <p className="mt-2 text-sm font-semibold">{p.title}</p>
                <p className="text-sm text-fkBlue">₹{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🟦 TOP PICKS GRID */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-card p-4">
          <h2 className="text-xl font-semibold mb-4">Top Picks For You</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((p) => (
              <motion.div
                key={p.id}
                className="bg-white rounded-lg p-4 shadow-card hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={p.image}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-2 font-medium">{p.title}</h3>
                <p className="text-fkBlue font-medium">₹{p.price}</p>

                <button
                  onClick={() => addToCart(p)}
                  className="mt-2 px-3 py-1 text-white bg-fkBlue rounded-md"
                >
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
