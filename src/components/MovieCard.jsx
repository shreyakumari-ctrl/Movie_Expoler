
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(movie.id);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/400x600/262626/999999?text=No+Image";

  const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") navigate(`/movie/${movie.id}`);
      }}
      className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 shadow-md hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-1 hover:border-neutral-700 transition-all duration-300 cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          src={posterUrl}
          alt={`${movie.title} poster`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/400x600/262626/999999?text=No+Image";
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
          <Star size={12} fill="currentColor" />
          <span>{movie.vote_average?.toFixed(1)}</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(movie);
          }}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            favorite ? "bg-red-600" : "bg-black/60 hover:bg-red-600"
          }`}
        >
          <Heart size={16} className="text-white" fill={favorite ? "white" : "none"} />
        </button>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-white font-semibold text-sm sm:text-base truncate">
          {movie.title}
        </h3>
        <p className="text-neutral-500 text-xs sm:text-sm mt-1">{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;