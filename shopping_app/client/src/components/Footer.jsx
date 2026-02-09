import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white/60 dark:bg-gray-900/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} BusTrack · Built with ♥</p>
      </div>
    </footer>
  );
}
