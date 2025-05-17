import { useState } from "react";
import styles from "./Navbar.module.css";
import ProfileImage from "../assets/FlightListing/ProfileImage.png";
import {
	AirplaneIcon,
	BedIcon,
	DownArrowIcon,
	FavouritesIcon,
	Logout,
	Payment,
	Profile,
	RightArrowIcon,
	Settings,
	Support,
} from "../Icons";
import GolobeLogo from "../assets/FlightSearch/LogoWhiteBackground.svg";

import { NavLink } from "react-router-dom";
export default function NavbarSignedIn() {
	const [menuBox, setMenuBox] = useState(false);
	return (
		<header className="w-full relative z-[1] bg-white" role="banner">
			<nav
				className="mx-auto max-w-[77rem] relative py-5 flex items-center justify-between h-max lg:px-4 md:py-4"
				aria-label="Main Navigation"
			>
				<ul className="flex gap-8 md:hidden">
					<li role="tab">
						<NavLink
							to="flightlisting"
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
							to="/hotellisting"
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
					<img src={GolobeLogo} alt="Golobe Travel Logo" className="w-full max-w-24" />
				</figure>
				<div className=" flex gap-[2rem] items-center md:hidden">
					<NavLink
						to="favorites"
						className={({ isActive }) =>
							`${isActive ? styles.flights : ""} relative flex gap-1 items-center`
						}
					>
						<FavouritesIcon />
						<span className="text-[14px] font-semibold">Favourites</span>
					</NavLink>
					<span className="font-semibold text-[14px]">I</span>
					<div className="flex items-center gap-[4px]">
						<figure className="relative cursor-pointer" onClick={() => setMenuBox(!menuBox)}>
							<img
								src={ProfileImage}
								alt="Profile Image"
								className="w-[45px] h-[45px] flex-shrink-0"
							/>
							<span className="bg-slamon block rounded-full absolute bottom-0 right-0">
								<DownArrowIcon width={"12px"} />
							</span>
						</figure>
						<p className="text-[14px] font-semibold">John D.</p>
					</div>
					{menuBox && <MenuBox />}
				</div>
			</nav>
		</header>
	);
}

const MenuBox = () => {
	return (
		<div className="w-full max-w-[329px] flex flex-col gap-6 absolute top-[90px] right-0 p-8 bg-white rounded-[12px] shadow-[0px_2px_10px_rgba(0,0,0,0.05)]">
			<div className="relative flex items-center gap-4">
				<img src={ProfileImage} alt="Profile Image" className="flex-shrink-0 w-[64px] h-[64px]" />
				<div className="w-full">
					<p className="text-[16px] font-semibold w-full">John D.</p>
					<p className="text-blackishGreen/75">Online</p>
				</div>
			</div>
			<span className="block bg-blackishGreen/25 w-full h-[1px]"></span>
			<MenuItem text="My account" icon={<Profile />} />
			<MenuItem text="Payments" icon={<Payment />} />
			<MenuItem text="Settings" icon={<Settings />} />
			<span className="block bg-blackishGreen/25 w-full h-[1px]"></span>
			<MenuItem text="Support" icon={<Support />} />
			<MenuItem text="Logout" icon={<Logout />} logout />
		</div>
	);
};

interface MenuItemProps {
	text: string;
	icon: React.ReactNode;
	logout?: boolean;
}

const MenuItem = ({ text, icon, logout = false }: MenuItemProps) => {
	return (
		<article className="flex justify-between items-center text-blackishGreen">
			<span className=" flex gap-[8px]">
				{icon} <p>{text}</p>
			</span>
			{!logout && <RightArrowIcon />}
		</article>
	);
};
