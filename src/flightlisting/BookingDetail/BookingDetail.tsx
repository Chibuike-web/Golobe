import Navbar from "../Navbar/Navbar";
import { Card } from "../FlightDetail/FlightDetail";
import Emirates from "../../assets/FlightListing/Emirates.png";
import { AppleIcon, FacebookIcon, GoogleIcon, MailIcon, RightArrowIcon } from "../../assets/icons";
import Image from "../../assets/FlightListing/FlightDetail/HeroImage.png";
import styles from "./BookingDetail.module.css";
import { useState } from "react";

import { useFormState } from "../../Hooks";
import FooterSection from "../../Footer/Footer";

export default function BookingDetail() {
	const { phoneNumber, setPhoneNumber, phoneNumberError, setPhoneNumberError } = useFormState();

	const [activeRadio, setActiveRadio] = useState("");

	const handleChange = (id: string) => {
		setActiveRadio(id);
	};

	const [focusedInput, setFocusedInput] = useState<string | null | boolean>(null);

	const handleFocus = (id: string) => {
		setFocusedInput(id);
	};

	const handleBlur = (id: string, value: string) => {
		if (!value.trim() && focusedInput === id) {
			setFocusedInput(null);
		}
	};

	const handlePhoneNumber = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = target;

		switch (id) {
			case "phoneNumber":
				if (!Number.isNaN(Number(value)) && value.length <= 11) {
					setPhoneNumber(value);
					if (value.trim()) setPhoneNumberError("");
				}
				break;
			default:
				console.warn(`Unhandled field: ${id}`);
		}
	};

	return (
		<div className="flex flex-col px-8 bg-[#FAFBFC]">
			<Navbar />
			<div className="mx-auto w-full max-w-[1280px] py-6 flex flex-col justify-between h-max lg:px-4 md:py-4">
				<div className="flex items-center">
					<p className="text-slamon text-[14px] font-medium">Turkey</p> <RightArrowIcon />
					<p className="text-slamon text-[14px] font-medium">Istanbul</p> <RightArrowIcon />
					<p className="text-[14px] font-medium opacity-75">CVK Park Bosphorus Hotel Istanbul</p>
				</div>
				<div className="flex items-start gap-[40px]">
					<div className="w-full max-w-[790px]">
						<Card
							flightType="Return"
							flightDate="Wed, Dec 8"
							duration="Emirates"
							airline="2h 28m"
							airlineLogo={Emirates}
							airplane="Airbus A320"
							flightStart="Newark(EWR)"
							flightStartTime="12:00pm"
							flightEnd="Newark(EWR)"
							flightEndTime="12:00pm"
							gap="48px"
						/>
						<form className="flex flex-col p-4 bg-white rounded-[12px]">
							<label
								htmlFor="full"
								className="flex w-full justify-between items-center p-4 rounded-[12px] gap-[46px] cursor-pointer"
								style={{ backgroundColor: activeRadio === "full" ? "#8DD3BB" : "" }}
							>
								<div>
									<h2 className="font-primary font-bold leading-[20px] mb-[12px] ">Pay in full</h2>
									<p className="text-[14px] leading-[17px] text-blackishGreen">
										Pay the total and you are all set
									</p>
								</div>
								<input
									type="radio"
									name="payment"
									id="full"
									className={`${styles.radio}`}
									onChange={() => {
										handleChange("full");
									}}
								/>
							</label>
							<label
								htmlFor="part"
								className="flex w-full justify-between items-center mt-4 rounded-[12px] p-4 gap-[46px] cursor-pointer"
								style={{ backgroundColor: activeRadio === "part" ? "#8DD3BB" : "" }}
							>
								<div className="w-full max-w-[577px]">
									<h2 className="font-primary font-bold leading-[20px] mb-[12px] ">
										Pay part now, part later
									</h2>
									<p className="text-[14px] leading-[17px] text-blackishGreen">
										Pay $207.43 now, and the rest ($207.43) will be automatically charged to the
										same payment method on Nov 14, 2022. No extra fees.
									</p>
									<p className="mt-[12px] font-medium text-[12px] text-blackishGreen">More info</p>
								</div>

								<input
									type="radio"
									name="payment"
									id="part"
									className={`${styles.radio}`}
									onChange={() => {
										handleChange("part");
									}}
								/>
							</label>
						</form>

						<div className="p-6">
							<form className=" bg-white">
								<h3 className="font-primary font-bold text-[20px] mb-4">
									Login or Sign up to book
								</h3>
								{/* Phone Number */}
								<div className="relative w-full">
									{(focusedInput === "phoneNumber" || phoneNumber) && (
										<label
											htmlFor="phoneNumber"
											className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
										>
											Phone Number
										</label>
									)}
									<input
										id="phoneNumber"
										value={phoneNumber}
										type="tel"
										placeholder={`${
											focusedInput === "phoneNumber" || phoneNumber ? "" : "Enter your phone number"
										}`}
										onFocus={(e) => handleFocus(e.target.id)}
										onBlur={(e) => handleBlur(e.target.id, e.target.value)}
										onChange={handlePhoneNumber}
									/>
									<p className="text-[14px] text-blackishGreen mt-4">
										We’ll call or text you to confirm your number. Standard message and data rates
										apply. Privacy Policy
									</p>
									{phoneNumberError && (
										<p className="text-red-600 text-[14px] mt-2">{phoneNumberError}</p>
									)}
								</div>
								<button
									type="submit"
									className="bg-mintGreen text-blackishGreen text-[0.875rem] font-medium p-2 rounded w-full py-4 mt-4"
								>
									Continue
								</button>
							</form>
							<div className="flex items-center gap-2 w-full mb-6 mt-6">
								<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
								<p className="text-nowrap leading-[1] text-[0.875rem] text-blackishGreen opacity-50">
									Or
								</p>
								<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
							</div>
							<div className="flex gap-2 w-full">
								<button className="flex items-center justify-center border border-mintGreen w-full p-2 rounded py-4">
									<FacebookIcon color="#1877F2" />
								</button>
								<button className="flex items-center justify-center border border-mintGreen w-full p-2 rounded py-4">
									<GoogleIcon />
								</button>
								<button className="flex items-center justify-center border border-mintGreen w-full p-2 rounded py-4">
									<AppleIcon />
								</button>
							</div>
							<button
								type="submit"
								className="content-center justify-items-center border-[1px] border-mintGreen text-blackishGreen text-[0.875rem] font-medium p-2 rounded w-full py-4 mt-4"
							>
								<div className="flex items-center gap-4 ">
									<MailIcon />
									<p className="leading-[17px] text-blackishGreen font-medium">
										Continue with email
									</p>
								</div>
							</button>
						</div>
					</div>

					<div className="w-full p-6 bg-white rounded-[12px]">
						{/* Top */}
						<div className="flex gap-6 w-full items-center">
							<figure className="w-full max-w-[120px] h-[120px] flex-shrink-0 relative overflow-hidden rounded-[12px] ">
								<img
									src={Image}
									alt="Image"
									className="absolute w-full h-full object-cover object-[-50px]"
								/>
							</figure>
							<div>
								<p className="opacity-75 font-medium text-blackishGreen mb-[4px]">Economy </p>
								<h3 className="mb-[10px] font-semibold text-[20px]">Emirates A380 Airbus</h3>
								<div className="flex items-center gap-2">
									<span className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium">
										4.2
									</span>
									<p className="text-[12px] font-medium">
										<strong>Very Good</strong> 54 reviews
									</p>
								</div>
							</div>
						</div>
						<span className="block w-full h-[0.5px] opacity-25 bg-blackishGreen my-4"></span>
						<p>
							Your booking is protected by <strong>golobe</strong>
						</p>
						<span className="block w-full h-[0.5px] opacity-25 bg-blackishGreen my-4"></span>
						<h3 className="font-primary font-bold mb-4">Price Details</h3>
						<div className="w-full flex justify-between mb-4">
							<p>Base Fare</p>
							<p>
								<strong>$400</strong>
							</p>
						</div>
						<div className="w-full flex justify-between mb-4">
							<p>Discount</p>
							<p>
								<strong>$400</strong>
							</p>
						</div>
						<div className="w-full flex justify-between mb-4">
							<p>Taxes</p>
							<p>
								<strong>$400</strong>
							</p>
						</div>
						<div className="w-full flex justify-between mb-4">
							<p>Service Fee</p>
							<p>
								<strong>$400</strong>
							</p>
						</div>
						<span className="block w-full h-[0.5px] opacity-25 bg-blackishGreen my-4"></span>
						<div className="w-full flex justify-between mb-4">
							<p>Total</p>
							<p>
								<strong>$400</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<FooterSection />
		</div>
	);
}
