import { useState } from "react";
import { CancelIcon, DownArrowIcon, FilterIcon } from "../../assets/Icons";
import * as RadixSlider from "@radix-ui/react-slider";
import { Checkbox, RatingButton } from "../../UiComponents";
import { motion, AnimatePresence } from "motion/react";

import styles from "./Filters.module.css";

export function DesktopFilters() {
	return (
		<div className="w-full max-w-[367.5px] flex gap-6 h-[1360px] sticky top-[120px]">
			<div className="w-full max-w-[343px] flex flex-col gap-8">
				<h1 className="font-semibold text-[20px]">Filters</h1>
				<div className="flex flex-col">
					<Slider name="Price" />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Slider name="Department" />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Rating name="Rating" />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Airlines name="Airline" />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Trips name="Trips" />
				</div>
			</div>
			<span className="block bg-blackishGreen opacity-25 w-[0.5px]"></span>
		</div>
	);
}

export function MobileFilters() {
	const [isShowFilter, setIsShowFilter] = useState(false);
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
			{isShowFilter && (
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
							<Slider name="Department" />
							<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
							<Rating name="Rating" />
							<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
							<Airlines name="Airline" />
							<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
							<Trips name="Trips" />
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
			<AnimatePresence>
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
						key="content"
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

const airlineData: CheckboxProps[] = [
	{
		id: 1,
		title: "Emirates",
	},

	{
		id: 2,
		title: "Fly Dubai",
	},

	{
		id: 3,
		title: "Qatar",
	},

	{
		id: 4,
		title: "Etihad",
	},
];

const Airlines = ({ name }: ComponentProps) => {
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
						key="content"
						variants={fadeDown}
						initial="initial"
						animate="animate"
						exit="exit"
						className="w-full flex flex-col gap-4 mt-2"
					>
						{airlineData.map(({ id, title }: CheckboxProps) => (
							<Checkbox key={id} id={id} title={title} className={`${styles.checkbox}`} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

const tripsData: CheckboxProps[] = [
	{
		id: 1,
		title: "Round trip",
	},

	{
		id: 2,
		title: "On Way",
	},

	{
		id: 3,
		title: "Multi-City",
	},

	{
		id: 4,
		title: "My Dates are Flexible",
	},
];

const Trips = ({ name }: ComponentProps) => {
	const [activeSlider, setActiveSlider] = useState(false);
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
						key="content"
						variants={fadeDown}
						initial="initial"
						animate="animate"
						exit="exit"
						className="w-full flex flex-col gap-4 mt-2 overflow-hidden"
					>
						{tripsData.map(({ id, title }: CheckboxProps) => (
							<Checkbox key={id} id={id} title={title} className={`${styles.checkbox}`} />
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
