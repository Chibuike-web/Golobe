import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import FlightSearch from "./flightsearch/FlightSearch";
import Signup from "./auth/signup/Signup";
import Login from "./auth/login/Login";
import VerifyPassword from "./auth/verifypassword/VerifyPassword";
import ForgetPassword from "./auth/forgetpassword/ForgetPassword";
import ResetPassword from "./auth/resetpassword/ResetPassword";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/flightsearch" element={<FlightSearch />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgetpassword" element={<ForgetPassword />} />
				<Route path="/verifypassword" element={<VerifyPassword />} />
				<Route path="/resetpassword" element={<ResetPassword />} />
			</Routes>
		</Router>
	);
}

export default App;
