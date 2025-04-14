import { useState } from "react";
import styles from "./HeroSection.module.css";

import {
	AirplaneIcon,
	BedIcon,
	AddIcon,
	PaperPlaneIcon,
	DownArrowIcon,
	SwapIcon,
} from "../../assets/Icons";
import { useFlightSearchFormState } from "../../Hooks";
import { motion } from "motion/react";

export default function HeroSection() {
	return (
		<section className="mx-auto max-w-[90rem] flex flex-col items-center w-full px-4 pt-4">
			<div className={styles.herosection}>
				<HeroContent />
			</div>
			<FlightSearchForm />
		</section>
	);
}

function HeroContent() {
	return (
		<div
			className="flex z-10 flex-col items-center mt-[10rem] md:mt-[5rem] justify-center md:gap-3"
			role="main"
		>
			<motion.p
				className="font-primary text-white text-[2.8125rem] md:text-[1.2rem] font-bold text-center"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Helping Others
			</motion.p>
			<motion.h1
				className="font-primary text-white text-[5rem] md:text-[3rem] md:leading-[3rem] lg:leading-[5rem] font-bold text-center"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				LIVE & TRAVEL
			</motion.h1>
			<motion.p
				className="text-white font-semibold text-[1.25rem] md:text-[0.8rem]"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.4 }}
			>
				Special offers to suit your plan
			</motion.p>
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

	const isFromToBlue =
		(focusedInput === "from" || focusedInput === "to") && !from.trim() && !to.trim();

	const isDepartReturnBlue =
		(focusedInput === "departDate" || focusedInput === "returnDate") &&
		!departDate.trim() &&
		!returnDate.trim();

	const isPassengerClassBlue =
		(focusedInput === "passenger" || focusedInput === "travelClass") &&
		!passenger.trim() &&
		!travelClass.trim();

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
				className="flex md:flex-col items-start w-full mt-10 gap-6"
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
					<div
						className={`flex items-center border-[1px] ${
							isFromToBlue ? "border-[#6200ea]" : "border-[#79747e]"
						} rounded-[4px] gap-2 p-[16px] leading-[1em] h-[56px]`}
					>
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
					<div className="relative ">
						<input
							id="trip"
							value={trip}
							type="text"
							placeholder="Return"
							className="border-[0.0625rem] border-[#79747e]"
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
					<div
						className={`flex items-center border-[1px] ${
							isDepartReturnBlue ? "border-[#6200ea]" : "border-[#79747e]"
						} rounded-[4px] gap-2 p-[16px] leading-[1em] h-[56px]`}
					>
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
					<div
						className={`flex items-center border-[1px] ${
							isPassengerClassBlue ? "border-[#6200ea]" : "border-[#79747e]"
						} rounded-[4px] gap-2 p-[16px] leading-[1em] h-[56px]`}
					>
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
