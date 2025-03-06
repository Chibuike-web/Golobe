import { HeartIcon, LocationIcon, RightArrowIcon, ShareIcon } from "../../assets/icons";
import Navbar from "../Navbar/Navbar";

export default function BookingTicket() {
	return (
		<div>
			<Navbar />
			<div className="mx-auto w-full max-w-[1280px] py-6 flex flex-col justify-between h-max lg:px-4 md:py-4">
				<div className="w-full flex flex-col gap-8">
					<div className="flex items-center">
						<p className="text-slamon text-[14px] font-medium">Turkey</p> <RightArrowIcon />
						<p className="text-slamon text-[14px] font-medium">Istanbul</p> <RightArrowIcon />
						<p className="text-[14px] font-medium opacity-75">CVK Park Bosphorus Hotel Istanbul</p>
					</div>
					<div className="flex justify-between w-full items-end">
						{/* Left */}
						<div>
							<h2 className="font-primary font-bold text-2xl mb-4">
								CVK Park Bosphorus Hotel Istanbul
							</h2>
							<div>
								<div className="flex items-center mb-[8px]">
									<LocationIcon />{" "}
									<p className="font-medium text-[14px] opacity-75">
										Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
									</p>
								</div>
							</div>
						</div>
						{/* Right */}
						<div className="flex flex-col items-end gap-4">
							<h2 className="text-[32px] font-bold text-slamon leading-[39px]">$240</h2>
							<div className="flex gap-4">
								<button
									type="button"
									className="p-[14px] border-mintGreen border-[1px] rounded-[4px]"
								>
									<ShareIcon />
								</button>
								<button
									type="button"
									className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] py-[16px] px-[40px] rounded-[4px]"
								>
									Download
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
