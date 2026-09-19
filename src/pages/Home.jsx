import HeroBanner from "../components/HeroBanner";

const Home = ({ onNavigate }) => {
  return (
    <main className="flex-1">
      <HeroBanner onNavigate={onNavigate} />
    </main>
  );
};

export default Home;
