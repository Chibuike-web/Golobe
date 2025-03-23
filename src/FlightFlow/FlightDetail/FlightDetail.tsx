import { Checkbox } from "../../UiComponents";
import HeroImage from "../../assets/FlightListing/FlightDetail/HeroImage.png";
import First from "../../assets/FlightListing/FlightDetail/First.png";
import Second from "../../assets/FlightListing/FlightDetail/Second.png";
import Third from "../../assets/FlightListing/FlightDetail/Third.png";
import Fourth from "../../assets/FlightListing/FlightDetail/Fourth.png";
import Fifth from "../../assets/FlightListing/FlightDetail/Fifth.png";
import Sixth from "../../assets/FlightListing/FlightDetail/Sixth.png";
import Seventh from "../../assets/FlightListing/FlightDetail/Seventh.png";
import Eighth from "../../assets/FlightListing/FlightDetail/Eighth.png";
import Nineth from "../../assets/FlightListing/FlightDetail/Nineth.png";
import styles from "./FlightDetail.module.css";
import Emirates from "../../assets/FlightListing/Emirates.png";
import FlyDubai from "../../assets/FlightListing/FlyDubai.png";
import Qatar from "../../assets/FlightListing/Qatar.png";

const imageImports = [First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth, Nineth];

import {
	AirlineSeatIcon,
	AirplaneIcon,
	FoodIcon,
	HeartIcon,
	LocationIcon,
	RightArrowIcon,
	ShareIcon,
	TimeIcon,
	WifiIcon,
} from "../../assets/icons";

export default function FlightDetail() {
	return (
		<div className="flex flex-col px-8 bg-[#FAFBFC]">
			<HeroSection />
		</div>
	);
}

export type CardType = {
	id?: number;
	flightType: string;
	flightDate: string;
	duration: string;
	airline: string;
	airplane: string;
	airlineLogo: string;
	flightStart: string;
	flightStartTime: string;
	flightEnd: string;
	flightEndTime: string;
	gap?: string;
};

const cardData: CardType[] = [
	{
		id: 1,
		flightType: "Return",
		flightDate: "Wed, Dec 8",
		duration: "2h 28m",
		airline: "Emirates",
		airplane: "Airbus A320",
		airlineLogo: Emirates,
		flightStart: "Newark(EWR)",
		flightStartTime: "12:00pm",
		flightEnd: "Newark(EWR)",
		flightEndTime: "12:00pm",
	},
	{
		id: 2,
		flightType: "Return",
		flightDate: "Wed, Dec 8",
		duration: "2h 28m",
		airline: "FlyDubai",
		airplane: "Airbus A320",
		airlineLogo: FlyDubai,
		flightStart: "Newark(EWR)",
		flightStartTime: "12:00pm",
		flightEnd: "Newark(EWR)",
		flightEndTime: "12:00pm",
	},
	{
		id: 3,
		flightType: "Return",
		flightDate: "Wed, Dec 8",
		duration: "2h 28m",
		airline: "Qatar",
		airplane: "Airbus A320",
		airlineLogo: Qatar,
		flightStart: "Newark(EWR)",
		flightStartTime: "12:00pm",
		flightEnd: "Newark(EWR)",
		flightEndTime: "12:00pm",
	},
];

const HeroSection = () => {
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
			<figure className="rounded-[12px] mt-8 relative overflow-hidden h-[395px]">
				<img src={HeroImage} alt="Hero Image" className="absolute top-[-140px]" />
			</figure>
			<div className="mt-10">
				<div className="flex justify-between items-center">
					<h2 className="font-primary font-bold text-[24px]">Basic Economy Features</h2>
					<div className="flex gap-6 items-center">
						<Checkbox
							id={1}
							title={"Economy"}
							checkedColor="#8DD3BB"
							className={`${styles.checkbox}`}
						/>
						<Checkbox
							id={2}
							title={"First Class"}
							checkedColor="#8DD3BB"
							className={`${styles.checkbox}`}
						/>
						<Checkbox
							id={3}
							title={"Business Class"}
							checkedColor="#8DD3BB"
							className={`${styles.checkbox}`}
						/>
					</div>
				</div>
				<figure className="flex gap-[19px] mt-[20px]">
					{imageImports.map((image) => (
						<img src={image} alt={image} className="w-full max-w-[120px] rounded-[12px]" />
					))}
				</figure>
			</div>
			<div className="flex flex-col justify-between bg-mintGreen p-6 rounded-[8px] w-full mt-10">
				<h2 className="font-primary font-bold text-[24px] mb-4">Emirates Airlines Policies</h2>
				<div className="flex gap-5 ">
					<div className="flex items-center gap-4">
						<TimeIcon />
						<p className="font-semibold opacity-75">
							Pre-flight cleaning, installation of cabin HEPA filters.
						</p>
					</div>
					<div className="flex items-center gap-4">
						<TimeIcon />
						<p className="font-semibold opacity-75">
							Pre-flight cleaning, installation of cabin HEPA filters.
						</p>
					</div>
				</div>
			</div>
			{/* Cards Container */}
			<div className="flex flex-col gap-8 mt-8">
				{cardData.map(
					({
						id,
						flightType,
						flightDate,
						duration,
						airline,
						airlineLogo,
						airplane,
						flightStart,
						flightStartTime,
						flightEnd,
						flightEndTime,
					}: CardType) => (
						<Card
							key={id}
							id={id}
							flightType={flightType}
							flightDate={flightDate}
							duration={duration}
							airline={airline}
							airlineLogo={airlineLogo}
							airplane={airplane}
							flightStart={flightStart}
							flightStartTime={flightStartTime}
							flightEnd={flightEnd}
							flightEndTime={flightEndTime}
						/>
					)
				)}
			</div>
		</div>
	);
};

export const Card = ({
	id,
	flightType,
	flightDate,
	duration,
	airline,
	airlineLogo,
	airplane,
	flightStart,
	flightStartTime,
	flightEnd,
	flightEndTime,
	gap = "80px",
}: CardType) => {
	return (
		<div
			id={`card-${id}`}
			className="flex flex-col items-center w-full py-8 px-6 rounded-[12px]"
			style={{ boxShadow: "0px 4px 16px rgba(17, 34, 27, 0.05)" }}
		>
			{/* Top row */}
			<div className="w-full flex justify-between">
				{/* Left */}
				<div className="flex items-center">
					<p className="font-primary font-bold text-[20px] text-blackishGreen">
						{flightType} {flightDate}
					</p>
				</div>
				{/* Right */}
				<p className="text-blackishGreen opacity-75 text-[20px] font-medium">{duration}</p>
			</div>

			{/* Middle row */}
			<div className="w-full flex justify-between items-center mt-6 mb-10">
				{/* Left */}
				<div className="flex items-center gap-6 px-8 py-4 border-[0.5px] border-mintGreen rounded-[8px] ">
					<img src={airlineLogo} alt="Emirates Logo" className="w-full max-w-[64px]" />
					<div>
						<h2 className="font-semibold text-[24px] text-blackishGreen leading-[29px] mb-[8px]">
							{airline}
						</h2>
						<p className="font-medium text-[14px] opacity-60 leading-[17px]">{airplane}</p>
					</div>
				</div>
				{/* Right */}
				<div className="flex items-center gap-6">
					<AirplaneIcon />
					<span className="block h-12 w-[1px] bg-[#D7E2EE]"></span>
					<WifiIcon />
					<span className="block h-12 w-[1px] bg-[#D7E2EE]"></span>
					<TimeIcon />
					<span className="block h-12 w-[1px] bg-[#D7E2EE]"></span>
					<FoodIcon />
					<span className="block h-12 w-[1px] bg-[#D7E2EE]"></span>
					<AirlineSeatIcon />
				</div>
			</div>
			{/* Last row */}
			<div className="flex w-max" style={{ gap }}>
				<div className="flex items-center gap-4">
					<h4 className="font-semibold text-[24px] text-blackishGreen leading-[29px]">
						{flightStartTime}
					</h4>
					<p className="leading-[17px] font-medium opacity-60">{flightStart}</p>
				</div>
				<div className="flex items-center gap-6">
					<div className="flex items-center">
						<span className="block bg-blackishGreen rounded-full w-[10px] h-[10px] flex-shrink-0"></span>
						<span className="w-[36px] h-[1px] block bg-blackishGreen"></span>
					</div>
					<AirplaneIcon width="48px" />
					<div className="flex items-center">
						<span className="w-[36px] h-[1px] block bg-blackishGreen"></span>
						<span className="block bg-blackishGreen rounded-full w-[10px] h-[10px] flex-shrink-0"></span>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<h4 className="font-semibold text-[24px] text-blackishGreen leading-[29px]">
						{flightEndTime}
					</h4>
					<p className="leading-[17px] font-medium opacity-60">{flightEnd}</p>
				</div>
			</div>
		</div>
	);
};
