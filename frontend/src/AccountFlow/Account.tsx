import HeroImage from "../assets/Account/HeroImage.png";
import { EditIcon, UploadIcon } from "../assets/Icons";
import ProfileImage from "../assets/FlightListing/ProfileImage.png";
import { useState } from "react";
import AccountTab from "./AccountTab";
import HistoryTab from "./HistoryTab";

export default function Account() {
	const [selectedTab, setSelectedTab] = useState<number>(1);
	const handleClick = (id: number) => {
		setSelectedTab(id);
	};
	return (
		<div className="mx-auto w-full max-w-[1232px] py-6">
			<figure className="relative">
				<img src={HeroImage} alt="Account Hero Image" />
				<button
					type="button"
					className=" absolute bottom-[26px] right-[26px] flex bg-mintGreen justify-center items-center font-semibold text-[14px] py-[16px] px-[24px] gap-2 rounded-[4px]"
				>
					<UploadIcon />
					Upload new cover
				</button>
			</figure>
			<div className="mx-auto mt-[-80px] w-max">
				<figure className="relative w-max rounded-full ring-[4px] ring-slamon">
					<img
						src={ProfileImage}
						alt="Profile Image"
						className=" w-full max-w-[160px] flex-shrink-0"
					/>
					<span className="bg-slamon block rounded-full p-[10px] absolute bottom-0 right-0">
						<EditIcon />
					</span>
				</figure>

				<h1 className="text-center mt-[24px] font-semibold text-[24px] mb-[8px]">John Doe.</h1>
				<p className="text-center">john.doe@gmail.com</p>
			</div>
			<div className="flex items-center gap-4 py-4 px-3 mt-8 bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
				{TabData.map(({ id, text }: TabsProps, index) => (
					<div key={id} className="flex w-full gap-4">
						<Tabs id={id} text={text} selectedTab={selectedTab} handleClick={handleClick} />
						{index <= 1 && <span className="min-h-full w-[1px] bg-blackishGreen/10 block"></span>}
					</div>
				))}
			</div>
			{selectedTab === 1 ? (
				<AccountTab />
			) : selectedTab === 2 ? (
				<HistoryTab />
			) : (
				<div>Chibuike</div>
			)}
		</div>
	);
}

type TabsProps = {
	id: number;
	text: string;
};
const TabData: TabsProps[] = [
	{
		id: 1,
		text: "Account",
	},
	{
		id: 2,
		text: "History",
	},
	{
		id: 3,
		text: "Payment methods",
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
