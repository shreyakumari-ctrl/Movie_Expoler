
import { useFavorites } from "../hooks/useFavorites";
import MovieGrid from "../components/MovieGrid";
import EmptyState from "../components/EmptyState";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center tracking-tight">
        Your Favorites
      </h1>
      <p className="text-neutral-500 text-sm text-center mb-8">
        {favorites.length > 0
          ? `${favorites.length} movie${favorites.length > 1 ? "s" : ""} saved`
          : "Movies you love, all in one place"}
      </p>

      {favorites.length === 0 ? (
        <EmptyState
          message="You haven't added any favorites yet."
          subMessage="Movies you favorite will show up here."
          actionLabel="Browse Movies"
          actionTo="/"
        />
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </div>
  );
}

export default Favorites;