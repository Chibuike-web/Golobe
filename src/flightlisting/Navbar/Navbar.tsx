import styles from "./Navbar.module.css";
import ProfileImage from "../../assets/FlightListing/ProfileImage.png";
import { AirplaneIcon, BedIcon, DownArrowIcon, FavouritesIcon } from "../../assets/icons";
import GolobeLogo from "../../assets/FlightSearch/LogoWhiteBackground.svg";

import { Link } from "react-router-dom";
export default function Navbar() {
	return (
		<header className="w-full bg-white" role="banner">
			<nav
				className="mx-auto max-w-[77rem] py-6 flex items-center justify-between h-max lg:px-4 md:py-4"
				aria-label="Main Navigation"
			>
				<ul className="flex gap-8 md:hidden">
					<li className={`${styles.flights} relative flex items-center gap-2`} role="tab">
						<AirplaneIcon color="#112211" />
						<span className="text-sm font-semibold text-blackishGreen">Find Flight</span>
					</li>
					<li>
						<Link to="/findstays" className="flex space-x-1 items-center">
							<BedIcon color="#112211" />
							<span className="text-sm font-semibold text-blackishGreen">Find Stays</span>
						</Link>
					</li>
				</ul>
				<figure>
					<img src={GolobeLogo} alt="Golobe Travel Logo" className="w-full max-w-24" />
				</figure>
				<div className="flex gap-[2rem] items-center md:hidden">
					<div className="flex gap-1 items-center">
						<FavouritesIcon />
						<p className="text-[14px] font-semibold">Favourites</p>
					</div>
					<span className="font-semibold text-[14px]">I</span>
					<div className="flex items-center gap-[4px]">
						<figure className="relative w-[45px] h-[45px] flex-shrink-0">
							<img src={ProfileImage} alt="Profile Image" />
							<span className="bg-slamon block rounded-full absolute bottom-0 right-0">
								<DownArrowIcon width={"12px"} />
							</span>
						</figure>
						<p className="text-[14px] font-semibold">John D.</p>
					</div>
				</div>
			</nav>
		</header>
	);
}
