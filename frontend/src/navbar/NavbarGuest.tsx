import GolobeLogo from "../assets/flight-search/LogoWhiteBackground.svg";
import { NavLink, Link } from "react-router-dom";
import { AirplaneIcon, BedIcon, CancelIcon, MenuIcon } from "../Icons";
import styles from "./Navbar.module.css";
import { useIsShow } from "../Hooks";

export default function NavbarGuest() {
	const { isShow, setIsShow } = useIsShow();

	return (
		<header className="w-full bg-white sticky z-[100] top-0" role="banner">
			<nav
				className="mx-auto max-w-[77rem] md:h16 py-6 flex items-center justify-between xl:px-4"
				aria-label="Main Navigation"
			>
				<ul className="flex gap-8 md:hidden">
					<li role="tab">
						<NavLink
							to={"/flightsearch"}
							className={({ isActive }) =>
								`${isActive ? styles.flights : ""} relative flex items-center gap-2`
							}
						>
							<AirplaneIcon color="#112211" />
							<span className="text-sm font-semibold text-blackishGreen">Find Flight</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/hotelsearch"}
							className={({ isActive }) =>
								`${isActive ? styles.flights : ""} relative flex items-center gap-2`
							}
						>
							<BedIcon color="#112211" />
							<span className="text-sm font-semibold text-blackishGreen">Find Stays</span>
						</NavLink>
					</li>
				</ul>
				<Link to="/">
					<img src={GolobeLogo} alt="Golobe Travel Logo" className="w-full max-w-[6rem]" />
				</Link>{" "}
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
				<button
					type="button"
					onClick={() => {
						setIsShow(!isShow);
					}}
					className="hidden md:block"
				>
					{isShow ? <CancelIcon /> : <MenuIcon />}
				</button>
				{isShow && <MobileNavDropdown isShow={isShow} setIsShow={setIsShow} />}
			</nav>
		</header>
	);
}

const MobileNavDropdown = ({
	isShow,
	setIsShow,
}: {
	isShow: boolean;
	setIsShow: (value: boolean) => void;
}) => {
	return (
		<div className="fixed flex flex-col h-[calc(100% - 4rem)] w-full left-1/2 -translate-x-1/2 bottom-0 top-[4rem] bg-white z-[100] p-6 shadow-lg">
			<ul className="flex flex-col w-full">
				<li>
					<NavLink
						to="/flightsearch"
						className={({ isActive }) =>
							`flex space-x-1 items-center py-8 border-b ${
								isActive ? "border-mintGreen border-b-[4px]" : ""
							} `
						}
						onClick={() => setIsShow(!isShow)}
					>
						<AirplaneIcon color={"#112211"} />
						<span className="text-sm font-semibold text-blackishGreen">Find Flight</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/hotelsearch"
						className={({ isActive }) =>
							`flex space-x-1 items-center py-8 border-b ${
								isActive ? "border-mintGreen border-b-[4px]" : ""
							} `
						}
						onClick={() => setIsShow(!isShow)}
					>
						<BedIcon color={"#112211"} />
						<span className="text-sm font-semibold text-blackishGreen">Find Stays</span>
					</NavLink>
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
