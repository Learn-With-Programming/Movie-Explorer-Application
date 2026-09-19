const MovieCard = ({ show, onSelectShow }) => {
  const posterUrl =
    show.image?.medium ||
    "https://placehold.co/210x295/1f2937/ffffff?text=No+Image";

  const releaseYear = show.premiered ? show.premiered.split("-")[0] : "N/A";

  const rating = show.rating?.average ? show.rating.average : "N/A";

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between hover:scale-105 transition duration-200">
      {/* Poster Image */}
      <img
        src={posterUrl}
        alt={show.name}
        className="w-full h-72 object-cover"
      />

      {/* Card Body */}
      <div className="p-4 flex flex-col grow justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">
            {show.name}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>⭐ {rating}</span>
            <span>📅 {releaseYear}</span>
          </div>
        </div>

        {/* See Details Button */}
        <button
          onClick={() => onSelectShow(show)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
