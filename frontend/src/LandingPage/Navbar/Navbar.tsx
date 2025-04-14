import GolobeLogo from "../../assets/LandingPage/golobelogo.svg";
import { Link } from "react-router-dom";
import { AirplaneIcon, BedIcon } from "../../assets/Icons";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ColourLogo from "../../assets/LandingPage/ColourLogo.svg";

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
			className={` flex items-center justify-between px-[6rem] py-[2rem] w-full z-[100] mx-auto max-w-[96rem] md:px-4 md:py-4 ${
				scrollHeight ? styles.sticky : styles.normal
			}`}
			aria-label="Main Navigation"
		>
			<ul className="flex gap-8 md:hidden">
				<li>
					<Link to="/flightsearch" className="flex space-x-1 items-center">
						<AirplaneIcon color={scrollHeight ? "#112211" : "white"} />
						<span
							className={`text-sm font-semibold ${
								scrollHeight ? "text-blackishGreen" : "text-white"
							}`}
						>
							Find Flight
						</span>
					</Link>
				</li>
				<li>
					<Link to="/hotelsearch" className="flex space-x-1 items-center">
						<BedIcon color={scrollHeight ? "#112211" : "white"} />
						<span
							className={`text-sm font-semibold ${
								scrollHeight ? "text-blackishGreen" : "text-white"
							}`}
						>
							Find Stays
						</span>
					</Link>
				</li>
			</ul>
			<figure>
				<img
					src={scrollHeight ? ColourLogo : GolobeLogo}
					alt="Golobe Travel Logo"
					className="w-full max-w-24"
				/>
			</figure>
			<div className="flex gap-[1.875rem] items-center md:hidden">
				<Link
					to="/login"
					className={`${scrollHeight ? "text-blackishGreen" : "text-white"} text-sm font-semibold`}
				>
					Login
				</Link>
				<Link
					to="/signup"
					className={`text-sm font-semibold ${
						scrollHeight ? "bg-mintGreen" : "bg-white"
					} text-blackishGreen px-[1.5rem] py-[0.75rem] rounded-[0.5rem]`}
				>
					Sign up
				</Link>
			</div>
		</nav>
	);
}
