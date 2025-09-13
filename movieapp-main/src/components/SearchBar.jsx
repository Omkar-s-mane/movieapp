import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
      className="w-full max-w-3xl mx-auto flex items-center justify-center gap-4 p-4 bg-[#141414] rounded-md"
    >
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="flex-1 bg-[#333] text-white border border-transparent focus:border-red-600 focus:ring-2 focus:ring-red-600 px-4 py-2 rounded-md"
      />
      <Button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2 rounded-md"
      >
        Search
      </Button>
    </form>
  );
}
