import { useEffect, useMemo, useState } from "react";
import { CafeIcon, DownArrowIcon, HeartIcon, LocationIcon, StarIcon } from "../../Icons";
import type { HotelListCardProps } from "./types";
import styles from "./HotelLists.module.css";
import { hotelListCardInfo, tabData } from "./utils";
import { useHotelFavorites } from "../../store/useHotelFavorites";
import { Link } from "react-router-dom";

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
				{tabData.map((item: string, index) => (
					<div key={item} className="flex w-full gap-4">
						<Tabs item={item} selectedTab={selectedTab} handleClick={handleClick} />
						{index <= 1 && <span className="min-h-full w-[1px] bg-blackishGreen/10 block"></span>}
					</div>
				))}
			</div>
			<div className="flex justify-between md:flex-col md:gap-4">
				<p className="text-[14px] font-semibold text-blackishGreen">
					Showing {displayHotels.length} of{" "}
					<span className="text-slamon">{hotelListCardInfo.length}</span>
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
			{displayHotels.length > 3 && (
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

const Tabs = ({
	item,
	selectedTab,
	handleClick,
}: {
	item: string;
	selectedTab: string;
	handleClick: (item: string) => void;
}) => {
	const Hotels = hotelListCardInfo.filter((hotel) => hotel.category === "Hotel");
	const Motels = hotelListCardInfo.filter((hotel) => hotel.category === "Motel");
	const Resorts = hotelListCardInfo.filter((hotel) => hotel.category === "Resort");
	return (
		<button className="relative w-full" onClick={() => handleClick(item)}>
			<div className="px-[12px] flex flex-col items-start gap-[8px] w-full min-w-[160px] text-left">
				<h3 className="font-semibold text-blackishGreen">{item}</h3>
				<div className="text-blackishGreen opacity-40 text-[14px]">
					<span>
						{item === "Hotels" ? Hotels.length : item === "Motels" ? Motels.length : Resorts.length}{" "}
						places
					</span>
				</div>
			</div>
			{selectedTab === item && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-[-1rem]"></div>
			)}
		</button>
	);
};

export const HotelListCard = (item: HotelListCardProps) => {
	return (
		<div className={`flex rounded-[12px] overflow-hidden bg-white xl:flex-col ${styles.card}`}>
			<figure className="max-w-[300px] xl:max-w-full xl:h-[300px] relative">
				<p className="text-blackishGreen/75 font-medium text-[12px] absolute p-[8px] bg-white/50 backdrop-blur-sm rounded-[8px] leading-[15px] top-[8px] right-[8px]">
					{item.images.length} images
				</p>
				<img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
			</figure>

			<div className="p-6 flex flex-col w-full justify-between xl:gap-6">
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
					<FavoriteButton hotel={item} />

					<Link
						to={`/hotellisting/hoteldetail/${item.id}`}
						className="flex bg-mintGreen justify-center items-center w-full font-semibold text-[14px] rounded-[4px]"
					>
						View Place
					</Link>
				</div>
			</div>
		</div>
	);
};

export const FavoriteButton = ({ hotel }: { hotel: HotelListCardProps }) => {
	const { isFavorite, toggleFavorite, favorites } = useHotelFavorites();
	return (
		<button
			type="button"
			className="p-[14px] border-mintGreen border-[1px] rounded-[4px]"
			onClick={() => toggleFavorite(hotel)}
		>
			<HeartIcon
				fill={isFavorite(hotel.id) ? "black" : "none"}
				stroke={isFavorite(hotel.id) ? "" : "#4C4850"}
			/>
		</button>
	);
};
