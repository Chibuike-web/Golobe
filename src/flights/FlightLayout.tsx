import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "../Footer/Footer";

const FlightLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet /> {/* This will render child routes */}
			<Footer />
		</div>
	);
};

export default FlightLayout;
