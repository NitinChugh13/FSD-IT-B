import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-card hover:shadow-lg transition p-4 cursor-pointer"
      whileHover={{ scale: 1.03 }}
    >
      <Link to={`/product/${product.id}`}>
        
        {/* IMAGE */}
        <div className="w-full h-40 rounded-lg overflow-hidden">
          <img
            src={product.image}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* TITLE */}
        <h3 className="mt-3 text-sm font-medium line-clamp-2">
          {product.title}
        </h3>

        {/* PRICE */}
        <p className="text-fkBlue font-semibold text-lg mt-1">
          ₹{product.price}
        </p>

        {/* RATING */}
        <p className="text-gray-500 text-sm flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {product.rating}
        </p>
      </Link>
    </motion.div>
  );
}
