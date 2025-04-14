import Flights from "./Flights/Flights";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./Reviews/Reviews";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar/Navbar";
export default function LandingPage() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<Flights />
			<Reviews />
			<Footer />
		</>
	);
}
