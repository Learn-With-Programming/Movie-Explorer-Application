import { useState, useEffect } from "react";
import { fetchAllShows, searchShows } from "../services/api";
import MovieCard from "../components/MovieCard";

const MovieListing = ({ onSelectShow }) => {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialShows = async () => {
      setLoading(true);
      const data = await fetchAllShows();
      setShows(data);
      setLoading(false);
    };

    loadInitialShows();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    const results = await searchShows(searchQuery);
    setShows(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-medium transition"
            >
              Search
            </button>
          </div>
        </form>

        {/* Loading Indicator */}
        {loading ? (
          <div className="text-center py-10 text-gray-400">
            Loading movies...
          </div>
        ) : (
          /* Movie Grid Layout */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shows.length > 0 ? (
              shows.map((show) => (
                <MovieCard
                  key={show.id}
                  show={show}
                  onSelectShow={onSelectShow}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400">
                No movies found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieListing;
