import styles from "./hero.module.css";
import { AirplaneIcon, BedIcon, AddIcon, PaperPlaneIcon } from "../../assets/icons";
import GolobeLogo from "../../assets/golobelogo.svg";

export default function HeroSection() {
	return (
		<section className=" flex flex-col items-center w-full relative h-[782px]">
			<div className={`${styles.herosection} h-full flex-grow`}>
				<div className={`${styles.content} h-full`}>
					<Navbar />
					<HeroContent />
				</div>
				<div className={styles.backdrop}></div>
			</div>
			<FlightSearchForm />
		</section>
	);
}

function Navbar() {
	return (
		<header className="w-full">
			<nav className="px-8 py-6 flex items-center justify-between h-max">
				<ul className="flex gap-8">
					<li>
						<a href="#flights" className="flex space-x-1 items-center">
							<AirplaneIcon color="white" />
							<span className="text-sm font-semibold text-white">Find Flight</span>
						</a>
					</li>
					<li>
						<a href="#stays" className="flex space-x-1 items-center">
							<BedIcon color="white" />
							<span className="text-sm font-semibold text-white">Find Stays</span>
						</a>
					</li>
				</ul>
				<figure>
					<img src={GolobeLogo} alt="Golobe Logo" />
				</figure>
				<div className="flex gap-[30px] items-center">
					<a href="#login" className="text-white text-sm font-semibold">
						Login
					</a>
					<a
						href="#signup"
						className="text-sm font-semibold bg-white text-blackishGreen px-6 py-3 rounded-[8px]"
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
		<div className="flex flex-col items-center mt-[3.375rem] justify-center" role="main">
			<h2 className="font-primary text-white text-[2.8125rem] font-bold text-center">
				Helping Others
			</h2>
			<h1 className="font-primary text-white text-[5rem] font-bold text-center">LIVE & TRAVEL</h1>
			<p className="text-white font-semibold text-[1.25rem]">Special offers to suit your plan</p>
		</div>
	);
}

function FlightSearchForm() {
	let stays = false;
	return (
		<div
			className="w-full text-blackishGreen max-w-[1232px] z-50 mt-[-100px] bg-white px-8 pt-4 pb-8 rounded-2xl"
			style={{ boxShadow: "0 4px 16px rgba(141, 211, 187, 0.15)" }}
		>
			<ul className="flex space-x-8 pb-12">
				<li className={`${styles.flights} relative flex items-center gap-2`}>
					<span>
						<AirplaneIcon />
					</span>
					<span>Flights</span>
				</li>
				<div className="w-[1px] h-[48px] bg-[#D7E2EE]"></div>
				<li className={`${stays ? styles.stays : ""} relative flex items-center gap-2`}>
					<span>
						<BedIcon />
					</span>
					<span>Stays</span>
				</li>
			</ul>

			<form action="" className="flex items-start w-full gap-6">
				{/* Form 1 */}
				<div className="relative w-full">
					<label
						htmlFor="from-to"
						className="absolute bg-white left-[16px] px-1 top-0 -translate-y-1/2 text-[14px]"
					>
						From - To
					</label>
					<input type="text" placeholder="Enter departure city" />
				</div>

				{/* Form  2*/}
				<div className="relative w-full max-w-[140px]">
					<label
						htmlFor="trip"
						className="absolute bg-white left-[16px] px-1 top-0 -translate-y-1/2 text-[14px]"
					>
						Trip
					</label>
					<input type="text" placeholder="Return" />
				</div>

				{/* Form  3*/}
				<div className="relative w-full">
					<label
						htmlFor="depart - return"
						className="absolute bg-white left-[16px] px-1 top-0 -translate-y-1/2 text-[14px]"
					>
						Depart - Return
					</label>
					<input type="text" placeholder="Enter date" />
				</div>

				{/* Form  4*/}
				<div className="relative w-full">
					<label
						htmlFor="passenger - class"
						className="absolute bg-white left-[16px] px-1 top-0 -translate-y-1/2 text-[14px]"
					>
						Passenger - Class
					</label>
					<input type="text" placeholder="Enter date" />
				</div>
			</form>

			<div className="flex justify-end pt-8 items-center gap-6">
				<button className="flex items-center gap-1">
					<span>
						<AddIcon />
					</span>
					Add Promo Code
				</button>
				<button className="flex gap-1 items-center text-[14px] font-medium bg-mintGreen p-4 rounded-md ">
					<span>
						<PaperPlaneIcon />
					</span>
					Show Flights
				</button>
			</div>
		</div>
	);
}
