import HeroImage from "../assets/Account/HeroImage.png";
import { EditIcon, UploadIcon } from "../Icons";
import ProfileImage from "../assets/FlightListing/ProfileImage.png";
import { useState } from "react";
import AccountTab from "./AccountTab";
import HistoryTab from "./HistoryTab";
import PaymentMethods from "./PaymentMethods";

export default function Account() {
	const [selectedTab, setSelectedTab] = useState<string>("Account");
	const handleClick = (text: string) => {
		setSelectedTab(text);
	};
	return (
		<div className="mx-auto w-full max-w-[1232px] py-6 md:py-0">
			<figure className="relative">
				<img src={HeroImage} alt="Account Hero Image" />
				<button
					type="button"
					className=" absolute bottom-[26px] right-[26px] flex bg-mintGreen justify-center items-center font-semibold text-[14px] py-[16px] px-[24px] gap-2 rounded-[4px] md:text-[12px] md:py-[8px] md:px-[12px] md:right-[13px] md:bottom-[13px]"
				>
					<UploadIcon />
					Upload new cover
				</button>
			</figure>
			<div className="mx-auto flex flex-col items-center md:items-start mt-[-80px] md:mt-[-56px] w-max md:ml-8">
				<figure className="relative max-w-[160px] md:max-w-[80px] rounded-full ring-[4px] ring-slamon">
					<img src={ProfileImage} alt="Profile Image" className=" w-full flex-shrink-0" />
					<span className="bg-slamon block rounded-full p-[10px] md:p-[6px] absolute bottom-0 right-0">
						<EditIcon className="md:w-4 md:h-4" />
					</span>
				</figure>

				<h1 className=" mt-[24px] font-semibold text-[24px] md:text-[1rem] mb-[8px]">John Doe.</h1>
				<p className="md:text-[12px]">john.doe@gmail.com</p>
			</div>
			<div className="md:px-4">
				<div className="hide-scrollbar flex items-center gap-4 py-4 px-3 mt-8 bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)] overflow-auto">
					{tabData.map(({ text }: TabsProps, index) => (
						<div key={text} className="flex w-full gap-4">
							<Tabs text={text} selectedTab={selectedTab} handleClick={handleClick} />
							{index <= 1 && <span className="min-h-full w-[1px] bg-blackishGreen/10 block"/>}
						</div>
					))}
				</div>
			</div>
			{selectedTab === "Account" ? (
				<AccountTab />
			) : selectedTab === "History" ? (
				<HistoryTab />
			) : (
				<PaymentMethods />
			)}
		</div>
	);
}

type TabsProps = {
	text: string;
};
const tabData: TabsProps[] = [
	{
		text: "Account",
	},
	{
		text: "History",
	},
	{
		text: "Payment methods",
	},
];

const Tabs = ({
	text,
	selectedTab,
	handleClick,
}: {
	text: string;
	selectedTab: string;
	handleClick: (text: string) => void;
}) => {
	return (
		<button className="relative w-full" onClick={() => handleClick(text)}>
			<h3 className="font-semibold px-[12px] py-2 flex flex-col items-start gap-[8px] w-full min-w-[160px]">
				{text}
			</h3>

			{selectedTab === text && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-[-1rem]"></div>
			)}
		</button>
	);
};
