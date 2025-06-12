import { useMemo, useState } from "react";
import { DownArrowIcon, HarmburgerIcon, HeartIcon } from "../../Icons";
import { flightOptions } from "./utils";
import { Flight } from "./types";
import { Link } from "react-router-dom";

type TabsProps = {
	id: number;
	type: string;
	price: number;
	time: string;
};
const TabData: TabsProps[] = [
	{
		id: 1,
		type: "Cheapest",
		price: 99,
		time: "2h 18m",
	},
	{
		id: 2,
		type: "Best",
		price: 99,
		time: "2h 18m",
	},
	{
		id: 3,
		type: "Quickest",
		price: 99,
		time: "2h 18m",
	},
];

export default function FlightLists() {
	const [selectedTab, setSelectedTab] = useState<string>("Cheapest");
	const [isShowMore, setIsShowMore] = useState(false);
	const handleClick = (type: string) => {
		setSelectedTab(type);
	};

	const filteredLists = useMemo(() => {
		return selectedTab === "Cheapest"
			? flightOptions.filter((flight) => flight.category === "Cheap")
			: selectedTab === "Best"
			? flightOptions.filter((flight) => flight.category === "Best")
			: selectedTab === "Quickest"
			? flightOptions.filter((flight) => flight.category === "Quick")
			: [];
	}, [selectedTab, flightOptions]);

	const displayedFlights = isShowMore ? filteredLists : filteredLists.slice(0, 4);

	return (
		<div className="flex flex-col gap-6 w-full">
			<div className="hide-scrollbar flex overflow-auto items-center gap-4 mt-[65px] lg:mt-0 px-3 bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
				{TabData.map((tab: TabsProps) => (
					<Tabs key={tab.id} {...tab} selectedTab={selectedTab} handleClick={handleClick} />
				))}
				<div className="flex items-center lg:ml-auto gap-2 w-max">
					<HarmburgerIcon />
					<p className="text-[14px] text-blackishGreen lg:hidden text-nowrap">Other sort</p>
				</div>
			</div>
			<div className="flex justify-between md:flex-col md:gap-6">
				<p className="text-[14px] font-semibold text-blackishGreen">
					Showing {displayedFlights.length} of{" "}
					<span className="text-slamon">{flightOptions.length}</span>
				</p>
				<p className="flex items-center gap-[4px] text-[14px] md:justify-between md:w-full">
					Sort by
					<span className="flex  text-[14px] gap-[4px] items-center font-semibold">
						Recommended <DownArrowIcon />
					</span>
				</p>
			</div>
			<div className="flex flex-col gap-8">
				{displayedFlights.map((item: Flight) => (
					<FlightListCard key={item.id} flight={item} />
				))}
				{displayedFlights.length > 5 && (
					<button
						className="flex bg-blackishGreen justify-center items-center w-full font-semibold text-[14px] text-white rounded-[4px] py-4"
						onClick={() => setIsShowMore(!isShowMore)}
					>
						{isShowMore ? "Show less result" : "Show more results"}
					</button>
				)}
			</div>
		</div>
	);
}

const Tabs = ({
	id,
	type,
	price,
	time,
	selectedTab,
	handleClick,
}: {
	id: number;
	type: string;
	price: number;
	time: string;
	selectedTab: string;
	handleClick: (type: string) => void;
}) => {
	return (
		<button className="relative py-4 w-full" onClick={() => handleClick(type)}>
			<div className="px-[12px] flex flex-col items-start gap-[8px] w-full min-w-[160px]">
				<h3 className="font-semibold text-blackishGreen text-[16px]">{type}</h3>
				<div className="text-blackishGreen opacity-40 text-[14px]">
					<span>${price}</span> . <span>{time}</span>
				</div>
			</div>
			{selectedTab === type && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-0"></div>
			)}
		</button>
	);
};

const FlightListCard = ({ flight }: { flight: Flight }) => {
	return (
		<div
			className="flex lg:flex-col justify-between w-full bg-white py-6 px-4 text-blackishGreen rounded-[12px]"
			style={{ boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)" }}
		>
			<figure>
				<img src={flight.image} alt="Flight" className="w-full h-auto rounded-md" />
			</figure>

			<div className="flex flex-col w-full px-6 md:px-0 gap-4">
				{/* Top Row */}
				<div className="flex justify-between">
					{/* Left content */}
					<div className="flex items-center gap-2 py-[6px]">
						<span className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium">
							{flight.rating.toFixed(1)}
						</span>
						<p className="text-[12px] font-medium">
							<strong>{flight.reviewSummary}</strong> {flight.reviewCount} reviews
						</p>
					</div>

					{/* Right content */}
					<div className="flex flex-col items-end">
						<p className="text-[12px] opacity-75 leading-[15px]">starting from</p>
						<h2 className="text-[24px] font-bold text-slamon leading-[29px]">
							{flight.currency === "USD" ? "$" : ""}
							{flight.price}
						</h2>
					</div>
				</div>

				{/* Deals */}
				<div className="flex flex-col gap-4">
					{flight.deals.map((deal, index) => (
						<div key={index} className="flex gap-10 md:gap-6">
							<label className="flex gap-3 items-start cursor-pointer">
								<input type="checkbox" className="accent-mintGreen mt-1" />
								<div className="flex flex-col gap-1">
									<p className="leading-[20px] font-semibold">
										{deal.departureTime} - {deal.arrivalTime}
									</p>
									<p className="text-[14px] leading-[17px] opacity-40">{deal.airline}</p>
								</div>
							</label>
							<p className="font-semibold text-[14px]">{deal.nonStop ? "non stop" : "1+ stops"}</p>
							<div className="flex flex-col gap-1">
								<p className="leading-[20px] font-semibold">{deal.duration}</p>
								<p className="text-[14px] leading-[17px] opacity-40">{deal.route}</p>
							</div>
						</div>
					))}
				</div>

				{/* Divider */}
				<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>

				{/* Bottom Row */}
				<div className="flex gap-4">
					<button type="button" className="p-[14px] border-mintGreen border-[1px] rounded-[4px]">
						<HeartIcon />
					</button>
					<Link
						to={`/flightlisting/flightdetail/${flight.id}`}
						className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] rounded-[4px]"
					>
						View Deals
					</Link>
				</div>
			</div>
		</div>
	);
};
