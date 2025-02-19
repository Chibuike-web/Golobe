import { useState } from "react";
import { HarmburgerIcon } from "../../assets/icons";

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
		<div
			className="flex items-center gap-4 mt-[65px] px-3 bg-white rounded-[12px] w-full"
			style={{ boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)" }}
		>
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
			<div className="flex items-center gap-2">
				<HarmburgerIcon />
				<p className="text-[14px] text-blackishGreen ">Other sort</p>
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
		<button className="relative py-4" onClick={() => handleClick(id)}>
			<div className="px-[12px] flex flex-col items-start gap-[8px] w-[160px]">
				<h3 className="font-semibold text-blackishGreen">{type}</h3>
				<div className="text-blackishGreen opacity-40 text-[14px]">
					<span>${price}</span> . <span>{time}</span>
				</div>
			</div>
			{selectedTab === id && <div className="h-[4px] w-full bg-mintGreen absolute bottom-0"></div>}
		</button>
	);
};
