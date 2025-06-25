import Flights from "./Flights/Flights";
import HeroSection from "./hero-section/HeroSection";
import Reviews from "./reviews/Reviews";
import Footer from "../footer/Footer";
import Navbar from "./navbar/Navbar";
import styles from "./hero-section/HeroSection.module.css";
export default function LandingPage() {
	return (
		<>
			<div className={styles.herosection} />
			<Navbar />
			<HeroSection />
			<Flights />
			<Reviews />
			<Footer />
		</>
	);
}
