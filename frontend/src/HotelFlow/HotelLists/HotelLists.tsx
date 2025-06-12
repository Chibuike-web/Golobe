import { useMemo, useState } from "react";
import { CafeIcon, DownArrowIcon, HeartIcon, LocationIcon, StarIcon } from "../../Icons";
import type { HotelListCardProps } from "./types";
import styles from "./HotelLists.module.css";
import { hotelListCardInfo } from "./utils";

export default function HotelLists() {
	const [selectedTab, setSelectedTab] = useState<string>("Hotels");
	const [isShowMore, setIsShowMore] = useState(false);
	const handleClick = (type: string) => {
		setSelectedTab(type);
	};

	const filteredLists = useMemo(() => {
		return selectedTab === "Hotels"
			? hotelListCardInfo.filter((hotel) => hotel.category === "Hotel")
			: selectedTab === "Motels"
			? hotelListCardInfo.filter((hotel) => hotel.category === "Motel")
			: selectedTab === "Resorts"
			? hotelListCardInfo.filter((hotel) => hotel.category === "Resort")
			: [];
	}, [selectedTab, hotelListCardInfo]);

	const displayHotels = isShowMore ? filteredLists : filteredLists.slice(0, 4);
	return (
		<div className="flex flex-col gap-6 w-full">
			<div className=" hide-scrollbar  flex overflow-auto items-center py-4 gap-4 mt-[65px] lg:mt-0 px-3 bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
				{TabData.map(({ type, place }: TabsProps, index) => (
					<div key={type} className="flex w-full gap-4">
						<Tabs type={type} place={place} selectedTab={selectedTab} handleClick={handleClick} />
						{index <= 1 && <span className="min-h-full w-[1px] bg-blackishGreen/10 block"></span>}
					</div>
				))}
			</div>
			<div className="flex justify-between md:flex-col md:gap-4">
				<p className="text-[14px] font-semibold text-blackishGreen">
					Showing 4 of <span className="text-slamon">257 places</span>
				</p>
				<p className="flex items-center md:justify-between gap-[4px] text-[14px]">
					Sort by
					<span className="flex text-[14px] gap-[4px] items-center font-semibold">
						Recommended <DownArrowIcon />
					</span>
				</p>
			</div>
			{displayHotels.map((item: HotelListCardProps) => (
				<HotelListCard key={item.id} {...item} />
			))}
			{displayHotels.length > 5 && (
				<button
					className="flex bg-blackishGreen justify-center items-center w-full font-semibold text-[14px] text-white rounded-[4px] py-4"
					onClick={() => setIsShowMore(!isShowMore)}
				>
					{isShowMore ? "Show less result" : "Show more results"}
				</button>
			)}
		</div>
	);
}

type TabsProps = {
	type: string;
	place: string;
};
const TabData: TabsProps[] = [
	{
		type: "Hotels",
		place: "257 places",
	},
	{
		type: "Motels",
		place: "51 places",
	},
	{
		type: "Resorts",
		place: "72 places",
	},
];

const Tabs = ({
	type,
	place,
	selectedTab,
	handleClick,
}: {
	type: string;
	place: string;
	selectedTab: string;
	handleClick: (type: string) => void;
}) => {
	return (
		<button className="relative w-full" onClick={() => handleClick(type)}>
			<div className="px-[12px] flex flex-col items-start gap-[8px] w-full min-w-[160px] text-left">
				<h3 className="font-semibold text-blackishGreen">{type}</h3>
				<div className="text-blackishGreen opacity-40 text-[14px]">
					<span>{place}</span>
				</div>
			</div>
			{selectedTab === type && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-[-1rem]"></div>
			)}
		</button>
	);
};

const HotelListCard = (item: HotelListCardProps) => {
	return (
		<div className={`flex rounded-[12px] overflow-hidden bg-white xl:flex-col ${styles.card}`}>
			<figure className="max-w-[300px] xl:max-w-full xl:h-[300px] relative">
				<p className="text-blackishGreen/75 font-medium text-[12px] absolute p-[8px] bg-white/50 backdrop-blur-sm rounded-[8px] leading-[15px] top-[8px] right-[8px]">
					9 images
				</p>
				<img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
			</figure>

			<div className="p-4 flex flex-col w-full justify-between xl:gap-6">
				{/* Top */}
				<div className="flex justify-between md:flex-col md:gap-6 w-full">
					{/* Left */}
					<div className="w-full">
						<h1 className="font-bold font-primary text-[20px] leading-[25px] mb-4">{item.name}</h1>
						<div className="flex items-center">
							<LocationIcon />
							<span className="text-[12px] text-blackishGreen/75 font-medium">{item.address}</span>
						</div>
						<div className="flex gap-8 my-3">
							<div className="flex gap-2 items-center">
								<span className="flex">
									{Array.from({ length: item.starRating }).map((_, index) => (
										<StarIcon key={index} className="w-4 h-4" fill="#FF8682" />
									))}
								</span>
								<span className="font-medium text-[12px]">{item.starRating} star Hotel</span>
							</div>
							<div className="flex items-center gap-1">
								<CafeIcon />{" "}
								<span className="text-blackishGreen text-[12px]">
									<strong>{item.amenities.length}</strong> Amenities
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium">
								{item.rating}
							</span>
							<p className="text-[12px] font-medium">
								<strong>{item.reviewSummary}</strong> 371 reviews
							</p>
						</div>
					</div>
					{/* Right */}
					<div>
						<p className="font-medium text-[12px] text-blackishGreen/75">starting from</p>
						<h1 className="flex items-center text-slamon font-bold text-[24px]">
							{item.pricePerNight} <span className="text-[14px]">/night</span>
						</h1>
						<p className="text-[12px] font-medium text-blackishGreen/75 text-right">excl. tax</p>
					</div>
				</div>
				<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
				{/* Bottom */}
				<div className="flex gap-4">
					<FavoriteButton />
					<button
						type="button"
						className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] rounded-[4px]"
					>
						View Place
					</button>
				</div>
			</div>
		</div>
	);
};

const FavoriteButton = ({ favorite = false }: { favorite?: boolean }) => {
	const [isFavorite, setIsFavorite] = useState(favorite);
	return (
		<button
			type="button"
			className="p-[14px] border-mintGreen border-[1px] rounded-[4px]"
			onClick={() => setIsFavorite(!isFavorite)}
		>
			<HeartIcon fill={isFavorite ? "black" : "none"} stroke={isFavorite ? "" : "#4C4850"} />
		</button>
	);
};
