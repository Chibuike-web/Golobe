import styles from "./hero.module.css";
import { Link } from "react-router-dom";
import { AirplaneIcon, BedIcon, AddIcon, PaperPlaneIcon } from "../../assets/icons";
import GolobeLogo from "../../assets/LandingPage/golobelogo.svg";

export default function HeroSection() {
	return (
		<section className="mx-auto max-w-[90rem] flex flex-col items-center w-full relative h-[48.875rem] px-4 pt-4">
			<div className={styles.herosection}>
				<div className={styles.content}>
					<Navbar />
					<HeroContent />
				</div>
				<div className={styles.backdrop} aria-hidden="true"></div>
			</div>
			<FlightSearchForm />
		</section>
	);
}

function Navbar() {
	return (
		<header className="w-full" role="banner">
			<nav
				className="px-8 py-6 flex items-center justify-between h-max md:px-4 md:py-4"
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
						<a href="#stays" className="flex space-x-1 items-center">
							<BedIcon color="white" />
							<span className="text-sm font-semibold text-white">Find Stays</span>
						</a>
					</li>
				</ul>
				<figure>
					<img src={GolobeLogo} alt="Golobe Travel Logo" className="w-full max-w-24" />
				</figure>
				<div className="flex gap-[1.875rem] items-center md:hidden">
					<a href="#login" className="text-white text-sm font-semibold">
						Login
					</a>
					<a
						href="#signup"
						className="text-sm font-semibold bg-white text-blackishGreen px-[1.5rem] py-[0.75rem] rounded-[0.5rem]"
					>
						Sign up
					</a>
				</div>
			</nav>
		</header>
	);
}

function HeroContent() {
	return (
		<div
			className="flex flex-col items-center mt-[3.375rem] md:mt-[1rem] justify-center md:gap-3"
			role="main"
		>
			<h2 className="font-primary text-white text-[2.8125rem] md:text-[1.2rem] font-bold text-center">
				Helping Others
			</h2>
			<h1 className="font-primary text-white text-[5rem] md:text-[3rem] md:leading-[3rem] lg:leading-[5rem] font-bold text-center">
				LIVE & TRAVEL
			</h1>
			<p className="text-white font-semibold text-[1.25rem] md:text-[0.8rem]">
				Special offers to suit your plan
			</p>
		</div>
	);
}

function FlightSearchForm() {
	let stays = false;
	return (
		<aside
			className="w-full text-blackishGreen max-w-[77rem] z-50 mt-[-6.25rem] bg-white px-8 pt-4 pb-8 rounded-2xl md:px-4"
			style={{ boxShadow: "0 0.25rem 1rem rgba(141, 211, 187, 0.15)" }}
			aria-labelledby="flight-search-form"
		>
			<h2 id="flight-search-form" className="sr-only">
				Flight Search Form
			</h2>
			<ul className="flex space-x-8" role="tablist">
				<li className={`${styles.flights} relative flex items-center gap-2`} role="tab">
					<span>
						<AirplaneIcon />
					</span>
					<span>Flights</span>
				</li>
				<div className="w-[0.0625rem] h-[3rem] bg-[#D7E2EE]"></div>
				<li className={`${stays ? styles.stays : ""} relative flex items-center gap-2`} role="tab">
					<span>
						<BedIcon />
					</span>
					<span>Stays</span>
				</li>
			</ul>

			<form
				action=""
				className="flex md:flex-col items-start w-full gap-6 mt-[3rem]"
				aria-label="Flight Search"
			>
				{/* Form 1 */}
				<div className="relative w-full">
					<label
						htmlFor="from-to"
						className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
					>
						From - To
					</label>
					<input type="text" placeholder="Enter departure city" />
				</div>

				{/* Form  2 */}
				<div className="relative w-full max-w-[8.75rem] md:max-w-full">
					<label
						htmlFor="trip"
						className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
					>
						Trip
					</label>
					<input type="text" placeholder="Return" />
				</div>

				{/* Form  3 */}
				<div className="relative w-full">
					<label
						htmlFor="depart-return"
						className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
					>
						Depart - Return
					</label>
					<input type="text" placeholder="Enter date" />
				</div>

				{/* Form  4 */}
				<div className="relative w-full">
					<label
						htmlFor="passenger-class"
						className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
					>
						Passenger - Class
					</label>
					<input type="text" placeholder="Enter details" />
				</div>
			</form>

			<div className="flex justify-end pt-8 items-center gap-6 md:flex-col">
				<button className="flex items-center gap-1 ">
					<span>
						<AddIcon />
					</span>
					Add Promo Code
				</button>
				<button className="flex gap-1 items-center justify-center text-[0.875rem] font-medium bg-mintGreen p-4 rounded-md md:w-full">
					<span>
						<PaperPlaneIcon />
					</span>
					Show Flights
				</button>
			</div>
		</aside>
	);
}
