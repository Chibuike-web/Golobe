import { useState } from "react";
import styles from "./HeroSection.module.css";
import { AddIcon, BuildingIcon, BedIcon, Calender, Profile } from "../../Icons";
import { motion } from "motion/react";
import { useHotelSearchFormState } from "../../Hooks";
import { Link } from "react-router-dom";

export default function HeroSection() {
	return (
		<section className="flex flex-col items-center w-full min-h-[48.875rem]">
			<HeroContent />
			<HotelSearchForm />
		</section>
	);
}
function HeroContent() {
	return (
		<div className={`text-white w-full min-h-[537px] ${styles.heroimage}`}>
			<div className="mx-auto max-w-[77rem] xl:px-4">
				<motion.h2
					className="font-primary font-bold text-[45px] w-full max-w-[440px] mt-20 leading-[57px]"
					initial={{ opacity: 0, x: -90 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					Make your travel wishlist, we’ll do the rest
				</motion.h2>
				<motion.p
					className="text-[20px]"
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.1 }}
				>
					Special offers to suit your plan
				</motion.p>
			</div>
		</div>
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
			case "rooms&guests":
				setRoom(value);
				break;
		}
	};

	return (
		<aside
			className="w-full text-blackishGreen max-w-[77rem] z-50 mt-[-4rem] bg-white px-8 pt-8 pb-12 rounded-2xl  shadow-[0_0.25rem_1rem_rgba(141,211,187,0.15)] md:px-4"
			aria-labelledby="hotel-search-form"
		>
			<h2 className="text-[1.25rem] font-semibold">Where are you flying? </h2>
			<form
				action=""
				className="flex md:flex-col items-center w-full mb-8 mt-8 gap-6"
				aria-label="Hotel Search"
			>
				{/* Form 1 */}

				<div className="relative w-full  md:max-w-full">
					{(focusedInput === "destination" || destination) && (
						<motion.label
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: "-50%" }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							htmlFor="destination"
							className="absolute z-[100] bg-white left-[1rem] px-[0.0625rem] top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Enter Destination
						</motion.label>
					)}
					<div
						className={`w-full border-[1px] ${
							focusedInput === "destination" && !destination.trim()
								? "border-[#6200ea]"
								: "border-[#79747e]"
						}  flex items-center h-[3.5rem] rounded px-[0.75rem]`}
					>
						<BedIcon />

						<input
							id="destination"
							value={destination}
							type="text"
							className="custom-input"
							placeholder={`${focusedInput === "destination" ? "" : "Enter Destination"}`}
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
					</div>
				</div>

				{/* Form  2 */}
				<div className="relative w-full md:max-w-full ">
					{(focusedInput === "checkIn" || checkIn) && (
						<motion.label
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: "-50%" }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							htmlFor="checkIn"
							className="absolute z-[1000] bg-white left-[1rem] px-[0.0625rem] top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Check-In
						</motion.label>
					)}
					<div className="relative ">
						<input
							id="checkIn"
							value={checkIn}
							type="text"
							placeholder={`${focusedInput === "checkIn" ? "" : "Check-In"}`}
							className="border border-[#79747E]"
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
						<button type="button" className="absolute right-[1rem] top-[50%] -translate-y-1/2">
							<Calender />
						</button>
					</div>
				</div>

				{/* Form  3 */}
				<div className="relative w-full md:max-w-full">
					{(focusedInput === "checkOut" || checkOut) && (
						<motion.label
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: "-50%" }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							htmlFor="checkOut"
							className="absolute z-[1000] bg-white left-[1rem] px-[0.0625rem] top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Check-Out
						</motion.label>
					)}
					<div className="relative">
						<input
							id="checkOut"
							value={checkOut}
							type="text"
							placeholder={`${focusedInput === "checkOut" ? "" : "Check-Out"}`}
							className="border border-[#79747E]"
							onFocus={(e) => handleFocus(e.target.id)}
							onBlur={(e) => handleBlur(e.target.id, e.target.value)}
							onChange={handleChange}
						/>
						<div className="absolute right-[1rem] top-[50%] -translate-y-1/2">
							<Calender />
						</div>
					</div>
				</div>

				{/* Form  4 */}

				<div className="relative w-full  md:max-w-full">
					{(focusedInput === "rooms&guests" || room) && (
						<motion.label
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: "-50%" }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							htmlFor="rooms&guests"
							className="absolute z-[1000] bg-white left-[1rem] px-[0.0625rem] top-0 -translate-y-1/2 text-[0.875rem]"
						>
							Rooms & Guests
						</motion.label>
					)}
					<div
						className={`w-full border-[1px] ${
							focusedInput === "rooms&guests" && !room.trim()
								? "border-[#6200ea]"
								: "border-[#79747e]"
						}  flex items-center h-[3.5rem] px-[0.75rem] rounded-[0.25rem]`}
					>
						<Profile />

						<input
							id="rooms&guests"
							value={room}
							type="text"
							className="custom-input"
							placeholder={`${focusedInput === "rooms&guests" ? "" : "Rooms & Guests"}`}
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
				<Link
					to="/hotellisting"
					className="flex gap-1 items-center justify-center font-medium bg-mintGreen p-4 rounded-md md:w-full"
				>
					<span>
						<BuildingIcon className="opacity-100" />
					</span>
					Show Places
				</Link>
			</div>
		</aside>
	);
}
