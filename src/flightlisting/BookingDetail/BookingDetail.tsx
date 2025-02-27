import Navbar from "../Navbar/Navbar";
import { Card } from "../FlightDetail/FlightDetail";
import Emirates from "../../assets/FlightListing/Emirates.png";
import { RightArrowIcon } from "../../assets/icons";
import Image from "../../assets/FlightListing/FlightDetail/HeroImage.png";
import styles from "./BookingDetail.module.css";
import { useState } from "react";

export default function BookingDetail() {
	const [activeRadio, setActiveRadio] = useState("");

	const handleChange = (id: string) => {
		setActiveRadio(id);
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
				<div className="flex gap-[40px]">
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
									<h2 className="font-primary font-bold leading-[20px] mb-[8px] ">Pay in full</h2>
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
									<h2 className="font-primary font-bold leading-[20px] mb-[8px] ">Pay in full</h2>
									<p className="text-[14px] leading-[17px] text-blackishGreen">
										Pay $207.43 now, and the rest ($207.43) will be automatically charged to the
										same payment method on Nov 14, 2022. No extra fees.
									</p>
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
							<p className="mt-[12px] font-medium text-[12px] text-blackishGreen">More info</p>
						</form>
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
		</div>
	);
}
