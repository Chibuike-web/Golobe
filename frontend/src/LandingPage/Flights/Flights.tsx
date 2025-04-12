import Istanbul from "../../assets/LandingPage/Istanbul.png";
import Sydney from "../../assets/LandingPage/Sydney.png";
import Baku from "../../assets/LandingPage/Baku.png";
import Male from "../../assets/LandingPage/Male.png";
import Paris from "../../assets/LandingPage/Paris.png";
import NewYork from "../../assets/LandingPage/NewYork.png";
import London from "../../assets/LandingPage/London.png";
import Tokyo from "../../assets/LandingPage/Tokyo.png";
import Dubai from "../../assets/LandingPage/Dubai.png";
import { PaperPlaneIcon } from "../../assets/Icons";
import styles from "./Flights.module.css";

type TravelOption = {
	destination: string;
	services: string[];
	image: string;
};

const travelOptions: TravelOption[] = [
	{
		destination: "Istanbul, Turkey",
		services: ["Flights", "Hotels", "Resorts"],
		image: Istanbul,
	},
	{
		destination: "Sydney, Australia",
		services: ["Flights", "Hotels", "Resorts"],
		image: Sydney,
	},
	{
		destination: "Baku, Azerbaijan",
		services: ["Flights", "Hotels", "Resorts"],
		image: Baku,
	},
	{
		destination: "Malé, Maldives",
		services: ["Flights", "Hotels", "Resorts"],
		image: Male,
	},
	{
		destination: "Paris, France",
		services: ["Flights", "Hotels", "Resorts"],
		image: Paris,
	},
	{
		destination: "New York, US",
		services: ["Flights", "Hotels", "Resorts"],
		image: NewYork,
	},
	{
		destination: "London, UK",
		services: ["Flights", "Hotels", "Resorts"],
		image: London,
	},
	{
		destination: "Tokyo, Japan",
		services: ["Flights", "Hotels", "Resorts"],
		image: Tokyo,
	},
	{
		destination: "Dubai, UAE",
		services: ["Flights", "Hotels", "Resorts"],
		image: Dubai,
	},
];

// Main component
export default function Flights() {
	return (
		<section className="mt-20 md:mt-40 w-full max-w-[77rem] mx-auto px-4">
			<header className="mb-10 flex justify-between items-center md:flex-col md:items-start md:gap-4">
				<div>
					<h2 className="font-semibold text-[2rem] md:text-[1.8rem]">Plan Your Perfect Trip</h2>
					<p className="opacity-75">
						Search flights & places to hire in our most popular destinations
					</p>
				</div>
				<button className="text-[14px] px-4 py-3 rounded-[0.25rem] border-mintGreen border-[0.0625rem]">
					See more places
				</button>
			</header>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(24.33rem,1fr))] md:grid-cols-1 place-items-center gap-4 w-full">
				{travelOptions.map(({ destination, services, image }, index) => (
					<FlightCard key={index} destination={destination} services={services} image={image} />
				))}
			</div>
			<FlightBox />
		</section>
	);
}

// Props type for FlightCard component
type FlightCardProps = {
	destination: string;
	services: string[];
	image: string;
};

// FlightCard component
const FlightCard = ({ destination, services, image }: FlightCardProps) => {
	return (
		<article
			className="flight-card flex items-center gap-4 md:gap-2 p-4 rounded-2xl w-full bg-white shadow-[0rem_0.25rem_1rem_rgba(17,34,17,0.05)]"
			aria-label={`Flight details for ${destination}`}
		>
			<img src={image} alt={`View of ${destination}`} className="destination-image" />
			<div className="flex flex-col w-full gap-2">
				<h3 className="font-semibold opacity-70 text-lg md:text-[1rem]">{destination}</h3>
				<ul className="flex items-center text-[0.875rem] md:text-[0.75rem] font-medium gap-[0.5rem] w-full">
					{services.map((service, index) => (
						<li key={index} className="flex gap-[0.5rem] items-center">
							<span>{service}</span>
							{index < services.length - 1 && <span aria-hidden="true">•</span>}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
};

// FlightBox component
const FlightBox = () => {
	return (
		<aside className="flex flex-wrap gap-6 my-20">
			<div className={styles.flights}>
				<h2 className="font-primary font-bold text-[2.5rem] mb-2">Flights</h2>
				<p className="w-full max-w-[24.3125rem] text-center">
					Search Flights & Places Hire to our most popular destinations
				</p>
				<button className="text-blackishGreen bg-mintGreen flex items-center gap-1 p-4 mt-4 rounded-[0.25rem] ">
					<PaperPlaneIcon />
					<span>Show Flights</span>
				</button>
			</div>
			<div className={styles.hotels}>
				<h2 className="font-primary font-bold text-[2.5rem] mb-2">Hotels</h2>
				<p className="w-full max-w-[24.3125rem] text-center">
					Search hotels & Places Hire to our most popular destinations
				</p>
				<button className="text-blackishGreen bg-mintGreen flex items-center gap-1 p-4 mt-4 rounded-[0.25rem] ">
					<PaperPlaneIcon />
					<span>Show Hotels</span>
				</button>
			</div>
		</aside>
	);
};
