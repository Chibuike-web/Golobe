import { AddIconLg, BinIcon, CancelIcon, VisaLogo } from "../Icons";
import { Checkbox } from "../Components";
import { usePaymentDetails } from "../Hooks";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PaymentMethods() {
	const [addCard, setAddCard] = useState(false);
	const handleOpenCardModal = () => {
		setAddCard(true);
	};

	const handleCloseCardModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
		e.stopPropagation();
		const current = e.currentTarget as HTMLElement;
		if (current.classList.contains("fixed") || current.id === "cancelButton") {
			setAddCard(false);
		}
	};

	return (
		<div className="md:px-4">
			<h1 className="font-bold font-primary text-[2rem] md:text-[24px] mt-10 mb-4">
				Payment methods
			</h1>
			<div className="flex flex-col gap-8 bg-white p-8 md:p-6 rounded-[1rem] shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
				<div className="flex gap-4 md:flex-col">
					<div className="bg-mintGreen w-full flex flex-col max-w-[378px] h-[212px] rounded-[16px] p-4">
						<div className="flex justify-between items-start">
							<div>
								<p className="font-semibold text-[24pxs]">**** **** ****</p>
								<h2 className="text-[32px] font-semibold mt-[-10px]">4321</h2>
							</div>
							<BinIcon />
						</div>
						<div className="flex justify-between items-end mt-auto">
							<div>
								<p className="font-medium text-[12px]">Valid Thru</p>
								<h2>4321</h2>
							</div>
							<VisaLogo className="w-[64px] h-[64px] flex-shrink-0" />
						</div>
					</div>
					<div
						onClick={handleOpenCardModal}
						style={{
							width: "100%",
							maxWidth: "378px",
							height: "212px",
							position: "relative",
							borderRadius: "16px",
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
							height="212px"
						>
							<rect
								x="5"
								y="5"
								width="calc(100% - 10px)"
								height="calc(212px - 10px)"
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
			</div>
			{addCard && <AddCardModal closeModal={handleCloseCardModal} />}
		</div>
	);
}

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
			className="fixed px-4 py-20 inset-0 justify-items-center content-center bg-black/50 z-[100] overflow-y-auto"
			onClick={closeModal}
		>
			<div
				className="bg-white w-full max-w-[640px] p-16 md:p-6 rounded-[12px]"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col items-end">
					<button id="cancelButton" onClick={closeModal}>
						<CancelIcon />
					</button>
					<form className="rounded w-full">
						<h1 className="text-[40px] md:text-[28px] font-primary font-bold mb-12">
							Add a new Card
						</h1>
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

						<Link to="/Hotellisting/bookingticket">
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
