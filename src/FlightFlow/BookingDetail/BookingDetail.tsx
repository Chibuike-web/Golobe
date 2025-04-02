import { Card } from "../FlightDetail/FlightDetail";
import Emirates from "../../assets/FlightListing/Emirates.png";
import {
	AddIconLg,
	AppleIcon,
	CancelIcon,
	FacebookIcon,
	GoogleIcon,
	MailIcon,
	RightArrowIcon,
	VisaLogo,
} from "../../assets/Icons";
import Image from "../../assets/FlightListing/FlightDetail/HeroImage.png";
import styles from "./BookingDetail.module.css";
import { useState } from "react";
import { useFormState } from "../../Hooks";
import { usePaymentDetails } from "../../Hooks";
import { Checkbox } from "../../UiComponents";
import { Link } from "react-router-dom";

export default function BookingDetail() {
	const {
		phoneNumber,
		phoneNumberError,
		focusedInput,
		handleBlur,
		handleFocus,
		handlePhoneNumber,
	} = useFormState();
	const [login, setLogin] = useState(false);
	const [activeRadio, setActiveRadio] = useState("");
	const [card, setCard] = useState(false);
	const [addCard, setAddCard] = useState(false);

	const handleChange = (id: string) => {
		setActiveRadio(id);
	};

	const handleCardChange = () => {
		setCard(true);
	};

	const handleLogin = () => {
		setLogin((prev) => !prev);
	};

	const handleOpenAddCardModal = () => {
		setAddCard(true);
	};

	const handleCloseAddCardModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
		e.stopPropagation();
		const current = e.currentTarget as HTMLElement;
		if (current.classList.contains("fixed") || current.id === "cancelButton") {
			setAddCard(false);
		}
	};

	return (
		<div className="flex flex-col px-8 bg-[#FAFBFC]">
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
								className={`flex w-full justify-between items-center pl-4 pr-8 py-6 rounded-[12px] gap-[46px] cursor-pointer ${
									activeRadio === "full" && styles.background
								}`}
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
								className={`flex w-full justify-between items-center mt-4 rounded-[12px] pl-4 pr-8 py-6 gap-[46px] cursor-pointer ${
									activeRadio === "part" && styles.background
								}`}
							>
								<div className="w-full max-w-[577px]">
									<h2 className="font-primary font-bold leading-[20px] mb-[12px] ">
										Pay part now, part later
									</h2>
									<p className="text-[14px] leading-[17px] text-blackishGreen">
										Pay $207.43 now, and the rest ($207.43) will be automatically charged to the
										same payment method on Nov 14, 2022. No extra fees.
									</p>
									<p className="mt-[16px] font-medium text-[12px] text-blackishGreen">More info</p>
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

						{login ? (
							<div className=" p-4">
								<form className="flex flex-col mb-4 bg-white rounded-[12px]">
									<label
										htmlFor="card"
										className="flex w-full justify-between items-center pl-4 pr-8 py-6 rounded-[12px] gap-[46px] cursor-pointer"
										style={{ backgroundColor: card ? "#8DD3BB" : "" }}
									>
										<div className="flex items-center gap-8">
											<VisaLogo />
											<p className="text-blackishGreen">
												<span className="font-primary font-bold mr-2">**** 4321</span>
												<span className="text-[14px]">02/27</span>
											</p>
										</div>
										<input
											type="radio"
											name="cardDetails"
											id="card"
											className={`${styles.radio}`}
											onChange={handleCardChange}
										/>
									</label>
								</form>
								<div
									onClick={handleOpenAddCardModal}
									style={{
										width: "100%",
										height: "188.83px",
										position: "relative",
										borderRadius: "15px",
										cursor: "pointer",
									}}
								>
									<svg
										style={{
											position: "absolute",
											top: 0,
											left: 0,
										}}
										width="100%"
										height="188.83px"
									>
										<rect
											x="5"
											y="5"
											width="calc(100% - 10px)"
											height="calc(188.83px - 10px)"
											rx="15"
											ry="15"
											fill="none"
											stroke="#8DD3BB"
											strokeWidth="2"
											strokeDasharray="10 8"
										/>
									</svg>
									<div className=" absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
										<div className="flex flex-col items-center gap-[10px]">
											<AddIconLg />
											<p className="text-[12px] font-medium text-blackishGreen opacity-75">
												Add a new card
											</p>
										</div>
									</div>
								</div>
							</div>
						) : (
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
												focusedInput === "phoneNumber" || phoneNumber
													? ""
													: "Enter your phone number"
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
										onClick={handleLogin}
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
						)}
					</div>
					<SummaryCard />
				</div>
			</div>
			{addCard ? <AddCardModal closeModal={handleCloseAddCardModal} /> : ""}
		</div>
	);
}

const SummaryCard = () => {
	return (
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
	);
};

const AddCardModal = ({
	closeModal,
}: {
	closeModal: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}) => {
	const {
		cardNumber,
		setCardNumber,
		expiryDate,
		setExpiryDate,
		cvv,
		setCvv,
		nameOnCard,
		setNameOnCard,
		country,
		setCountry,
		focusedInput,
		handleFocus,
		handleBlur,
	} = usePaymentDetails();
	return (
		<div
			className="fixed w-screen h-screen inset-0 flex justify-center items-center"
			onClick={closeModal}
			style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
		>
			<div
				className="bg-white w-full max-w-[640px] p-16 rounded-[12px]"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col items-end">
					<button id="cancelButton" onClick={closeModal}>
						<CancelIcon />
					</button>
					<form className="rounded w-full">
						<h1 className="text-[40px] font-primary font-bold mb-12">Add a new Card</h1>
						{/* Card Number */}
						<div className="relative w-full mb-6">
							{(focusedInput === "cardNumber" || cardNumber) && (
								<label
									htmlFor="cardNumber"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Card Number
								</label>
							)}
							<input
								id="cardNumber"
								type="text"
								value={cardNumber}
								placeholder={
									focusedInput === "cardNumber" || cardNumber ? "" : "Enter your card number"
								}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={(e) => setCardNumber(e.target.value)}
								className="w-full p-2 border rounded"
							/>
						</div>

						{/* Expiry Date and CVV */}
						<div className="flex gap-4 mb-6">
							<div className="w-1/2 relative">
								{(focusedInput === "expiryDate" || expiryDate) && (
									<label
										htmlFor="expiryDate"
										className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
									>
										Expiry Date
									</label>
								)}
								<input
									id="expiryDate"
									type="text"
									value={expiryDate}
									placeholder={focusedInput === "expiryDate" || expiryDate ? "" : "MM/YY"}
									onFocus={(e) => handleFocus(e.target.id)}
									onBlur={(e) => handleBlur(e.target.id, e.target.value)}
									onChange={(e) => setExpiryDate(e.target.value)}
									className="w-full p-2 border rounded"
								/>
							</div>
							<div className="w-1/2 relative">
								{(focusedInput === "cvv" || cvv) && (
									<label
										htmlFor="cvv"
										className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
									>
										CVV
									</label>
								)}
								<input
									id="cvv"
									type="text"
									value={cvv}
									placeholder={focusedInput === "cvv" || cvv ? "" : "CVV"}
									onFocus={(e) => handleFocus(e.target.id)}
									onBlur={(e) => handleBlur(e.target.id, e.target.value)}
									onChange={(e) => setCvv(e.target.value)}
									className="w-full p-2 border rounded"
								/>
							</div>
						</div>

						{/* Name on Card */}
						<div className="relative w-full mb-6">
							{(focusedInput === "nameOnCard" || nameOnCard) && (
								<label
									htmlFor="nameOnCard"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Name on Card
								</label>
							)}
							<input
								id="nameOnCard"
								type="text"
								value={nameOnCard}
								placeholder={
									focusedInput === "nameOnCard" || nameOnCard ? "" : "Enter name on card"
								}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={(e) => setNameOnCard(e.target.value)}
								className="w-full p-2 border rounded"
							/>
						</div>

						{/* Country or Region */}
						<div className="relative w-full mb-4">
							{(focusedInput === "country" || country) && (
								<label
									htmlFor="country"
									className="absolute bg-white left-[1rem] px-1 top-0 -translate-y-1/2 text-[0.875rem]"
								>
									Country or Region
								</label>
							)}
							<input
								id="country"
								type="text"
								value={country}
								placeholder={focusedInput === "country" || country ? "" : "Enter country or region"}
								onFocus={(e) => handleFocus(e.target.id)}
								onBlur={(e) => handleBlur(e.target.id, e.target.value)}
								onChange={(e) => setCountry(e.target.value)}
								className="w-full p-2 border rounded"
							/>
						</div>
						<figure className="mt-6 mb-10">
							<Checkbox title="Securely save my information for 1-click checkout" />
						</figure>

						<Link to="/flightlisting/bookingticket">
							<button
								type="submit"
								className="bg-mintGreen text-blackishGreen text-[0.875rem] font-medium p-2 rounded w-full py-4"
							>
								Add Card
							</button>
						</Link>
						<p className="text-blackishGreen opacity-75 text-[12px] mt-4">
							By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge
							your card for this payment and future payments in accordance with their terms. You can
							always cancel your subscription.
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};
