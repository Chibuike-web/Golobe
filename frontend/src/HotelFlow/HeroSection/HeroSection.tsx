import { useState } from "react";
import { BedIcon, Calender, Profile, SearchIcon } from "../../assets/Icons";
import { motion } from "motion/react";

import { useHotelSearchFormState } from "../../Hooks";

export default function HeroSection() {
	return (
		<section className="flex flex-col items-center">
			<HotelSearchForm />
		</section>
	);
}

function HotelSearchForm() {
	const {
		destination,
		setDestination,
		checkIn,
		setCheckIn,
		checkOut,
		setCheckOut,
		room,
		setRoom,
		guest,
		setGuest,
	} = useHotelSearchFormState();

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
			case "destination":
				setDestination(value);
				break;
			case "checkIn":
				setCheckIn(value);
				break;
			case "checkOut":
				setCheckOut(value);
				break;
			case "room":
				setRoom(value);
				break;
		}
	};

	return (
		<aside
			className="w-full flex items-center lg:flex-col gap-4 text-blackishGreen max-w-[77rem] mt-[3rem] bg-white px-8 pt-8 pb-8 rounded-2xl md:px-4"
			style={{ boxShadow: "0 0.25rem 1rem rgba(141, 211, 187, 0.15)" }}
			aria-labelledby="hotel-search-form"
		>
			<form
				action=""
				className="flex lg:flex-col items-center w-full gap-4"
				aria-label="Hotel Search"
			>
				{/* Form 1 */}

				<div className="relative w-full">
					{(focusedInput === "destination" || destination) && (
						<motion.label
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: "-50%" }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							htmlFor="destination"
							className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Enter Destination
						</motion.label>
					)}
					<div
						className={`w-full border-[1px] ${
							focusedInput === "destination" && !destination.trim()
								? "border-[#6200ea]"
								: "border-[#79747e]"
						}  flex items-center h-[56px] pl-[12px]`}
					>
						<button type="button">
							<BedIcon />
						</button>
						<input
							id="destination"
							value={destination}
							type="text"
							className="custom-input"
							placeholder={focusedInput === "destination" ? "" : "Enter Destination"}
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
					</div>
				</div>

				{/* Form  2 */}
				<div className="relative w-full">
					{(focusedInput === "checkIn" || checkIn) && (
						<motion.label
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: "-50%" }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							htmlFor="checkIn"
							className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Check-In
						</motion.label>
					)}
					<div className="relative">
						<input
							id="checkIn"
							value={checkIn}
							type="text"
							className="border border-[#79747E]"
							placeholder={focusedInput === "checkIn" ? "" : "Check-In"}
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
						<button type="button" className="absolute right-[16px] top-[50%] -translate-y-1/2">
							<Calender />
						</button>
					</div>
				</div>

				{/* Form  3 */}
				<div className="relative w-full">
					{(focusedInput === "checkOut" || checkOut) && (
						<motion.label
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: "-50%" }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							htmlFor="checkOut"
							className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Check-Out
						</motion.label>
					)}
					<div className="relative">
						<input
							id="checkOut"
							value={checkOut}
							type="text"
							className="border border-[#79747E]"
							placeholder={focusedInput === "checkOut" ? "" : "Check-Out"}
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
						<button type="button" className="absolute right-[16px] top-[50%] -translate-y-1/2">
							<Calender />
						</button>
					</div>
				</div>

				{/* Form  4 */}

				<div className="relative w-full">
					{(focusedInput === "room" || room) && (
						<motion.label
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: "-50%" }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							htmlFor="room"
							className="absolute z-[1000] bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Rooms & Guests
						</motion.label>
					)}
					<div
						className={`w-full border-[1px] ${
							focusedInput === "room" && !room.trim() ? "border-[#6200ea]" : "border-[#79747e]"
						}  flex items-center h-[56px] pl-[12px] rounded-[4px]`}
					>
						<button type="button">
							<Profile />
						</button>
						<input
							id="room"
							value={room}
							type="text"
							className="custom-input"
							placeholder={focusedInput === "room" ? "" : "Rooms & Guests"}
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
					</div>
				</div>
			</form>
			<button
				type="button"
				className="px-[16px] py-[16px] lg:w-full bg-mintGreen rounded-[4px] h-[56px]"
			>
				<SearchIcon />
			</button>
		</aside>
	);
}
