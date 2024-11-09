import "./App.css";
import Flights from "./components/Flights/Flights";
import HeroSection from "./components/HeroSection/HeroSection";
import Reviews from "./components/Reviews/Reviews";
function App() {
	return (
		<div className="flex flex-col p-[1.875rem] items-center mx-auto w-full max-w-[90rem]">
			<HeroSection />
			<Flights />
			<Reviews />
		</div>
	);
}

export default App;
