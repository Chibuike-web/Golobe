import { useState } from "react";
import { UpArrowIcon } from "../../assets/icons";

export default function Filters() {
	const [activeSlider, setActiveSlider] = useState<{ [key: number]: boolean }>({});

	const arrowButton = (itemId: number) => {
		setActiveSlider({
			...activeSlider,
			[itemId]: activeSlider[itemId] ? false : true,
		});
	};

	return (
		<div className="w-full max-w-[367.5px] flex justify-between">
			<div className="w-full max-w-[343px] flex flex-col gap-8">
				<h1 className="font-semibold text-[20px]">Filters</h1>
				<div className="flex flex-col gap-8">
					<Slider name="Price" arrowButton={arrowButton} activeSlider={activeSlider} id={1} />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Slider name="Department" arrowButton={arrowButton} activeSlider={activeSlider} id={2} />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Rating name="Rating" arrowButton={arrowButton} activeSlider={activeSlider} id={3} />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Airlines name="Airline" arrowButton={arrowButton} activeSlider={activeSlider} id={4} />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Trips name="Trips" arrowButton={arrowButton} activeSlider={activeSlider} id={5} />
				</div>
			</div>
			<span className="h-[1600px] block bg-blackishGreen opacity-25 w-[0.5px]"></span>
		</div>
	);
}

type ComponentProps = {
	name: string;
	arrowButton: (id: number) => void;
	id: number;
	activeSlider: { [key: number]: boolean };
};
const Slider = ({ name, arrowButton, id, activeSlider }: ComponentProps) => {
	return (
		<div className="w-full">
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={() => arrowButton(id)}>
					<UpArrowIcon rotate={activeSlider[id] ? "" : "rotate-180"} />
				</button>
			</div>
			{activeSlider[id] && (
				<div className="w-full">
					<input type="range" />
					<div className="flex justify-between items-center mt-2">
						<span className="block text-[12px]">$50</span>
						<span className="block text-[12px]">$1200</span>
					</div>
				</div>
			)}
		</div>
	);
};

const Rating = ({ name, arrowButton, id, activeSlider }: ComponentProps) => {
	return (
		<div>
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={() => arrowButton(id)}>
					<UpArrowIcon rotate={activeSlider[id] ? "" : "rotate-180"} />
				</button>
			</div>
			{activeSlider[id] && (
				<div className="w-full flex gap-4 items-center mt-2">
					{Array.from({ length: 5 }).map((_, index) => (
						<RatingButton key={`rating-${index}`} text={index} id={`rating-${index}`} />
					))}
				</div>
			)}
		</div>
	);
};

const RatingButton = ({ text, id }: { text: number; id: string }) => {
	return (
		<span
			id={id}
			className="text-[12px] border-mintGreen border-[1px] leading-[15px] px-[12px] py-[8px] rounded-[4px] font-medium"
		>
			{text}+
		</span>
	);
};

type CheckboxProps = {
	id: number;
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
		title: "Mulit-City",
	},

	{
		id: 4,
		title: "My Dates are Flexible",
	},
];

const Airlines = ({ name, arrowButton, id, activeSlider }: ComponentProps) => {
	return (
		<div>
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={() => arrowButton(id)}>
					<UpArrowIcon rotate={activeSlider[id] ? "" : "rotate-180"} />
				</button>
			</div>
			{activeSlider[id] && (
				<div className="w-full flex flex-col gap-4 mt-2">
					{airlineData.map(({ id, title }: CheckboxProps) => (
						<Checkbox key={id} id={id} title={title} />
					))}
				</div>
			)}
		</div>
	);
};

const Trips = ({ name, arrowButton, id, activeSlider }: ComponentProps) => {
	return (
		<div>
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={() => arrowButton(id)}>
					<UpArrowIcon rotate={activeSlider[id] ? "" : "rotate-180"} />
				</button>
			</div>
			{activeSlider[id] && (
				<div className="w-full flex flex-col gap-4 mt-2">
					{tripsData.map(({ id, title }: CheckboxProps) => (
						<Checkbox key={id} id={id} title={title} />
					))}
				</div>
			)}
		</div>
	);
};

const Checkbox = ({ id, title }: CheckboxProps) => {
	return (
		<div>
			<label htmlFor={title}>
				<input type="checkbox" name="title" id={`checkbox-${id}`} />
				{title}
			</label>
		</div>
	);
};
