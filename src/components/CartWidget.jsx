import { ShoppingCart } from "lucide-react";

export default function CartWidget() {
  return (
    <button className="relative flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition">
      <ShoppingCart size={20} />
      <span className="hidden md:inline">Carrito</span>
      {/* Badge */}
      <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        2
      </span>
    </button>
  );
}
