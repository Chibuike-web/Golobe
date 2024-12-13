import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import FlightSearch from "./flightsearch/FlightSearch";

function App() {
	return (
		<Router>
			<Routes>
				{/* Route for the landing page */}
				<Route path="/" element={<LandingPage />} />
				{/* Route for the flight search page */}
				<Route path="/flightsearch" element={<FlightSearch />} />
			</Routes>
		</Router>
	);
}

export default App;
