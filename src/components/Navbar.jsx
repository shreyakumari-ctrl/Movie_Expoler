
import { Film, Home, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

function Navbar() {
  const { favorites } = useFavorites();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1.5 text-sm font-medium transition-colors ${
      isActive ? "text-red-500" : "text-neutral-300 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 px-4 sm:px-6 py-3 flex items-center justify-between">
      <NavLink
        to="/"
        className="flex items-center gap-2 text-white font-bold text-lg shrink-0"
      >
        <Film size={22} className="text-red-500" />
        <span>Movie Explorer</span>
      </NavLink>

      <div className="flex items-center gap-5 sm:gap-6">
        <NavLink to="/" className={linkClass} end>
          <Home size={18} />
          <span className="hidden sm:inline">Home</span>
        </NavLink>

        <NavLink to="/favorites" className={linkClass}>
          <Heart size={18} />
          <span className="hidden sm:inline">Favorites</span>
          {favorites.length > 0 && (
            <span className="bg-red-600 text-white text-xs rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
              {favorites.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;