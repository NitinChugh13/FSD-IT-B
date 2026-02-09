import React from "react";

export default function Login(){
  return (
    <section className="py-20">
      <div className="max-w-md mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="card-glass p-6 space-y-4">
          <input placeholder="Email" className="w-full px-4 py-2 rounded bg-white/60 dark:bg-gray-800/60" />
          <input placeholder="Password" type="password" className="w-full px-4 py-2 rounded bg-white/60 dark:bg-gray-800/60" />
          <button className="btn-primary w-full">Login</button>
        </form>
      </div>
    </section>
  );
}

