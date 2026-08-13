
import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
  return (
    <main className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 max-w-7xl mx-auto">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
}

export default MovieGrid;