import { LocationIcon, RightArrowIcon } from "../../assets/Icons";
import CardImage from "../../assets/HotelListing/HeroImage1.png";
import CVK from "../../assets/HotelListing/Cvk.png";

export default function BookingDetail() {
	return (
		<div className="w-full mx-auto max-w-[77rem] mt-12">
			<div className="w-full flex flex-col gap-8">
				<div className="flex items-center">
					<p className="text-slamon text-[14px] font-medium">Turkey</p> <RightArrowIcon />
					<p className="text-slamon text-[14px] font-medium">Istanbul</p> <RightArrowIcon />
					<p className="text-[14px] font-medium opacity-75">CVK Park Bosphorus Hotel Istanbul</p>
				</div>
				<div className="flex justify-between w-full items-end"></div>
			</div>

			<div className="flex w-full gap-[40px]">
				{/* Left */}
				<div className="w-full">
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
							<h2 className="font-primary font-semibold text-[24px] leading-[em]">
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
