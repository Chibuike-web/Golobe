import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import FooterSection from "./footer/Footer";

const FlightLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<FooterSection />
		</>
	);
};

export default FlightLayout;
