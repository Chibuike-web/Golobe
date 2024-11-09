import Istanbul from "../../assets/Istanbul.png";
import Sydney from "../../assets/Sydney.png";
import Baku from "../../assets/Baku.png";
import Male from "../../assets/Male.png";
import Paris from "../../assets/Paris.png";
import NewYork from "../../assets/NewYork.png";
import London from "../../assets/London.png";
import Tokyo from "../../assets/Tokyo.png";
import Dubai from "../../assets/Dubai.png";
import { PaperPlaneIcon } from "../../assets/icons";
import styles from "./flights.module.css";

// Define a type for travel options
type TravelOption = {
	destination: string;
	services: string[];
	image: string;
};

// Array of travel options
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
		<section className="mt-20  w-full max-w-[1232px]">
			<header className="mb-10 flex justify-between items-center">
				<div>
					<h2 className="font-semibold text-[2rem]">Plan Your Perfect Trip</h2>
					<p className="opacity-75">
						Search flights & places to hire in our most popular destinations
					</p>
				</div>
				<button className="text-[14px] px-4 py-3 rounded-[4px] text-blackishGreen border-mintGreen border-[1px]">
					See more places
				</button>
			</header>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(389.33px,_1fr))] place-items-center gap-4">
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
const FlightCard: React.FC<FlightCardProps> = ({ destination, services, image }) => {
	return (
		<article
			className="flight-card flex items-center gap-4 p-4 rounded-2xl w-full bg-white"
			style={{ boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)" }}
			aria-label={`Flight details for ${destination}`}
		>
			<img src={image} alt={`View of ${destination}`} className="destination-image" />
			<div className="flex flex-col w-full gap-2">
				<h3 className="text-blackishGreen font-semibold opacity-70 text-lg">{destination}</h3>
				<ul className="flex items-center text-[14px] font-medium gap-2">
					{services.map((service, index) => (
						<li key={index} className="flex gap-2 items-center">
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
const FlightBox: React.FC = () => {
	return (
		<aside className="flex flex-wrap gap-6 my-20">
			<div className={styles.flights}>
				<h2 className="font-primary font-bold text-[2.5rem] mb-2">Flights</h2>
				<p className="w-full max-w-[389px] text-center">
					Search Flights & Places Hire to our most popular destinations
				</p>
				<button className="text-blackishGreen bg-mintGreen flex items-center gap-1 p-4 mt-4 rounded-[4px] ">
					<PaperPlaneIcon />
					<span>Show Flights</span>
				</button>
			</div>
			<div className={styles.hotels}>
				<h2 className="font-primary font-bold text-[2.5rem] mb-2">Hotels</h2>
				<p className="w-full max-w-[389px] text-center">
					Search hotels & Places Hire to our most popular destinations
				</p>
				<button className="text-blackishGreen bg-mintGreen flex items-center gap-1 p-4 mt-4 rounded-[4px] ">
					<PaperPlaneIcon />
					<span>Show Hotels</span>
				</button>
			</div>
		</aside>
	);
};
