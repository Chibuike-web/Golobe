import Herosection from "./HeroSection/HeroSection";
import Forest from "../assets/FlightSearch/Forest.png";
import Trees from "../assets/FlightSearch/Trees.png";
import Ocean from "../assets/FlightSearch/Ocean.png";
import Beach from "../assets/FlightSearch/Beach.png";
import Bookings from "./Bookings/Bookings";
import Istanbul from "../assets/HotelSearch/Istanbul.png";
import Sydney from "../assets/HotelSearch/Sydney.png";
import Baku from "../assets/HotelSearch/Baku.png";
import Maldives from "../assets/HotelSearch/Maldives.png";

type HotelOption = {
	destination: string;
	image: string;
};

const hotelOptions: HotelOption[] = [
	{
		destination: "Istanbul, Turkey",
		image: Istanbul,
	},
	{
		destination: "Sydney, Australia",
		image: Sydney,
	},
	{
		destination: "Baku, Azerbaijan",
		image: Baku,
	},
	{
		destination: "Malé, Maldives",
		image: Maldives,
	},
];

export default function HotelSearch() {
	return (
		<div className="flex flex-col">
			<Herosection />
			<section className=" mx-auto max-w-[77rem] mt-20 w-full md:justify-items-center">
				<div className="grid grid-cols-[repeat(auto-fill,minmax(14.875rem,max-content))] gap-x-[5rem] justify-between gap-y-[4rem] xl:px-6">
					{hotelOptions.map(({ destination, image }: HotelOption) => (
						<HotelCard destination={destination} image={image} />
					))}
				</div>
			</section>
			<Bookings />
			<section className="mx-auto max-w-[77rem] mt-20 flex flex-col w-full">
				<header className="w-full mb-[1.5rem] flex justify-between items-center lg:px-4 md:flex-col md:items-start">
					<div>
						<h2 className="text-[2rem] mb-[1rem]">Fall into travel</h2>
						<p className="w-full max-w-[53.188rem]">
							Going somewhere to celebrate this season? Whether you’re going home or somewhere to
							roam, we’ve got the travel tools to get you to your destination.
						</p>
					</div>
					<button
						className="text-[0.875rem] px-[1rem] py-[0.75rem] rounded-[0.25rem] text-blackishGreen border-mintGreen border-[1px]"
						aria-label="See all offers"
					>
						See all
					</button>
				</header>

				<div className="grid grid-cols-[1fr_318px_318px] grid-rows-2 gap-6 lg:grid-cols-1 lg:px-4">
					<article className="w-full row-span-2 flex flex-col p-[1.5rem] bg-mintGreen rounded-[1.25rem]">
						<header className="flex justify-between items-start mb-[1.5rem]">
							<h2 className="font-primary font-bold text-[2.5rem] leading-[3.188rem] max-w-[22.688rem] w-full">
								Backpacking Sri Lanka
							</h2>
							<div className="bg-white flex flex-col p-[0.5rem] items-center rounded-[0.5rem]">
								<span className="text-[0.875rem] text-blackishGreen">From</span>
								<span className="text-[1.25rem] font-semibold text-blackishGreen">$700</span>
							</div>
						</header>
						<p className="text-[0.875rem] text-blackishGreen ">
							Traveling is a unique experience as it's the best way to unplug from the pushes and
							pulls of daily life. It helps us to forget about our problems, frustrations, and fears
							at home. During our journey, we experience life in different ways. We explore new
							places, cultures, cuisines, traditions, and ways of living.
						</p>
						<button className="w-full bg-white py-[0.938rem] rounded-[0.25rem] mt-auto lg:mt-[7.5rem]">
							Book Flight
						</button>
					</article>

					<figure className="w-full">
						<img src={Forest} alt="A serene forest view" className="w-full" />
					</figure>
					<figure className="w-full">
						<img src={Ocean} alt="The beautiful ocean waves" className="w-full" />
					</figure>
					<figure className="w-full">
						<img src={Trees} alt="Lush green trees" className="w-full" />
					</figure>
					<figure className="w-full">
						<img src={Beach} alt="Sunny beach" className="w-full" />
					</figure>
				</div>
			</section>
		</div>
	);
}

const HotelCard = ({ destination, image }: HotelOption) => {
	return (
		<article
			className="flex items-center gap-4 w-full"
			aria-label={`Hotel details for ${destination}`}
		>
			<img
				src={image}
				alt={`View of ${destination}`}
				className="destination-image w-full max-w-[5.625rem]"
			/>
			<div className="flex flex-col w-full gap-2">
				<h3 className="text-blackishGreen font-semibold opacity-70 text-[1rem]">{destination}</h3>
			</div>
		</article>
	);
};
