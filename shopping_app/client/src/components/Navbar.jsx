import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="bg-fkBlue shadow-navbar fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-10">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col -mt-1">
          <h1 className="text-white text-xl font-bold">BusTrack</h1>
          <span className="text-yellow-300 text-xs -mt-1 font-medium">
            Explore Plus ★
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 rounded-md bg-white outline-none shadow-sm"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-white text-lg">

          {/* Login */}
          <NavLink to="/login" className="hover:text-yellow-300 flex items-center gap-1">
            <FaUserCircle size={22} />
            <span className="text-sm font-medium">Login</span>
          </NavLink>

          {/* Cart */}
          <NavLink to="/cart" className="relative hover:text-yellow-300">
            <FaShoppingCart size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-yellow-300 text-black text-xs px-2 py-0.5 rounded-full">
                {cart.reduce((sum, p) => sum + p.qty, 0)}
              </span>
            )}
          </NavLink>

        </div>
      </div>
    </header>
  );
}
