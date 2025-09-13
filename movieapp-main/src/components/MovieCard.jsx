import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MovieCard({ movie, toggleFavorite, isFavorite }) {
  return (
    <Card className="bg-[#141414] rounded-lg overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300">
      <div className="relative">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full h-72 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <h2 className="text-white font-semibold text-lg">{movie.Title}</h2>
          <p className="text-gray-300 text-sm">{movie.Year}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <Button
          variant={isFavorite ? "destructive" : "default"}
          onClick={() => toggleFavorite(movie)}
          className="w-full"
        >
          {isFavorite ? "Remove Favorite" : "Add to Favorites"}
        </Button>
      </CardContent>
    </Card>
  );
}
