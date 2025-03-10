import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import FlightSearch from "./FlightSearch/FlightSearch";
import Signup from "./auth/signup/Signup";
import Login from "./auth/login/Login";
import VerifyCode from "./auth/verifycode/VerifyCode";
import ForgetPassword from "./auth/forgetpassword/ForgetPassword";
import ResetPassword from "./auth/resetpassword/ResetPassword";
import FlightListing from "./FlightFlow/FlightListing/FlightListing";
import FlightDetail from "./FlightFlow/FlightDetail/FlightDetail";
import BookingDetail from "./FlightFlow/BookingDetail/BookingDetail";
import BookingTicket from "./FlightFlow/BookingTicket/BookingTicket";
import FlightLayout from "./FlightLayout";
import Favorites from "./Favorites/Favorites";

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
					<Route path="flightlisting/flightdetail" element={<FlightDetail />} />
					<Route path="flightlisting/bookingdetail" element={<BookingDetail />} />
					<Route path="flightlisting/bookingticket" element={<BookingTicket />} />
					<Route path="favorites" element={<Favorites />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
