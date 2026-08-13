import { useState, useEffect } from "react";

const STORAGE_KEY = "movie_explorer_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  function saveFavorites(updatedFavorites) {
    setFavorites(updatedFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
  }

  function addFavorite(movie) {
    const updated = [...favorites, movie];
    saveFavorites(updated);
  }

  function removeFavorite(movieId) {
    const updated = favorites.filter((m) => m.id !== movieId);
    saveFavorites(updated);
  }

  function isFavorite(movieId) {
    return favorites.some((m) => m.id === movieId);
  }

  function toggleFavorite(movie) {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite };
}