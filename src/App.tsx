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
import Layout from "./Layout";
import Favorites from "./Favorites/Favorites";
import HotelSearch from "./HotelSearch/HotelSearch";
import HotelListing from "./HotelFlow/HotelListing/HotelListing";
import HotelDetail from "./HotelFlow/HotelDetail/HotelDetail";

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
				<Route path="hotelsearch" element={<HotelSearch />} />

				{/* routes under Layout */}
				<Route path="/" element={<Layout />}>
					<Route path="flightlisting" element={<FlightListing />} />
					<Route path="flightlisting/flightdetail" element={<FlightDetail />} />
					<Route path="flightlisting/bookingdetail" element={<BookingDetail />} />
					<Route path="flightlisting/bookingticket" element={<BookingTicket />} />
					<Route path="hotellisting" element={<HotelListing />} />
					<Route path="hotellisting/hoteldetail" element={<HotelDetail />} />
					<Route path="favorites" element={<Favorites />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
