import { HiArrowRight } from "react-icons/hi";

const HeroBanner = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-gray-950 text-white py-24 px-6">
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Explore & Discover Your <br className="hidden sm:inline" />
          <span className="bg-linear-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Favorite Shows
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Browse top-rated TV shows, search for your favorite titles, and dive
          into detailed information with a single click.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => onNavigate("movies")}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white bg-red-600 rounded-full overflow-hidden shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-red-600/30 active:scale-95 transition-all duration-200"
          >
            <span className="flex items-center gap-2">
              Explore Now
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                <HiArrowRight className="w-5 h-5 ml-2" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
