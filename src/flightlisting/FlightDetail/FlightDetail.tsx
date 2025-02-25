import { Navbar } from "../Herosection/Herosection";

import FooterSection from "../Footer/Footer";
import { HeartIcon, LocationIcon, RightArrowIcon, ShareIcon } from "../../assets/icons";

export default function FlightDetail() {
	return (
		<div className="flex flex-col px-8 bg-[#FAFBFC]">
			<Navbar />
			<HeroSection />
			<FooterSection />
		</div>
	);
}

const HeroSection = () => {
	return (
		<div className="w-full flex flex-col items-start gap-8 mx-auto max-w-[77rem] mt-12">
			<div className="flex items-center">
				<p className="text-slamon text-[14px] font-medium">Turkey</p> <RightArrowIcon />
				<p className="text-slamon text-[14px] font-medium">Istanbul</p> <RightArrowIcon />
				<p className="text-[14px] font-medium opacity-75">CVK Park Bosphorus Hotel Istanbul</p>
			</div>
			<div className="flex justify-between w-full items-end">
				{/* Left */}
				<div>
					<h2 className="font-primary font-bold text-2xl mb-4">Emirates A380 Airbus</h2>
					<div>
						<div className="flex items-center mb-[8px]">
							<LocationIcon />{" "}
							<p className="font-medium text-[14px] opacity-75">
								Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
							</p>
						</div>
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
				{/* Right */}
				<div className="flex flex-col items-end gap-4">
					<h2 className="text-[32px] font-bold text-slamon leading-[39px]">$240</h2>
					<div className="flex gap-4">
						<button type="button" className="p-[14px] border-mintGreen border-[1px] rounded-[4px]">
							<HeartIcon />
						</button>
						<button type="button" className="p-[14px] border-mintGreen border-[1px] rounded-[4px]">
							<ShareIcon />
						</button>
						<button
							type="button"
							className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] py-[16px] px-[40px] rounded-[4px]"
						>
							Book now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
