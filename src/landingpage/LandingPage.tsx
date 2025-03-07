import Flights from "./Flights/Flights";
import Footer from "../Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./Reviews/Reviews";

export default function LandingPage() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<Flights />
			<Reviews />
			<Footer />
		</div>
	);
}
