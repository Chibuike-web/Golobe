import { useState } from "react";
import EmirateImage from "../assets/FlightListing/Emirates.png";
import CVK from "../assets/HotelListing/Cvk.png";
import {
	AirlineSeatIcon,
	AirplaneIcon,
	BedIcon,
	Calender,
	ClockIcon,
	DoorIcon,
	RightArrowIcon, // Ensure this icon is correctly imported from the Icons file
} from "../assets/Icons";

export default function HistoryTab() {
	const [selectedTab, setSelectedTab] = useState<number>(1);
	const handleClick = (id: number) => {
		setSelectedTab(id);
	};
	return (
		<div>
			<div className="flex justify-between mt-10 mb-4">
				<h1 className="font-bold font-primary text-[2rem]">History</h1>
				<p>Upcoming</p>
			</div>
			<div>
				<div className="flex items-center gap-4 py-4 px-3 mt-8 bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
					{TabData.map(({ id, text }: TabsProps, index) => (
						<div key={id} className="flex w-full gap-4">
							<Tabs id={id} text={text} selectedTab={selectedTab} handleClick={handleClick} />
							{index <= 1 && <span className="min-h-full w-[1px] bg-blackishGreen/10 block"></span>}
						</div>
					))}
				</div>
				{selectedTab === 1 ? <FlightsTab /> : <StaysTab />}
			</div>
		</div>
	);
}

type TabsProps = {
	id: number;
	text: string;
	icon: React.ElementType;
};
const TabData: TabsProps[] = [
	{
		id: 1,
		text: "Flights",
		icon: AirplaneIcon,
	},
	{
		id: 2,
		text: "Stay",
		icon: BedIcon,
	},
];

const Tabs = ({
	id,
	text,
	selectedTab,
	handleClick,
}: {
	id: number;
	text: string;
	selectedTab: number;
	handleClick: (id: number) => void;
}) => {
	return (
		<button className="relative w-full" onClick={() => handleClick(id)}>
			<div className="px-[12px] py-2 flex flex-col items-start gap-[8px] w-full">
				<h3 className="font-semibold">{text}</h3>
			</div>
			{selectedTab === id && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-[-1rem]"></div>
			)}
		</button>
	);
};

// Flight Info

type FlightInfo = {
	id: number;
	departure: string;
	arrival: string;
	departureTime: string;
	arrivalTime: string;
	image: string;
};

const flights: FlightInfo[] = [
	{
		id: 1,
		departure: "Newark (EWR)",
		arrival: "Newark (EWR)",
		departureTime: "12:00 pm",
		arrivalTime: "6:00 pm",
		image: EmirateImage,
	},
	{
		id: 2,
		departure: "Newark (EWR)",
		arrival: "Newark (EWR)",
		departureTime: "12:00 pm",
		arrivalTime: "6:00 pm",
		image: EmirateImage,
	},
	{
		id: 3,
		departure: "Newark (EWR)",
		arrival: "Newark (EWR)",
		departureTime: "12:00 pm",
		arrivalTime: "6:00 pm",
		image: EmirateImage,
	},
];

const FlightsTab = () => {
	return (
		<div className="flex flex-col gap-6 mt-4 ">
			{flights.map(({ id, departure, arrival, departureTime, arrivalTime, image }: FlightInfo) => (
				<FlightMenu
					key={id}
					id={id}
					departure={departure}
					arrival={arrival}
					departureTime={departureTime}
					arrivalTime={arrivalTime}
					image={image}
				/>
			))}
		</div>
	);
};

const FlightMenu = ({ departure, arrival, departureTime, arrivalTime, image }: FlightInfo) => {
	return (
		<div className="flex items-center justify-between bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)] px-6 py-8">
			<div className="flex items-center gap-8">
				<figure className="w-full max-w-[80px] aspect-square border-[0.5px] border-mintGreen rounded-[8px] justify-items-center content-center">
					<img src={image} alt="Emirate Logo" className="w-full max-w-[4rem]" />
				</figure>
				<div className="flex gap-6">
					<div className="flex items-center gap-4">
						<div>
							<p className="w-max">{departure}</p>
							<p>{departureTime}</p>
						</div>
						<span>—</span>
						<div>
							<p className="w-max">{arrival}</p>
							<p>{arrivalTime}</p>
						</div>
					</div>
					<span></span>
					<div className="grid grid-cols-2 gap-x-6 gap-y-[8px]">
						<InfoItem icon={Calender} label="Date" value="12-11-22" />
						<InfoItem icon={DoorIcon} label="Gate" value="A12" />
						<InfoItem icon={ClockIcon} label="Fight time" value="Newark(EWR)" />

						<InfoItem icon={AirlineSeatIcon} label="Seat no." value="128" />
					</div>
				</div>
			</div>
			<div className="flex gap-[8px] items-center">
				<button
					type="button"
					className="flex bg-mintGreen justify-center items-center font-medium text-[14px] p-4 gap-2 rounded-[4px]"
				>
					Download Ticket
				</button>

				<button
					type="button"
					className="flex bg-white border-[1px] border-mintGreen justify-center items-center font-semibold text-[14px] p-4 gap-2 rounded-[4px]"
				>
					<RightArrowIcon className="w-[16px] h-[16px]" />
				</button>
			</div>
		</div>
	);
};

type InfoItemProps = {
	icon: React.ElementType;
	label: string;
	value: string;
	bgColor?: string;
};

const InfoItem = ({ icon: Icon, label, value }: InfoItemProps) => {
	return (
		<div className="flex gap-2 items-center leading-[20px]">
			<figure className="w-8 h-8 bg-[#EBF6F2] flex justify-center items-center rounded-[4px] flex-shrink-0">
				<Icon fill="#8DD3BB" />
			</figure>
			<div>
				<p className="font-semibold text-[12px] opacity-60 leading-[15px] w-max">{label}</p>
				<p className="font-medium leading-[px] w-max">{value}</p>
			</div>
		</div>
	);
};

// Stay Info

type StayInfo = {
	id: number;
	checkInDate: string;
	checkOutDate: string;
	checkInTime: string;
	roomNumber: string;
	checkOutTime: string;
	image: string;
};

const stays: StayInfo[] = [
	{
		id: 1,
		checkInDate: "Thur, Dec 8",
		checkOutDate: "Fri, Dec 9",
		checkInTime: "12:00pm",
		roomNumber: "On arrival",
		checkOutTime: "11:30am",
		image: CVK,
	},
	{
		id: 2,
		checkInDate: "Thur, Dec 8",
		checkOutDate: "Fri, Dec 9",
		checkInTime: "12:00pm",
		roomNumber: "On arrival",
		checkOutTime: "11:30am",
		image: CVK,
	},
	{
		id: 3,
		checkInDate: "Thur, Dec 8",
		checkOutDate: "Fri, Dec 9",
		checkInTime: "12:00pm",
		roomNumber: "On arrival",
		checkOutTime: "11:30am",
		image: CVK,
	},
];

const StaysTab = () => {
	return (
		<div className="flex flex-col gap-6 mt-4 ">
			{stays.map(
				({
					id,
					checkInDate,
					checkOutDate,
					checkInTime,
					roomNumber,
					checkOutTime,
					image,
				}: StayInfo) => (
					<StayMenu
						key={id}
						id={id}
						checkInDate={checkInDate}
						checkOutDate={checkOutDate}
						checkInTime={checkInTime}
						roomNumber={roomNumber}
						checkOutTime={checkOutTime}
						image={image}
					/>
				)
			)}
		</div>
	);
};

const StayMenu = ({
	checkInDate,
	checkOutDate,
	checkInTime,
	roomNumber,
	checkOutTime,
	image,
}: StayInfo) => {
	return (
		<div className="flex items-center justify-between bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)] px-6 py-8">
			<div className="flex items-center gap-8">
				<figure className="w-full max-w-[80px] aspect-square border-[0.5px] border-mintGreen rounded-[8px] justify-items-center content-center">
					<img src={image} alt="Emirate Logo" className="w-full max-w-[4rem]" />
				</figure>
				<div className="flex gap-6">
					<div className="flex items-center gap-4">
						<div>
							<p className="w-max">Check-In</p>
							<p className="w-max font-semibold text-[20px]">{checkInDate}</p>
						</div>
						<span>—</span>
						<div>
							<p className="w-max">Check Out</p>
							<p className="w-max font-semibold text-[20px]">{checkOutDate}</p>
						</div>
					</div>
					<span></span>
					<div className="grid grid-cols-2 gap-x-6 gap-y-[8px]">
						<InfoItem icon={Calender} label="Check-In time" value="12:00pm" />
						<InfoItem icon={DoorIcon} label="Room no." value="On arrival" />
						<InfoItem icon={ClockIcon} label="Check-Out time" value="11:30am" />
					</div>
				</div>
			</div>
			<div className="flex gap-[8px] items-center">
				<button
					type="button"
					className="flex bg-mintGreen justify-center items-center font-medium text-[14px] p-4 gap-2 rounded-[4px]"
				>
					Download Ticket
				</button>

				<button
					type="button"
					className="flex bg-white border-[1px] border-mintGreen justify-center items-center font-semibold text-[14px] p-4 gap-2 rounded-[4px]"
				>
					<RightArrowIcon className="w-[16px] h-[16px]" />
				</button>
			</div>
		</div>
	);
};
