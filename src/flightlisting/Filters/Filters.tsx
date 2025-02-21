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
		<div className="w-full h-screen max-w-[367.5px] flex justify-between">
			<div className="w-full max-w-[343px] flex flex-col gap-8">
				<h1 className="font-semibold text-[20px]">Filters</h1>
				<div className="flex flex-col gap-8">
					<Slider name="Price" arrowButton={arrowButton} activeSlider={activeSlider} id={1} />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Slider name="Department" arrowButton={arrowButton} activeSlider={activeSlider} id={2} />
					<span className="block h-[0.5px] w-full bg-blackishGreen opacity-25"></span>
					<Rating name="Rating" arrowButton={arrowButton} activeSlider={activeSlider} id={3} />
				</div>
			</div>
			<span className="h-full block bg-blackishGreen opacity-25 w-[0.5px]"></span>
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
			{/* Add additional Rating content if needed */}
		</div>
	);
};
