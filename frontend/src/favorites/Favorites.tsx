import { useState } from "react";
import { useFlightFavorites } from "../store/useFlightFavorites";
import { FlightListCard } from "../flight-flow/flight-lists/FlightLists";
import { Flight } from "../flight-flow/flight-lists/types";
import { useHotelFavorites } from "../store/useHotelFavorites";
import { HotelListCardProps } from "../hotel-flow/hotel-lists/types";
import { HotelListCard } from "../hotel-flow/hotel-lists/HotelLists";

export default function Favorites() {
	const [selectedTab, setSelectedTab] = useState<string>("Flights");
	const handleClick = (type: string) => {
		setSelectedTab(type);
	};
	return (
		<main className="w-full mx-auto max-w-[77rem] mt-12 lg:px-6">
			<h1 className="text-[2rem] font-primary font-bold">Favorites</h1>
			<div className="hide-scrollbar mt-6 mb-10 flex items-center gap-4 py-4 px-3 bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)] overflow-auto">
				{tabData.map(({ type }, index) => (
					<div key={type} className="flex w-full gap-4">
						<Tabs key={type} type={type} selectedTab={selectedTab} handleClick={handleClick} />
						{index < tabData.length - 1 && (
							<span className="min-h-full w-[1px] bg-blackishGreen/10 block" />
						)}
					</div>
				))}
			</div>

			{selectedTab === "Flights" ? <FlightFavorites /> : <HotelFavorites />}
		</main>
	);
}

const tabData: { type: string }[] = [
	{
		type: "Flights",
	},
	{
		type: "Places",
	},
];

const Tabs = ({
	type,
	selectedTab,
	handleClick,
}: {
	type: string;
	selectedTab: string;
	handleClick: (id: string) => void;
}) => {
	const { favorites: flightFavorites } = useFlightFavorites();
	const { favorites: hotelFavorites } = useHotelFavorites();
	return (
		<button className="relative w-full" onClick={() => handleClick(type)}>
			<div className="  flex flex-col items-start gap-[8px] w-full min-w-[160px]">
				<h3 className="font-semibold">{type}</h3>
				<p className="text-gray-400">
					{" "}
					{type === "Flights" ? flightFavorites.length : hotelFavorites.length} marked
				</p>
			</div>

			{selectedTab === type && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-[-1rem]"></div>
			)}
		</button>
	);
};

const FlightFavorites = () => {
	const { favorites } = useFlightFavorites();
	return (
		<>
			{favorites.length > 0 && (
				<div className="w-full">
					{favorites.map((item: Flight) => (
						<FlightListCard key={item.id} {...item} />
					))}
				</div>
			)}
		</>
	);
};

const HotelFavorites = () => {
	const { favorites } = useHotelFavorites();
	return (
		<>
			{favorites.length > 0 && (
				<div className="w-full flex flex-col gap-6">
					{favorites.map((item: HotelListCardProps) => (
						<HotelListCard key={item.id} {...item} />
					))}
				</div>
			)}
		</>
	);
};
