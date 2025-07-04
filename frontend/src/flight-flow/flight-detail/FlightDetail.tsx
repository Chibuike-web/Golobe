import { Checkbox } from "../../Components";
import HeroImage from "../../assets/flight-listing/flight-detail/HeroImage.png";
import First from "../../assets/flight-listing/flight-detail/First.png";
import Second from "../../assets/flight-listing/flight-detail/Second.png";
import Third from "../../assets/flight-listing/flight-detail/Third.png";
import Fourth from "../../assets/flight-listing/flight-detail/Fourth.png";
import Fifth from "../../assets/flight-listing/flight-detail/Fifth.png";
import Sixth from "../../assets/flight-listing/flight-detail/Sixth.png";
import Seventh from "../../assets/flight-listing/flight-detail/Seventh.png";
import Eighth from "../../assets/flight-listing/flight-detail/Eighth.png";
import Nineth from "../../assets/flight-listing/flight-detail/Nineth.png";
import styles from "./FlightDetail.module.css";
import Emirates from "../../assets/flight-listing/Emirates.png";
import FlyDubai from "../../assets/flight-listing/FlyDubai.png";
import Qatar from "../../assets/flight-listing/Qatar.png";

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
} from "../../Icons";
import { Link, useParams } from "react-router-dom";
import { flightOptions } from "../flight-lists/utils";

export default function FlightDetail() {
	return (
		<div className="flex flex-col px-8 lg:px-4 bg-[#FAFBFC]">
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
	const { id } = useParams();

	const flight = flightOptions.find((flight) => flight.id === id);
	if (!flight) return <p>No flight available</p>;
	return (
		<div className="w-full mx-auto max-w-[77rem] mt-12">
			<div className="w-full flex flex-col gap-8">
				<div className="flex items-center">
					<p className="text-slamon text-[14px] font-medium">Turkey</p> <RightArrowIcon />
					<p className="text-slamon text-[14px] font-medium">Istanbul</p> <RightArrowIcon />
					<p className="text-[14px] font-medium opacity-75">CVK Park Bosphorus Hotel Istanbul</p>
				</div>
				<div className="flex md:flex-col justify-between w-full items-end md:items-start md:gap-6">
					{/* Left */}
					<div>
						<h2 className="font-primary font-bold text-2xl mb-4">{flight.name}</h2>
						<div>
							<div className="flex items-center mb-[8px]">
								<LocationIcon />
								<p className="font-medium text-[14px] opacity-75">
									Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
								</p>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium">
									{flight.rating}
								</span>
								<p className="text-[12px] font-medium">
									<strong>{flight.reviewSummary}</strong> {flight.reviewCount} reviews
								</p>
							</div>
						</div>
					</div>
					{/* Right */}
					<div className="flex flex-col md:justify-between md:w-full items-end md:items-start gap-4">
						<h2 className="text-[32px] font-bold text-slamon leading-[39px]">
							{flight.currency === "USD" ? "$" : ""}
							{flight.price}
						</h2>
						<div className="flex gap-4 md:w-full">
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
							<Link
								to={`/flightlisting/bookingdetail/${id}`}
								className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] py-[16px] px-[40px] rounded-[4px]"
							>
								Book now
							</Link>
						</div>
					</div>
				</div>
			</div>
			<figure className="rounded-[12px] mt-8 h-[395px] overflow-hidden ">
				<img src={HeroImage} alt="Hero Image" className="h-full object-cover w-full" />
			</figure>
			<div className="mt-10">
				<div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-4">
					<h2 className="font-primary font-bold text-[24px]">Basic Economy Features</h2>
					<div className="flex gap-6 items-center sm:flex-col sm:w-full sm:items-start">
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
				<figure className="hide-scrollbar flex gap-[19px] mt-[20px] overflow-y-auto">
					{imageImports.map((image, index) => (
						<img
							src={image}
							key={index}
							alt={image}
							className="w-full min-w-[120px] rounded-[12px]"
						/>
					))}
				</figure>
			</div>
			<div className="flex flex-col justify-between bg-mintGreen p-6 rounded-[8px] w-full mt-10">
				<h2 className="font-primary font-bold text-[24px] mb-4">Emirates Airlines Policies</h2>
				<div className="flex gap-5 md:flex-col ">
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
}: CardType) => {
	return (
		<div
			id={`card-${id}`}
			className="flex flex-col items-center w-full py-8 px-6 md:px-4 md:py-6 rounded-[12px]"
			style={{ boxShadow: "0px 4px 16px rgba(17, 34, 27, 0.05)" }}
		>
			<div className="w-full flex text-[20px] md:text-[16px] justify-between">
				<p className="font-primary font-bold text-blackishGreen">
					{flightType} {flightDate}
				</p>

				<p className="text-blackishGreen opacity-75  font-medium">{duration}</p>
			</div>

			<div className="w-full flex justify-between items-center mt-6 mb-10 lg:flex-col lg:gap-[20px]">
				<div className="flex items-center gap-6 px-8 py-4 border-[0.5px] border-mintGreen rounded-[8px] md:w-full">
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
			<div className="flex w-max lg:flex-col gap-[50px]">
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
