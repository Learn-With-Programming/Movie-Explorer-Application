import { IoCloseOutline } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { CgCalendarDates } from "react-icons/cg";

const MovieModal = ({ show, onClose }) => {
  if (!show) return null;

  const backdropUrl =
    show.image?.original ||
    show.image?.medium ||
    "https://placehold.co/600x400/1f2937/ffffff?text=No+Image+Available";
  const releaseDate = show.premiered || "";
  const rating = show.rating?.average ?? "";
  const genres = show.genres?.join(", ") || "";

  const cleanSummary = show.summary
    ? new DOMParser().parseFromString(show.summary, "text/html").body
        .textContent
    : " No summary available for this show.";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 text-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon Button (✕) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-900 bg-opacity-70 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg transition z-10"
        >
          <IoCloseOutline />
        </button>

        {/* Modal Backdrop / Poster Header */}
        <div className="w-full h-64 md:h-80 overflow-hidden bg-black flex items-center justify-center">
          <img
            src={backdropUrl}
            alt={show.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{show.name}</h2>

          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
            <span>
              <FcRating /> Rating:{" "}
              <strong className="text-white">{rating}</strong>
            </span>
            <span>
              <CgCalendarDates />
              Release: <strong className="text-white">{releaseDate}</strong>
            </span>
            <span>
              Genre: <strong className="text-white">{genres}</strong>
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-gray-200">
              Overview:
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {cleanSummary}
            </p>
          </div>

          {/* Bottom Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-medium transition"
            >
              <IoCloseOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
