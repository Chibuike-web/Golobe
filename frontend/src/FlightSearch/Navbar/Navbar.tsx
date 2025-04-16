import GolobeLogo from "../../assets/FlightSearch/LogoWhiteBackground.svg";
import { Link } from "react-router-dom";
import { AirplaneIcon, BedIcon } from "../../assets/Icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<header className="w-full bg-white sticky z-[100] top-0" role="banner">
			<nav
				className="mx-auto max-w-[77rem] py-6 flex items-center justify-between h-max lg:px-4 md:py-4"
				aria-label="Main Navigation"
			>
				<ul className="flex gap-8 md:hidden">
					<li className="flex space-x-1 items-center relative">
						<AirplaneIcon color="#112211" />
						<span className={`text-sm font-semibold text-blackishGreen ${styles.flights}`}>
							Find Flight
						</span>
					</li>
					<Link to="/hotelsearch">
						<li className="flex space-x-1 items-center">
							<BedIcon color="#112211" />
							<span className="text-sm font-semibold text-blackishGreen">Find Stays</span>
						</li>
					</Link>
				</ul>
				<figure>
					<img src={GolobeLogo} alt="Golobe Travel Logo" className="w-full max-w-24" />
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
