import { AiIcon, HeartIcon, LocationIcon, RightArrowIcon, ShareIcon } from "../../assets/icons";
import HeroImage1 from "../../assets/HotelListing/HeroImage1.png";
import HeroImage2 from "../../assets/HotelListing/HeroImage2.png";
import HeroImage3 from "../../assets/HotelListing/HeroImage3.png";
import HeroImage4 from "../../assets/HotelListing/HeroImage4.png";
import HeroImage5 from "../../assets/HotelListing/HeroImage5.png";

export default function HotelDetail() {
	return (
		<div className="w-full mx-auto max-w-[77rem] mt-12">
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
							<div className="flex items-center gap-2">
								<span className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium">
									4.2
								</span>
								<p className="text-[12px] font-medium">
									<strong>Very Good</strong> 371 reviews
								</p>
							</div>
						</div>
					</div>
					{/* Right */}
					<div className="flex flex-col items-end gap-4">
						<h2 className="text-[32px] flex items-end font-bold text-slamon leading-[29px]">
							$240 <span className="text-[14px] leading-[19px]">/night</span>
						</h2>
						<div className="flex gap-4">
							<button
								type="button"
								className="p-[14px] border-mintGreen border-[1px] rounded-[4px]"
							>
								<HeartIcon />
							</button>
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
								Book now
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative grid grid-cols-4 grid-rows-2 gap-[8px] rounded-[12px] overflow-hidden mt-10">
				<img src={HeroImage1} className="max-w-[612px] w-full row-span-2 col-span-2" />
				<img src={HeroImage2} className="max-w-[302px] w-full" />
				<img src={HeroImage3} className="max-w-[302px] w-full" />
				<img src={HeroImage4} className="max-w-[302px] w-full" />
				<img src={HeroImage5} className="max-w-[302px] w-full" />
				<button
					type="button"
					className="absolute bottom-[16px] right-[16px] bg-mintGreen font-semibold text-[14px] py-[16px] px-[16px] rounded-[4px] w-max"
				>
					View all photos
				</button>
			</div>
			<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-16"></span>
			<div>
				<h3>Overview</h3>
				<p>
					Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has
					risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs
					Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With
					its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms
					including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace
					with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus
					Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite
					categories at various sizes with city and Bosphorus view, as well as 68 separate luxury
					suites, are offered to its special guests as a wide variety of selection.
				</p>
				<div className="flex gap-4 mt-8">
					<div className="bg-mintGreen rounded-[12px] pl-4 py-4 pr-16">
						<h2 className="font-bold font-primary text-[32px] mb-[28px] text-blackishGreen">4.2</h2>
						<p className="font-bold text-blackishGreen mb-[4px]">Very good</p>
						<p className="text-[14px] text-blackishGreen">371 reviews</p>
					</div>
					{["Near park", "Near nightlife", "Near theater", "Clean Hotel"].map((item, index) => (
						<Card key={index} item={item} />
					))}
				</div>
				<span className="block h-[0.5px] w-full bg-blackishGreen/25 my-16"></span>
			</div>
		</div>
	);
}

const Card = ({ item }: { item: string }) => {
	return (
		<div className="bg-white border-[1px] border-mintGreen rounded-[12px] pl-4 py-4 pr-16">
			<AiIcon className="mb-[61px]" />
			<p className="font-medium">{item}</p>
		</div>
	);
};
