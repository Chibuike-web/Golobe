import { useState } from "react";
import { CafeIcon, DownArrowIcon, HeartIcon, LocationIcon, StarIcon } from "../../assets/Icons";
import HotelIstanbul from "../../assets/HotelListing/HotelIstanbul.png";
import EresinHotel1 from "../../assets/HotelListing/EresinHotel-1.png";
import EresinHotel2 from "../../assets/HotelListing/EresinHotel-2.png";
import EresinHotel3 from "../../assets/HotelListing/EresinHotel-3.png";
import styles from "./HotelLists.module.css";

export default function HotelLists() {
	const [selectedTab, setSelectedTab] = useState<number>(1);
	const handleClick = (id: number) => {
		setSelectedTab(id);
	};
	return (
		<div className="flex flex-col gap-6 w-full">
			<div className=" hide-scrollbar  flex overflow-auto items-center py-4 gap-4 mt-[65px] lg:mt-0 px-3 bg-white rounded-[12px] w-full shadow-[0px_4px_16px_rgba(17,34,17,0.05)]">
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
			{HotelListCardInfo.map(({ name, image, price, favorite }: HotelListCardProps, index) => (
				<HotelListCard key={index} name={name} image={image} price={price} favorite={favorite} />
			))}
			<button className="flex bg-blackishGreen justify-center items-center w-full font-semibold text-[14px] text-white rounded-[4px] py-4">
				Show more results
			</button>
		</div>
	);
}

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
			<div className="px-[12px] flex flex-col items-start gap-[8px] w-full min-w-[160px] text-left">
				<h3 className="font-semibold text-blackishGreen">{type}</h3>
				<div className="text-blackishGreen opacity-40 text-[14px]">
					<span>{place}</span>
				</div>
			</div>
			{selectedTab === id && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-[-1rem]"></div>
			)}
		</button>
	);
};

type HotelListCardProps = {
	name: string;
	price: number;
	image: string;
	favorite?: boolean;
};

const HotelListCardInfo: HotelListCardProps[] = [
	{
		name: "CVK Park Bosphorus Hotel Istanbul",
		price: 240,
		image: HotelIstanbul,
		favorite: true,
	},
	{
		name: "Eresin Hotels Sultanahmet - Boutique Class",
		price: 104,
		image: EresinHotel1,
		favorite: false,
	},
	{
		name: "Eresin Hotels Sultanahmet - Boutique Class",
		price: 104,
		image: EresinHotel2,
		favorite: false,
	},
	{
		name: "Eresin Hotels Sultanahmet - Boutique Class",
		price: 104,
		image: EresinHotel3,
		favorite: false,
	},
];

const HotelListCard = ({ name, price, image, favorite }: HotelListCardProps) => {
	return (
		<div className={`flex rounded-[12px] overflow-hidden bg-white xl:flex-col ${styles.card}`}>
			<figure className="max-w-[300px] xl:max-w-full xl:h-[300px] relative">
				<p className="text-blackishGreen/75 font-medium text-[12px] absolute p-[8px] bg-white/50 backdrop-blur-sm rounded-[8px] leading-[15px] top-[8px] right-[8px]">
					9 images
				</p>
				<img src={image} alt={name} className="w-full h-full object-cover" />
			</figure>

			<div className="p-4 flex flex-col  justify-between xl:gap-6">
				{/* Top */}
				<div className="flex justify-between md:flex-col md:gap-6 w-full">
					{/* Left */}
					<div>
						<h1 className="font-bold font-primary text-[20px] leading-[25px] mb-4">{name}</h1>
						<div className="flex items-center">
							<LocationIcon />
							<span className="text-[12px] text-blackishGreen/75 font-medium">
								Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
							</span>
						</div>
						<div className="flex gap-8 my-3">
							<div className="flex gap-2 items-center">
								<span className="flex">
									{Array.from({ length: 5 }).map((_, index) => (
										<StarIcon key={index} className="w-4 h-4" fill="#FF8682" />
									))}
								</span>
								<span className="font-medium text-[12px]">5 Star Hotel</span>
							</div>
							<div className="flex items-center gap-1">
								<CafeIcon />{" "}
								<span className="text-blackishGreen text-[12px]">
									<strong>20+</strong> Amenities
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium">
								4.2
							</span>
							<p className="text-[12px] font-medium">
								<strong>Very Good</strong> 371 reviews
							</p>
						</div>
					</div>
					{/* Right */}
					<div>
						<p className="font-medium text-[12px] text-blackishGreen/75">starting from</p>
						<h1 className="flex items-center text-slamon font-bold text-[24px]">
							{price} <span className="text-[14px]">/night</span>
						</h1>
						<p className="text-[12px] font-medium text-blackishGreen/75 text-right">excl. tax</p>
					</div>
				</div>
				<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
				{/* Bottom */}
				<div className="flex gap-4">
					<FavoriteButton favorite={favorite} />
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
