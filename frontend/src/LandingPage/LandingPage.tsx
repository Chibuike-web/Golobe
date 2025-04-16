import Flights from "./Flights/Flights";
import HeroSection from "./HeroSection/HeroSection";
import Reviews from "./Reviews/Reviews";
import Footer from "../Footer/Footer";
import Navbar from "./Navbar/Navbar";
import styles from "./HeroSection/HeroSection.module.css";
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
