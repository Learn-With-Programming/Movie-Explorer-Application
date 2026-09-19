import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieListing from "./pages/MovieListing";
import MovieModal from "./components/MovieModal";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [selectedShow, setSelectedShow] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleCloseModal = () => {
    setSelectedShow(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main className="grow">
        {currentPage === "home" ? (
          <Home onNavigate={handleNavigate} />
        ) : (
          <MovieListing onSelectShow={handleSelectShow} />
        )}
      </main>

      <Footer />
      <MovieModal show={selectedShow} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
