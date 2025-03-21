import { useState } from "react";

type TabsProps = {
	id: number;
	type: string;
	place: string;
};
const TabData: TabsProps[] = [
	{
		id: 1,
		type: "Hotel",
		place: "257 places",
	},
	{
		id: 2,
		type: "Motels",
		place: "51 places",
	},
	{
		id: 3,
		type: "Resorts",
		place: "72 places",
	},
];

export default function HotelLists() {
	const [selectedTab, setSelectedTab] = useState<number>(1);
	const handleClick = (id: number) => {
		setSelectedTab(id);
	};
	return (
		<div className="flex flex-col gap-6 w-full">
			<div
				className="flex items-center gap-4 py-4 px-3 bg-white rounded-[12px] w-full"
				style={{ boxShadow: "0px 4px 16px rgba(17, 34, 17, 0.05)" }}
			>
				{TabData.map(({ id, type, place }: TabsProps, index) => (
					<div key={id} className="flex w-full gap-4">
						<Tabs
							id={id}
							type={type}
							place={place}
							selectedTab={selectedTab}
							handleClick={handleClick}
						/>
						{index <= 1 && <span className="min-h-full w-[1px] bg-blackishGreen/10 block"></span>}
					</div>
				))}
			</div>
		</div>
	);
}

const Tabs = ({
	id,
	type,
	place,
	selectedTab,
	handleClick,
}: {
	id: number;
	type: string;
	place: string;
	selectedTab: number;
	handleClick: (id: number) => void;
}) => {
	return (
		<button className="relative w-full" onClick={() => handleClick(id)}>
			<div className="px-[12px] flex flex-col items-start gap-[8px] w-full">
				<h3 className="font-semibold text-blackishGreen">{type}</h3>
				<div className="text-blackishGreen opacity-40 text-[14px]">
					<span>${place}</span>
				</div>
			</div>
			{selectedTab === id && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-[-1rem]"></div>
			)}
		</button>
	);
};
