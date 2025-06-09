import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import FlightSearch from "./FlightSearch/FlightSearch";
import Signup from "./auth/signup/Signup";
import Login from "./auth/login/Login";
import VerifyCode from "./auth/verifycode/VerifyCode";
import ForgetPassword from "./auth/forgetpassword/ForgetPassword";
import ResetPassword from "./auth/resetpassword/ResetPassword";
import FlightListing from "./FlightFlow/FlightListing";
import FlightDetail from "./FlightFlow/FlightDetail/FlightDetail";
import FlightBookingDetail from "./FlightFlow/BookingDetail/BookingDetail";
import FlightBookingTicket from "./FlightFlow/BookingTicket/BookingTicket";
import Layout from "./Layout";
import Favorites from "./Favorites/Favorites";
import HotelSearch from "./HotelSearch/HotelSearch";
import HotelListing from "./HotelFlow/HotelListing";
import HotelDetail from "./HotelFlow/HotelDetail/HotelDetail";
import HotelBookingDetail from "./HotelFlow/BookingDetail/BookingDetail";
import HotelBookingTicket from "./HotelFlow/BookingTicket/BookingTicket";
import Account from "./AccountFlow/Account";

function App() {
	return (
		<Router basename="/Golobe">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="signup" element={<Signup />} />
				<Route path="login" element={<Login />} />
				<Route path="forgetpassword" element={<ForgetPassword />} />
				<Route path="verifycode" element={<VerifyCode />} />
				<Route path="resetpassword" element={<ResetPassword />} />

				{/* routes under Layout */}
				<Route path="/" element={<Layout />}>
					<Route path="flightsearch" element={<FlightSearch />} />
					<Route path="hotelsearch" element={<HotelSearch />} />
					<Route path="flightlisting" element={<FlightListing />} />
					<Route path="flightdetail/:id" element={<FlightDetail />} />
					<Route path="bookingdetail/:id" element={<FlightBookingDetail />} />
					<Route path="flightlisting/bookingticket" element={<FlightBookingTicket />} />
					<Route path="hotellisting" element={<HotelListing />} />
					<Route path="hotellisting/hoteldetail" element={<HotelDetail />} />
					<Route path="hotellisting/bookingdetail" element={<HotelBookingDetail />} />
					<Route path="hotellisting/bookingticket" element={<HotelBookingTicket />} />
					<Route path="favorites" element={<Favorites />} />
					<Route path="account" element={<Account />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
