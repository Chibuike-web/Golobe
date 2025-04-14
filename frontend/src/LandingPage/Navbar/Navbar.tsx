import GolobeLogo from "../../assets/LandingPage/golobelogo.svg";
import { Link } from "react-router-dom";
import { AirplaneIcon, BedIcon } from "../../assets/Icons";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../assets/LandingPage/Logo.svg";

export default function Navbar() {
	const [scrollHeight, setScrollHeight] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrollHeight(true);
			} else {
				setScrollHeight(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={` flex items-center justify-between p-[2rem] w-full z-[100] mx-auto max-w-[88rem] md:px-4 md:py-4 ${
				scrollHeight ? styles.sticky : styles.normal
			}`}
			aria-label="Main Navigation"
		>
			<ul className="flex gap-8 md:hidden">
				<li>
					<Link to="/flightsearch" className="flex space-x-1 items-center">
						<AirplaneIcon color="white" />
						<span className="text-sm font-semibold text-white">Find Flight</span>
					</Link>
				</li>
				<li>
					<Link to="/hotelsearch" className="flex space-x-1 items-center">
						<BedIcon color="white" />
						<span className="text-sm font-semibold text-white">Find Stays</span>
					</Link>
				</li>
			</ul>
			<figure>
				<img
					src={scrollHeight ? Logo : GolobeLogo}
					alt="Golobe Travel Logo"
					className="w-full max-w-24"
				/>
			</figure>
			<div className="flex gap-[1.875rem] items-center md:hidden">
				<Link to="/login" className="text-white text-sm font-semibold">
					Login
				</Link>
				<Link
					to="/signup"
					className="text-sm font-semibold bg-white text-blackishGreen px-[1.5rem] py-[0.75rem] rounded-[0.5rem]"
				>
					Sign up
				</Link>
			</div>
		</nav>
	);
}
