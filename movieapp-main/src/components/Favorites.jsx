export default function Favorites({ favorites, toggleFavorite }) {
  if (!favorites.length) return null;
  return (
    <div className="mt-12 px-4">
      <h2 className="text-3xl font-semibold text-white mb-6">❤️ Your Favorites</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {favorites.map((movie) => (
          <div
            key={movie.imdbID}
            className="relative group bg-zinc-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="h-60 w-full object-cover transition-opacity group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <h3 className="text-lg font-bold text-white mb-2">{movie.Title}</h3>
              <button
                className="text-red-400 text-sm hover:underline"
                onClick={() => toggleFavorite(movie)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}