import { useState } from "react";
import styles from "./hero.module.css";
import {
	AirplaneIcon,
	BedIcon,
	AddIcon,
	PaperPlaneIcon,
	DownArrowIcon,
	SwapIcon,
} from "../../assets/icons";
import GolobeLogo from "../../assets/FlightSearch/LogoWhiteBackground.svg";
import { Link } from "react-router-dom";
import { useFlightSearchFormState } from "../../Hooks";

export default function Herosection() {
	return (
		<section className="flex flex-col items-center w-full min-h-[48.875rem]">
			<Navbar />
			<HeroContent />
			<FlightSearchForm />
		</section>
	);
}

function Navbar() {
	return (
		<header className="w-full bg-white" role="banner">
			<nav
				className="mx-auto max-w-[77rem] py-6 flex items-center justify-between h-max lg:px-4 md:py-4"
				aria-label="Main Navigation"
			>
				<ul className="flex gap-8 md:hidden">
					<li className="flex space-x-1 items-center">
						<AirplaneIcon color="#112211" />
						<span className="text-sm font-semibold text-blackishGreen">Find Flight</span>
					</li>
					<li>
						<a href="#stays" className="flex space-x-1 items-center">
							<BedIcon color="#112211" />
							<span className="text-sm font-semibold text-blackishGreen">Find Stays</span>
						</a>
					</li>
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

function HeroContent() {
	return (
		<div className={`text-white w-full min-h-[537px] ${styles.heroimage}`}>
			<div className="mx-auto max-w-[77rem] lg:px-4">
				<h2 className="font-primary font-bold text-[45px] w-full max-w-[440px] mt-20 leading-[57px]">
					Make your travel whishlist, we’ll do the rest
				</h2>
				<p className="text-[20px]">Special offers to suit your plan</p>
			</div>
		</div>
	);
}

function FlightSearchForm() {
	const {
		from,
		setFrom,
		to,
		setTo,
		trip,
		setTrip,
		departDate,
		setDepartDate,
		returnDate,
		setReturnDate,
		passenger,
		setPassenger,
		travelClass,
		setTravelClass,
	} = useFlightSearchFormState();

	const [focusedInput, setFocusedInput] = useState<string | null | boolean>(null);
	const handleFocus = (id: string) => {
		setFocusedInput(id);
	};

	const handleBlur = (id: string, value: string) => {
		if (!value.trim() && focusedInput === id) {
			setFocusedInput(null);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		switch (id) {
			case "from":
				setFrom(value);
				break;
			case "to":
				setTo(value);
				break;
			case "trip":
				setTrip(value);
				break;
			case "departDate":
				setDepartDate(value);
				break;
			case "returnDate":
				setReturnDate(value);
				break;
			case "passenger":
				setPassenger(value);
				break;
			case "travelClass":
				setTravelClass(value);
		}
	};

	return (
		<aside
			className="w-full text-blackishGreen max-w-[77rem] z-50 mt-[-4rem] bg-white px-8 pt-8 pb-12 rounded-2xl md:px-4"
			style={{ boxShadow: "0 0.25rem 1rem rgba(141, 211, 187, 0.15)" }}
			aria-labelledby="flight-search-form"
		>
			<h2 className="text-[20px] font-semibold">Where are you flying? </h2>
			<form
				action=""
				className="flex md:flex-col items-start w-full mb-8 mt-8 gap-6"
				aria-label="Flight Search"
			>
				{/* Form 1 */}
				<div className="relative w-full">
					{(focusedInput === "from" || from || focusedInput === "to" || to) && (
						<label
							id="fromTo"
							htmlFor="from-to"
							className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
						>
							From - To
						</label>
					)}
					<div className="flex items-center border-[1px] border-[#79747e] rounded-[4px] gap-2 p-[16px] leading-[1em]">
						<input
							id="from"
							value={from}
							type="text"
							placeholder="From"
							className="custom-input"
							onChange={handleChange}
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
						/>
						<p>-</p>
						<input
							id="to"
							value={to}
							type="text"
							placeholder="To"
							className="custom-input"
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
						<button type="button">
							<SwapIcon style={"flex-shrink-0"} />
						</button>
					</div>
				</div>

				{/* Form  2 */}
				<div className="relative w-full max-w-[8.75rem] md:max-w-full">
					{(focusedInput === "trip" || trip) && (
						<label
							htmlFor="trip"
							className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Trip
						</label>
					)}
					<div className="relative">
						<input
							id="trip"
							value={trip}
							type="text"
							placeholder="Return"
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
						<button type="button" className="absolute right-[16px] top-[50%] -translate-y-1/2">
							<DownArrowIcon />
						</button>
					</div>
				</div>

				{/* Form  3 */}
				<div className="relative w-full">
					{(focusedInput === "departDate" ||
						departDate ||
						focusedInput === "returnDate" ||
						returnDate) && (
						<label
							htmlFor="depart-return"
							className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Depart - Return
						</label>
					)}
					<div className="flex items-center border-[1px] border-[#79747e] rounded-[4px] gap-2 p-[18px] leading-[1em]">
						<input
							id="departDate"
							value={departDate}
							placeholder="Depart date"
							className="custom-input"
							onChange={handleChange}
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
						/>
						<p>-</p>
						<input
							id="returnDate"
							value={returnDate}
							placeholder="Return date"
							className="custom-input"
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
					</div>
				</div>

				{/* Form  4 */}
				<div className="relative w-full">
					{(focusedInput === "passenger" ||
						passenger ||
						focusedInput === "travelClass" ||
						travelClass) && (
						<label
							htmlFor="Passenger - Class"
							className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Passenger - Class
						</label>
					)}
					<div className="flex items-center border-[1px] border-[#79747e] rounded-[4px] gap-2 p-[18px] leading-[1em]">
						<input
							id="passenger"
							value={passenger}
							placeholder="Passenger"
							className="custom-input"
							onChange={handleChange}
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
						/>
						<p>-</p>
						<input
							id="travelClass"
							value={travelClass}
							placeholder="Travel Class"
							className="custom-input"
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
					</div>
				</div>
			</form>
			<div className="flex justify-end items-center gap-6 md:flex-col">
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
