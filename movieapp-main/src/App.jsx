// 📁 /src/App.jsx
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Favorites from "./components/Favorites";
import "./index.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchMovies = async () => {
    const key = import.meta.env.VITE_OMDB_API_KEY;
    if (!query) return;
    const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${query}`);
    const data = await res.json();
    if (data.Search) setMovies(data.Search);
  };

  const toggleFavorite = (movie) => {
    const exists = favorites.find((m) => m.imdbID === movie.imdbID);
    let updated;
    if (exists) {
      updated = favorites.filter((m) => m.imdbID !== movie.imdbID);
    } else {
      updated = [...favorites, movie];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-6">🎬 Movie Search App</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchMovies} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          />
        ))}
      </div>
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;

