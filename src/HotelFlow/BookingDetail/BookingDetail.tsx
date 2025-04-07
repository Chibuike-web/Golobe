import { DarkBuildingIcon, LocationIcon, RightArrowIcon } from "../../assets/Icons";
import CardImage from "../../assets/HotelListing/HeroImage1.png";
import CVK from "../../assets/HotelListing/Cvk.png";
import styles from "./BookingDetail.module.css";
import { useState } from "react";

export default function BookingDetail() {
	const [activeRadio, setActiveRadio] = useState<string | null>("full");

	const handleChange = (id: string) => {
		setActiveRadio((prev) => (prev === id ? null : id));
	};
	return (
		<div className="w-full  mt-12">
			<div className="w-full flex flex-col gap-8 mx-auto max-w-[77rem]">
				<div className="flex items-center">
					<p className="text-slamon text-[14px] font-medium">Turkey</p> <RightArrowIcon />
					<p className="text-slamon text-[14px] font-medium">Istanbul</p> <RightArrowIcon />
					<p className="text-[14px] font-medium opacity-75">CVK Park Bosphorus Hotel Istanbul</p>
				</div>
				<div className="flex justify-between w-full items-end"></div>
			</div>

			<div className="flex w-full gap-[40px] mx-auto max-w-[80rem]">
				{/* Left */}
				<div className="w-full p-6 bg-white">
					{/* Top */}
					<div className="flex justify-between">
						<h1 className="text-[24px] font-bold font-primary w-full max-w-[490px]">
							Superior room - 1 double bed or 2 twin beds
						</h1>
						<h1 className="font-bold text-[2rem] text-slamon">
							$240<span className="font-semibold text-[14px]">/night</span>
						</h1>
					</div>
					{/* Middle */}
					<div className="flex items-center px-8 py-4 border-[0.5px] gap-6 rounded-[8px] mt-[24px]">
						<img src={CVK} className="w-full max-w-[63px]" />
						<div>
							<h2 className="-font-semibold text-[24px] leading-[em]">
								CVK Park Bosphorus Hotel Istanbul
							</h2>
							<div>
								<div className="flex items-center gap-[8px] mt-[8px]">
									<LocationIcon />{" "}
									<p className="font-medium text-[14px] opacity-75">
										Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* Bottom */}

					<div className="flex justify-between mt-8">
						<div className=" flex flex-col gap-[4px]">
							<h2 className="font-semibold text-[20px]">Thursday, Dec 8</h2>
							<p className="text-blackishGreen/60 font-medium text-[14px]">Check-In</p>
						</div>
						<div className="flex items-center gap-6">
							<div className="flex items-center">
								<span className="block bg-blackishGreen rounded-full w-[10px] h-[10px] flex-shrink-0"></span>
								<span className="w-[36px] h-[1px] block bg-blackishGreen"></span>
							</div>
							<DarkBuildingIcon />
							<div className="flex items-center">
								<span className="w-[36px] h-[1px] block bg-blackishGreen"></span>
								<span className="block bg-blackishGreen rounded-full w-[10px] h-[10px] flex-shrink-0"></span>
							</div>
						</div>
						<div className=" flex flex-col gap-[4px]">
							<h2 className="font-semibold text-[20px]">Friday, Dec 9</h2>
							<p className="text-blackishGreen/60 font-medium text-[14px]">Check-Out</p>
						</div>
					</div>
					<form className="flex flex-col bg-white rounded-[12px]">
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
								type="checkbox"
								checked={activeRadio === "full"}
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
									Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same
									payment method on Nov 14, 2022. No extra fees.
								</p>
								<p className="mt-[16px] font-medium text-[12px] text-blackishGreen">More info</p>
							</div>

							<input
								type="checkbox"
								checked={activeRadio === "part"}
								className={`${styles.radio}`}
								id="part"
								onChange={() => {
									handleChange("part");
								}}
							/>
						</label>
					</form>
				</div>
				{/* Right */}
				<SummaryCard />
			</div>
		</div>
	);
}

const SummaryCard = () => {
	return (
		<div className="w-full max-w-[450px] p-6 bg-white rounded-[12px]">
			{/* Top */}
			<div className="flex gap-6 w-full items-center">
				<figure className="w-full max-w-[120px] h-[120px] flex-shrink-0 relative overflow-hidden rounded-[12px] ">
					<img src={CardImage} alt="Image" className="absolute w-full h-full object-cover" />
				</figure>
				<div>
					<p className="opacity-75 font-medium text-blackishGreen mb-[4px]">
						CVK Park Bosphorus...{" "}
					</p>
					<h3 className="mb-[10px] font-semibold text-[20px]">
						Superior room - 1 double bed or 2 twin beds
					</h3>
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
				<p>Base Fare</p>
				<p>
					<strong>$240</strong>
				</p>
			</div>
			<div className="w-full flex justify-between mb-4">
				<p>Dscount</p>
				<p>
					<strong>$0</strong>
				</p>
			</div>
			<div className="w-full flex justify-between mb-4">
				<p>Taxes</p>
				<p>
					<strong>$20</strong>
				</p>
			</div>
			<span className="block w-full h-[0.5px] opacity-25 bg-blackishGreen my-4"></span>
			<div className="w-full flex justify-between mb-4">
				<p>Total</p>
				<p>
					<strong>$265</strong>
				</p>
			</div>
		</div>
	);
};
