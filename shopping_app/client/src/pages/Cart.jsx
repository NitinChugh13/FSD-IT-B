import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart(){
  const { cart, updateQty, removeFromCart, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link to="/products" className="btn-primary">Shop products</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 card-glass p-4">
              <img src={item.image} alt="" className="w-28 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">₹{item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">-</button>
                  <span className="px-3 py-1 rounded border">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">+</button>
                </div>
              </div>
              <div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <aside className="card-glass p-6">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between text-gray-600 mb-2">Subtotal <span>₹{total.toFixed(2)}</span></div>
          <div className="flex justify-between text-gray-600 mb-4">Shipping <span>₹50</span></div>
          <div className="border-t pt-4 flex justify-between font-bold text-lg">Total <span>₹{(total + 50).toFixed(2)}</span></div>

          <div className="mt-6">
            <button className="btn-primary w-full">Proceed to Payment</button>
            <button onClick={clearCart} className="mt-3 w-full px-4 py-2 rounded bg-red-50 text-red-600">Clear Cart</button>
          </div>
        </aside>
      </div>
    </section>
  );
}

