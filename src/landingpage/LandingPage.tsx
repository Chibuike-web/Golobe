import Flights from "./Flights/Flights";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./Reviews/Reviews";
import Footer from "../Footer/Footer";

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
