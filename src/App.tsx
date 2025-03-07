import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPage";
import FlightSearch from "./flightsearch/FlightSearch";
import Signup from "./auth/signup/Signup";
import Login from "./auth/login/Login";
import VerifyCode from "./auth/verifycode/VerifyCode";
import ForgetPassword from "./auth/forgetpassword/ForgetPassword";
import ResetPassword from "./auth/resetpassword/ResetPassword";
import FlightListing from "./flights/FlightListing/FlightListing";
import FlightDetail from "./flights/FlightDetail/FlightDetail";
import BookingDetail from "./flights/BookingDetail/BookingDetail";
import BookingTicket from "./flights/BookingTicket/BookingTicket";
import FlightLayout from "./flights/FlightLayout";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="signup" element={<Signup />} />
				<Route path="login" element={<Login />} />
				<Route path="forgetpassword" element={<ForgetPassword />} />
				<Route path="verifycode" element={<VerifyCode />} />
				<Route path="resetpassword" element={<ResetPassword />} />
				<Route path="flightsearch" element={<FlightSearch />} />
				{/* Flight-related routes under FlightLayout */}
				<Route path="/" element={<FlightLayout />}>
					<Route path="flightlisting" element={<FlightListing />} />
					<Route path="flightdetail" element={<FlightDetail />} />
					<Route path="bookingdetail" element={<BookingDetail />} />
					<Route path="bookingticket" element={<BookingTicket />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
