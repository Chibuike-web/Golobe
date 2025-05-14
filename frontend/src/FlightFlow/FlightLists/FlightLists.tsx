import { useState } from "react";
import { DownArrowIcon, HarmburgerIcon, HeartIcon } from "../../assets/Icons";
import Emirates from "../../assets/FlightListing/Emirates.png";
import FlyDubai from "../../assets/FlightListing/FlyDubai.png";
import Qatar from "../../assets/FlightListing/Qatar.png";
import Etihad from "../../assets/FlightListing/Etihad.png";
import styles from "./FlightLists.module.css";

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
	const [selectedTab, setSelectedTab] = useState<number>(1);
	const handleClick = (id: number) => {
		setSelectedTab(id);
	};
	return (
		<div className="flex flex-col gap-6 w-full">
			<div className="hide-scrollbar flex overflow-auto items-center gap-4 mt-[65px] lg:mt-0 px-3 bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
				{TabData.map(({ id, type, price, time }: TabsProps) => (
					<Tabs
						key={id}
						id={id}
						type={type}
						price={price}
						time={time}
						selectedTab={selectedTab}
						handleClick={handleClick}
					/>
				))}
				<div className="flex items-center lg:ml-auto gap-2 w-max">
					<HarmburgerIcon />
					<p className="text-[14px] text-blackishGreen lg:hidden text-nowrap">Other sort</p>
				</div>
			</div>
			<div className="flex justify-betwee md:flex-col md:gap-6">
				<p className="text-[14px] font-semibold text-blackishGreen">
					Showing 4 of <span className="text-slamon">257 places</span>
				</p>
				<p className="flex items-center gap-[4px] text-[14px] md:justify-between md:w-full">
					Sort by
					<span className="flex  text-[14px] gap-[4px] items-center font-semibold">
						Recommended <DownArrowIcon />
					</span>
				</p>
			</div>
			<div className="flex flex-col gap-8">
				<FlightListCard image={Emirates} />
				<FlightListCard image={FlyDubai} />
				<FlightListCard image={Qatar} />
				<FlightListCard image={Etihad} />
				<button className="flex bg-blackishGreen justify-center items-center w-full font-semibold text-[14px] text-white rounded-[4px] py-4">
					Show more results
				</button>
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
	selectedTab: number;
	handleClick: (id: number) => void;
}) => {
	return (
		<button className="relative py-4 w-full" onClick={() => handleClick(id)}>
			<div className="px-[12px] flex flex-col items-start gap-[8px] w-full min-w-[160px]">
				<h3 className="font-semibold text-blackishGreen text-[16px]">{type}</h3>
				<div className="text-blackishGreen opacity-40 text-[14px]">
					<span>${price}</span> . <span>{time}</span>
				</div>
			</div>
			{selectedTab === id && <div className="h-[4px] w-full bg-mintGreen absolute bottom-0"></div>}
		</button>
	);
};

const FlightListCard = ({ image }: { image: string }) => {
	return (
		<div
			className="flex lg:flex-col justify-between w-full bg-white py-6 px-4 text-blackishGreen rounded-[12px]"
			style={{ boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)" }}
		>
			<figure>
				<img src={image} alt="Flight image" />
			</figure>
			<div className="flex flex-col w-full px-6 md:px-0 gap-4">
				{/* Top Row */}
				<div className="flex justify-between">
					{/* Left content */}
					<div className="flex items-center gap-2 py-[6px]">
						<span className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium">
							4.2
						</span>
						<p className="text-[12px] font-medium">
							<strong>Very Good</strong> 54 reviews
						</p>
					</div>

					{/* Right content */}
					<div className="flex flex-col items-end">
						<p className="text-[12px] opacity-75 leading-[15px]">starting from</p>
						<h2 className="text-[24px] font-bold text-slamon leading-[29px]">$104</h2>
					</div>
				</div>
				{/* Middle Row */}
				<div>
					{/* First content */}
					<div className="flex gap-10 md:gap-6">
						<label htmlFor="time" className="flex gap-3 items-start">
							<div className="relative cursor-pointer">
								<input type="checkbox" name="time" className={`${styles.checkbox}`} />
							</div>
							<div className="flex flex-col gap-1">
								<p className="leading-[20px] font-semibold">12:00pm - 01:28pm</p>
								<p className="text-[14px] leading-[17px] opacity-40">Emirates</p>
							</div>
						</label>
						<p className="font-semibold text-[14px]">non stop</p>
						<div className="flex flex-col gap-1">
							<p className="leading-[20px] font-semibold">2h 28m</p>
							<p className="text-[14px] leading-[17px] opacity-40">EWR-BNA</p>
						</div>
					</div>
					{/* Second content */}
					<div className="flex gap-10 pt-4">
						<label htmlFor="time" className="flex gap-3 items-start">
							<input type="checkbox" name="time" className={`${styles.checkbox}`} />
							<div className="flex flex-col gap-1">
								<p className="leading-[20px] font-semibold">12:00pm - 01:28pm</p>
								<p className="text-[14px] leading-[17px] opacity-40">Emirates</p>
							</div>
						</label>
						<p className="font-semibold text-[14px]">non stop</p>
						<div className="flex flex-col gap-1">
							<p className="leading-[20px] font-semibold">2h 28m</p>
							<p className="text-[14px] leading-[17px] opacity-40">EWR-BNA</p>
						</div>
					</div>
				</div>
				<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
				{/* Bottom Row */}
				<div className="flex gap-4">
					<button type="button" className="p-[14px] border-mintGreen border-[1px] rounded-[4px]">
						<HeartIcon />
					</button>
					<button
						type="button"
						className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] rounded-[4px]"
					>
						View Deals
					</button>
				</div>
			</div>
		</div>
	);
};
