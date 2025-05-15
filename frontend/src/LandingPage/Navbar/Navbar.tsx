import GolobeLogo from "../../assets/LandingPage/golobelogo.svg";
import { Link } from "react-router-dom";
import { AirplaneIcon, BedIcon, CancelIcon, MenuIcon } from "../../Icons";
import styles from "./Navbar.module.css";
import ColourLogo from "../../assets/LandingPage/ColourLogo.svg";
import { useIsShow, useScroll, useWindowWidth } from "../../Hooks";

export default function Navbar() {
	const windowSize = useWindowWidth();
	return windowSize > 700 ? <DesktopNav /> : <MobileNav />;
}

const DesktopNav = () => {
	const scrollHeight = useScroll();
	return (
		<nav className={scrollHeight ? styles.sticky : ""} aria-label="Main Navigation">
			<header className="flex items-center justify-between px-[2rem] mt-[2rem] py-[2rem] w-full  mx-auto max-w-[86.25rem]">
				<ul className="flex gap-8">
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
				<div className="flex gap-[1.875rem] items-center">
					<Link
						to="/login"
						className={`${
							scrollHeight ? "text-blackishGreen" : "text-white"
						} text-sm font-semibold`}
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
			</header>
		</nav>
	);
};

const MobileNav = () => {
	const { isShow, setIsShow } = useIsShow();
	return (
		<nav
			className="flex items-center justify-between mt-[2rem] w-full z-[100] px-4 py-4"
			aria-label="Main Navigation"
		>
			<figure>
				<img src={GolobeLogo} alt="Golobe Travel Logo" className="w-full max-w-24" />
			</figure>
			<button
				type="button"
				onClick={() => {
					setIsShow(!isShow);
				}}
			>
				{" "}
				<MenuIcon fill={"white"} />
			</button>

			{isShow && <MobileNavDropdown isShow={isShow} setIsShow={setIsShow} />}
		</nav>
	);
};

const MobileNavDropdown = ({
	isShow,
	setIsShow,
}: {
	isShow: boolean;
	setIsShow: (value: boolean) => void;
}) => {
	return (
		<div className="fixed flex flex-col h-[100%] w-full left-1/2 -translate-x-1/2 bottom-0 top-0 bg-white z-[100] p-6 rounded-lg shadow-lg">
			<nav
				className="flex items-center justify-between w-full z-[100] py-4"
				aria-label="Main Navigation"
			>
				<figure>
					<img src={ColourLogo} alt="Golobe Travel Logo" className="w-full max-w-24" />
				</figure>
				<button
					type="button"
					onClick={() => {
						setIsShow(!isShow);
					}}
				>
					{" "}
					<CancelIcon />
				</button>
			</nav>
			<ul className="flex flex-col w-full mt-8">
				<li>
					<Link to="/flightsearch" className="flex space-x-1 items-center py-8 border-b">
						<AirplaneIcon color={"#112211"} />
						<span className="text-sm font-semibold text-blackishGreen">Find Flight</span>
					</Link>
				</li>
				<li>
					<Link to="/hotelsearch" className="flex space-x-1 items-center py-8 border-b">
						<BedIcon color={"#112211"} />
						<span className="text-sm font-semibold text-blackishGreen">Find Stays</span>
					</Link>
				</li>
			</ul>
			<div className="flex flex-col items-center w-full mt-auto">
				<Link
					to="/login"
					className="text-blackishGreen text-sm font-semibold text-center py-8 w-full"
				>
					Login
				</Link>
				<Link
					to="/signup"
					className="text-sm font-semibold text-white text-center py-[0.75rem] bg-blackishGreen w-full"
				>
					Sign up
				</Link>
			</div>
		</div>
	);
};
