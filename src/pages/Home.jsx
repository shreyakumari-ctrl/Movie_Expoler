
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import Loading from "../components/Loading";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import { getPopularMovies, searchMovies } from "../services/movieApi";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");

  useEffect(() => {
    loadPopularMovies();
  }, []);

  async function loadPopularMovies() {
    try {
      setLoading(true);
      const data = await getPopularMovies();
      setMovies(data);
      setError(null);
      setSearchedTerm("");
    } catch (err) {
      setError("Something went wrong while loading movies.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch() {
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") return;

    try {
      setLoading(true);
      const data = await searchMovies(trimmedQuery);
      setMovies(data);
      setError(null);
      setSearchedTerm(trimmedQuery);
    } catch (err) {
      setError("Something went wrong while searching movies.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleClear() {
    setQuery("");
    loadPopularMovies();
  }

  function handleRetry() {
    if (searchedTerm) {
      handleSearch();
    } else {
      loadPopularMovies();
    }
  }

  return (
    <>
      <header className="text-center px-4 pt-10 pb-8 sm:pt-14 sm:pb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
          Movie Explorer
       </h1>
       <p className="text-neutral-400 text-sm sm:text-base mb-6 sm:mb-8">
          Discover movies you'll love
       </p>

       <SearchBar
         query={query}
         onQueryChange={setQuery}
          onSearch={handleSearch}
         onClear={handleClear}
         onKeyDown={handleKeyDown}
        />
     </header>

      {searchedTerm && !loading && !error && (
        <p className="text-center text-neutral-400 mb-4">
          Showing results for "{searchedTerm}"
        </p>
      )}

      {loading && <Loading />}

      {error && !loading && (
        <ErrorState message={error} onRetry={handleRetry} />
      )}

      {!loading && !error && movies.length === 0 && (
        <EmptyState
          message="No movies found."
          subMessage={`Try a different search term${searchedTerm ? ` than "${searchedTerm}"` : ""}.`}
          actionLabel={searchedTerm ? "Clear Search" : undefined}
          onAction={searchedTerm ? handleClear : undefined}
        />
     )}

      {!loading && !error && movies.length > 0 && (
        <MovieGrid movies={movies} />
      )}
    </>
  );
}

export default Home;