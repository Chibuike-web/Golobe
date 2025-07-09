import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landing-page/LandingPage";
import FlightSearch from "./flight-search/FlightSearch";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import VerifyCode from "./auth/VerifyCode";
import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import FlightListing from "./flight-flow/FlightListing";
import FlightDetail from "./flight-flow/flight-detail/FlightDetail";
import FlightBookingDetail from "./flight-flow/booking-detail/BookingDetail";
import FlightBookingTicket from "./flight-flow/booking-ticket/BookingTicket";
import Layout from "./Layout";
import HotelSearch from "./hotel-search/HotelSearch";
import HotelListing from "./hotel-flow/HotelListing";
import HotelDetail from "./hotel-flow/hotel-detail/HotelDetail";
import HotelBookingDetail from "./hotel-flow/booking-detail/BookingDetail";
import HotelBookingTicket from "./hotel-flow/booking-ticket/BookingTicket";
import Account from "./account-flow/Account";
import Favorites from "./favorites/Favorites";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="signup" element={<Signup />} />
				<Route path="login" element={<Login />} />
				<Route path="forgetpassword" element={<ForgetPassword />} />
				<Route path="verify-code" element={<VerifyCode />} />
				<Route path="resetpassword" element={<ResetPassword />} />

				<Route element={<Layout />}>
					<Route path="/flightsearch" element={<FlightSearch />} />
					<Route path="/hotelsearch" element={<HotelSearch />} />
					<Route path="/flightlisting" element={<FlightListing />} />
					<Route path="/flightlisting/flightdetail/:id" element={<FlightDetail />} />
					<Route path="/flightlisting/bookingdetail/:id" element={<FlightBookingDetail />} />
					<Route path="/flightlisting/bookingticket/:id" element={<FlightBookingTicket />} />
					<Route path="/hotellisting" element={<HotelListing />} />
					<Route path="/hotellisting/hoteldetail/:id" element={<HotelDetail />} />
					<Route path="/hotellisting/bookingdetail/:id" element={<HotelBookingDetail />} />
					<Route path="/hotellisting/bookingticket/:id" element={<HotelBookingTicket />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/account" element={<Account />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
