import { useState } from "react";
import { SwapIcon, DownArrowIcon, SearchIcon } from "../../assets/icons";
import { useFlightSearchFormState } from "../../Hooks";

export default function HeroSection() {
	return (
		<section className="flex flex-col items-center w-full ">
			<FlightSearchForm />
		</section>
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
				break;
			default:
				break;
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

	return (
		<aside
			className="w-full flex lg:flex-col items-center gap-6 text-blackishGreen max-w-[77rem] mt-12 z-50 bg-white px-8 py-8 rounded-2xl lg:px-4"
			style={{ boxShadow: "0 0.25rem 1rem rgba(141, 211, 187, 0.15)" }}
			aria-labelledby="flight-search-form"
		>
			<form
				action=""
				className="flex lg:flex-col items-center w-full gap-6"
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
						className={`flex items-center border-[1px] max-h-[56px] ${
							isFromToBlue ? "border-[#6200ea]" : "border-[#79747e]"
						} rounded-[4px] gap-2 p-[16px] leading-[1em]`}
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
				<div className="relative w-full max-w-[8.75rem] lg:max-w-full ">
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
							className="max-h-[56px]"
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
						className={`flex items-center border-[1px] max-h-[56px] ${
							isDepartReturnBlue ? "border-[#6200ea]" : "border-[#79747e]"
						} rounded-[4px] gap-2 p-[16px] leading-[1em]`}
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
						className={`flex items-center border-[1px] max-h-[56px] ${
							isPassengerClassBlue ? "border-[#6200ea]" : "border-[#79747e]"
						} rounded-[4px] gap-2 p-[16px] leading-[1em]`}
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
			<button
				type="button"
				className="px-[16px] py-[16px] lg:w-full bg-mintGreen rounded-[4px] max-h-[56px]"
			>
				<SearchIcon />
			</button>
		</aside>
	);
}
