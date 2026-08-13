
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Globe } from "lucide-react";
import { getMovieDetails } from "../services/movieApi";
import Loading from "../components/Loading";
import ErrorState from "../components/ErrorState";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDetails();
  }, [id]);

  async function loadDetails() {
    try {
      setLoading(true);
      const data = await getMovieDetails(id);
      setMovie(data);
      setError(null);
    } catch (err) {
      setError("Could not load movie details.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loading />;
  if (error) return <ErrorState message={error} onRetry={loadDetails} />;
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/400x600/262626/999999?text=No+Image";

  const year = movie.release_date ? movie.release_date.split("-")[0] : "N/A";

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <button
        onClick={() => navigate("/")}
        aria-label="Back to movies"
        className="flex items-center gap-2 text-neutral-400 hover:text-white mb-6 transition-colors text-sm font-medium"
      >
        <ArrowLeft size={18} />
        <span>Back to movies</span>
      </button>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <img
          src={posterUrl}
          alt={`${movie.title} poster`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/400x600/262626/999999?text=No+Image";
          }}
          className="w-full max-w-xs mx-auto md:mx-0 md:w-72 rounded-xl shadow-2xl object-cover shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            {movie.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-neutral-400 text-xs sm:text-sm mb-5">
            <span>{year}</span>

            {movie.runtime > 0 && (
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {movie.runtime} min
              </span>
            )}

            {movie.original_language && (
              <span className="flex items-center gap-1">
                <Globe size={14} />
                {movie.original_language.toUpperCase()}
              </span>
            )}

            <span className="flex items-center gap-1 text-yellow-400 font-medium">
              <Star size={14} fill="currentColor" />
              {movie.vote_average?.toFixed(1)}
            </span>
          </div>

          {movie.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full border border-neutral-700"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <h2 className="text-base sm:text-lg font-semibold text-white mb-2">
            Overview
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            {movie.overview || "No overview available."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;