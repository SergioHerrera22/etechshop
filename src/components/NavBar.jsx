import { Search, ShoppingCart, Heart, Package } from "lucide-react";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between rounded-b-2xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-indigo-600">Etech</span>
        <span className="text-2xl font-bold text-gray-800">Shop</span>
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-xl mx-6">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Buscar productos..."
            className=" w-full border border-gray-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition">
          <Package size={20} />
          <span className="hidden md:inline">Productos</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition">
          <Heart size={20} />
          <span className="hidden md:inline">Favoritos</span>
        </button>
        <CartWidget />
      </div>
    </nav>
  );
}
