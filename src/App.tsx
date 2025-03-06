import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import FlightSearch from "./flightsearch/FlightSearch";
import Signup from "./auth/signup/Signup";
import Login from "./auth/login/Login";
import VerifyCode from "./auth/verifycode/VerifyCode";
import ForgetPassword from "./auth/forgetpassword/ForgetPassword";
import ResetPassword from "./auth/resetpassword/ResetPassword";
import FlightListing from "./flightlisting/FlightListing";
import FlightDetail from "./flightlisting/FlightDetail/FlightDetail";
import BookingDetail from "./flightlisting/BookingDetail/BookingDetail";
import BookingTicket from "./flightlisting/BookingTicket/BookingTicket";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/flightsearch" element={<FlightSearch />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgetpassword" element={<ForgetPassword />} />
				<Route path="/verifycode" element={<VerifyCode />} />
				<Route path="/resetpassword" element={<ResetPassword />} />
				<Route path="/flightlisting" element={<FlightListing />} />
				<Route path="/flightdetail" element={<FlightDetail />} />
				<Route path="/bookingdetail" element={<BookingDetail />} />
				<Route path="/bookingticket" element={<BookingTicket />} />
			</Routes>
		</Router>
	);
}

export default App;
