import { useState } from "react";
import { CancelIcon, DownArrowIcon, FilterIcon } from "../../assets/Icons";
import * as RadixSlider from "@radix-ui/react-slider";
import { Checkbox, RatingButton } from "../../UiComponents";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Filters.module.css";

export function DesktopFilters() {
	return (
		<div className="w-full max-w-[367.5px] flex gap-6 h-[1360px] overflow-y-auto sticky top-[120px]">
			<div className="w-full max-w-[343px] flex flex-col gap-8">
				<h1 className="font-semibold text-[20px]">Filters</h1>
				<div className="flex flex-col">
					<Slider name="Price" />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Rating name="Rating" />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Freebies name="Freebies" />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Amenities name="Amenities" />
				</div>
			</div>
			<span className=" block bg-blackishGreen opacity-25 w-[0.5px]"></span>
		</div>
	);
}

export function MobileFilters() {
	const [isshowFilter, setIsShowFilter] = useState(false);
	return (
		<>
			<button
				type="button"
				onClick={() => setIsShowFilter((prev) => !prev)}
				className="flex items-center"
			>
				<FilterIcon />
				Filters
			</button>
			{isshowFilter && (
				<div className="w-full fixed inset-0 z-[100] bg-white px-6 overflow-y-auto py-6">
					<div className="w-full flex flex-col gap-8">
						<div className="flex items-center justify-between">
							<h1 className="font-semibold text-[20px]">Filters</h1>{" "}
							<button type="button" onClick={() => setIsShowFilter((prev) => !prev)}>
								<CancelIcon />
							</button>
						</div>

						<div className="flex flex-col">
							<Slider name="Price" />
							<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
							<Rating name="Rating" />
							<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
							<Freebies name="Freebies" />
							<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
							<Amenities name="Amenities" />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

const fadeDown = {
	initial: { opacity: 0, height: 0 },
	animate: {
		opacity: 1,
		height: "auto",
		transition: { duration: 0.4 },
	},
	exit: {
		opacity: 0,
		height: 0,
		transition: { duration: 0.4 },
	},
};

type ComponentProps = {
	name: string;
};

const Slider = ({ name }: ComponentProps) => {
	const [values, setValues] = useState([50, 1200]);
	const [activeSlider, setActiveSlider] = useState(false);

	return (
		<div className={`w-full overflow-clip ${name === "Department" ? "py-8" : "pb-8"}`}>
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={() => setActiveSlider(!activeSlider)}>
					<DownArrowIcon
						className={`transform transition-transform duration-300 ease-out ${
							activeSlider ? "rotate-180" : "rotate-0"
						}`}
					/>
				</button>
			</div>
			<AnimatePresence mode="wait">
				{activeSlider && (
					<motion.div
						variants={fadeDown}
						initial="initial"
						animate="animate"
						exit="exit"
						className="w-full mt-4"
					>
						<RadixSlider.Root
							value={values}
							onValueChange={setValues}
							min={0}
							max={1500}
							step={10}
							className="relative flex items-center w-full h-5"
						>
							<RadixSlider.Track className="relative flex-grow h-1 bg-gray-300 rounded">
								<RadixSlider.Range className="absolute h-full bg-blackishGreen rounded" />
							</RadixSlider.Track>
							<RadixSlider.Thumb className="block w-6 h-6 bg-mintGreen rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300" />
							<RadixSlider.Thumb className="block w-6 h-6 bg-mintGreen rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300" />
						</RadixSlider.Root>
						<div className="flex justify-between items-center mt-2">
							<span className="block text-[12px]">${values[0]}</span>
							<span className="block text-[12px]">${values[1]}</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const Rating = ({ name }: ComponentProps) => {
	const [activeSlider, setActiveSlider] = useState(false);
	return (
		<div className="overflow-clip py-8">
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={() => setActiveSlider(!activeSlider)}>
					<DownArrowIcon
						className={`transform transition-transform duration-300 ease-out ${
							activeSlider ? "rotate-180" : "rotate-0"
						}`}
					/>
				</button>
			</div>
			<AnimatePresence>
				{activeSlider && (
					<motion.div
						variants={fadeDown}
						initial="initial"
						animate="animate"
						exit="exit"
						className="w-full flex gap-4 items-center mt-2"
					>
						{Array.from({ length: 5 }).map((_, index) => (
							<RatingButton key={`rating-${index}`} text={index} id={`rating-${index}`} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export type CheckboxProps = {
	id?: number;
	title: string;
};

const freebiesData: CheckboxProps[] = [
	{
		id: 1,
		title: "Free breakfast",
	},

	{
		id: 2,
		title: "Free parking",
	},

	{
		id: 3,
		title: "Free internet",
	},

	{
		id: 4,
		title: "Free airport shuttle",
	},
	{
		id: 5,
		title: "Free cancellation",
	},
];

const Freebies = ({ name }: ComponentProps) => {
	const [activeSlider, setActiveSlider] = useState(false);
	return (
		<div className="overflow-clip py-8">
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={() => setActiveSlider(!activeSlider)}>
					<DownArrowIcon
						className={`transform transition-transform duration-300 ease-out ${
							activeSlider ? "rotate-180" : "rotate-0"
						}`}
					/>
				</button>
			</div>
			<AnimatePresence>
				{activeSlider && (
					<motion.div
						variants={fadeDown}
						initial="initial"
						animate="animate"
						exit="exit"
						className="w-full flex flex-col gap-4 mt-2"
					>
						{freebiesData.map(({ id, title }: CheckboxProps) => (
							<Checkbox key={id} id={id} title={title} className={`${styles.checkbox}`} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const amenitiesData: CheckboxProps[] = [
	{
		id: 1,
		title: "24hr front desk",
	},
	{
		id: 2,
		title: "Air-conditioned",
	},
	{
		id: 3,
		title: "Fitness",
	},
	{
		id: 4,
		title: "Pool",
	},
	{
		id: 5,
		title: "Restaurant",
	},
	{
		id: 6,
		title: "Bar/Lounge",
	},
	{
		id: 7,
		title: "Spa",
	},
	{
		id: 8,
		title: "Business Center",
	},
	{
		id: 9,
		title: "WiFi",
	},
	{
		id: 10,
		title: "Room Service",
	},
	{
		id: 11,
		title: "Parking",
	},
	{
		id: 12,
		title: "Conference Room",
	},
	{
		id: 13,
		title: "Pet Friendly",
	},
	{
		id: 14,
		title: "Laundry Service",
	},
	{
		id: 15,
		title: "Concierge",
	},
	{
		id: 16,
		title: "Airport Shuttle",
	},
	{
		id: 17,
		title: "Garden",
	},
	{
		id: 18,
		title: "Tennis Court",
	},
	{
		id: 19,
		title: "Kids Club",
	},
	{
		id: 20,
		title: "Beach Access",
	},
	{
		id: 21,
		title: "Golf Course",
	},
	{
		id: 22,
		title: "Mini Bar",
	},
	{
		id: 23,
		title: "Sauna",
	},
	{
		id: 24,
		title: "Casino",
	},
];

const Amenities = ({ name }: ComponentProps) => {
	const [activeSlider, setActiveSlider] = useState(false);
	const [showAllAmenities, setShowAllAmenities] = useState(false);
	const remaining = amenitiesData.length - 5;
	return (
		<div className="overflow-clip pt-8">
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={() => setActiveSlider(!activeSlider)}>
					<DownArrowIcon
						className={`transform transition-transform duration-300 ease-out ${
							activeSlider ? "rotate-180" : "rotate-0"
						}`}
					/>
				</button>
			</div>
			<AnimatePresence>
				{activeSlider && (
					<motion.div
						variants={fadeDown}
						initial="initial"
						animate="animate"
						exit="exit"
						className="w-full flex flex-col items-start gap-4 mt-2"
					>
						{(showAllAmenities ? amenitiesData : amenitiesData.slice(0, 5)).map(
							({ id, title }: CheckboxProps) => (
								<Checkbox key={id} id={id} title={title} className={`${styles.checkbox}`} />
							)
						)}
						{remaining > 0 && (
							<button
								type="button"
								className="text-slamon font-bold text-[14px]"
								onClick={() => setShowAllAmenities(!showAllAmenities)}
							>
								{showAllAmenities ? "Show less" : `+${remaining} more`}
							</button>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
