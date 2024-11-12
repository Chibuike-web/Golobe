import "./App.css";
import Flights from "./components/Flights/Flights";
import FooterSection from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Reviews from "./components/Reviews/Reviews";
function App() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<Flights />
			<Reviews />
			<FooterSection />
		</div>
	);
}

export default App;
