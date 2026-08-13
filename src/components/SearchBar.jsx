
import { Search, X } from "lucide-react";

function SearchBar({ query, onQueryChange, onSearch, onClear, onKeyDown }) {
  return (
    <div className="flex items-center gap-2 w-full max-w-xl mx-auto bg-neutral-900 border border-neutral-800 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg focus-within:border-red-600 transition-colors">
      <button
        onClick={onSearch}
        aria-label="Search"
        className="text-neutral-400 hover:text-red-500 transition-colors shrink-0"
      >
        <Search size={20} />
      </button>

      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="flex-1 min-w-0 bg-transparent text-white placeholder-neutral-500 text-sm sm:text-base outline-none"
      />

      {query && (
        <button
          onClick={onClear}
          aria-label="Clear search"
          className="text-neutral-500 hover:text-white transition-colors shrink-0"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;