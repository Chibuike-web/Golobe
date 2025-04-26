import GolobeLogo from "../assets/FlightSearch/LogoWhiteBackground.svg";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AirplaneIcon, BedIcon } from "../assets/Icons";
import styles from "./Navbar.module.css";

export default function NavbarGuest() {
	const location = useLocation();

	const isFlightActive =
		location.pathname.startsWith("/flightsearch") || location.pathname.startsWith("/flightlisting");

	return (
		<header className="w-full bg-white sticky z-[100] top-0" role="banner">
			<nav
				className="mx-auto max-w-[77rem] py-6 flex items-center justify-between h-max lg:px-4 md:py-4"
				aria-label="Main Navigation"
			>
				<ul className="flex gap-8 md:hidden">
					<li role="tab">
						<NavLink
							to={"flightsearch"}
							className={() =>
								`${isFlightActive ? styles.flights : ""} relative flex items-center gap-2`
							}
						>
							<AirplaneIcon color="#112211" />
							<span className="text-sm font-semibold text-blackishGreen">Find Flight</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/hotelsearch"
							className={({ isActive }) =>
								`${isActive ? styles.flights : ""} relative flex items-center gap-2`
							}
						>
							<BedIcon color="#112211" />
							<span className="text-sm font-semibold text-blackishGreen">Find Stays</span>
						</NavLink>
					</li>
				</ul>
				<figure>
					<img src={GolobeLogo} alt="Golobe Travel Logo" className="w-full max-w-[6rem]" />
				</figure>
				<div className="flex gap-[1.875rem] items-center md:hidden">
					<Link to="/login" className="text-blackishGreen text-sm font-semibold">
						Login
					</Link>
					<Link
						to="/signup"
						className="text-sm font-semibold bg-blackishGreen text-white px-[1.5rem] py-[0.75rem] rounded-[0.5rem]"
					>
						Sign up
					</Link>
				</div>
			</nav>
		</header>
	);
}
