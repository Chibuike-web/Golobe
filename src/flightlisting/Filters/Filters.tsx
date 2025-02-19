import { useState } from "react";
import { UpArrowIcon } from "../../assets/icons";

export default function Filters() {
	return (
		<div className="w-full h-screen max-w-[367.5px] flex justify-between">
			<div className="w-full max-w-[343px] flex flex-col gap-8">
				<h1 className="font-semibold text-[20px]">Filters</h1>
				<Slider name={"Price"} />
			</div>
			<span className="h-full block bg-blackishGreen opacity-25 w-[0.5px]"></span>
		</div>
	);
}

type SliderProps = {
	name: string;
};

const Slider = ({ name }: SliderProps) => {
	const [isRotate, setIsRotate] = useState<boolean>(true);

	const arrowButton = () => {
		setIsRotate(!isRotate);
	};

	return (
		<div className="w-full h-full">
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<button type="button" onClick={arrowButton}>
					<UpArrowIcon rotate={isRotate ? "" : "rotate-180"} />
				</button>
			</div>
			{isRotate && (
				<div className=" w-full mt-8">
					<div className="flex items-center justify-between relative w-full">
						<span className="block bg-mintGreen w-[24px] h-[24px] rounded-full "></span>
						<span className="absolute bg-blackishGreen w-[300px] z-[-1000] h-[2px] left-[50%] -translate-x-1/2 "></span>
						<span className="block bg-mintGreen w-[24px] h-[24px] rounded-full"></span>
					</div>
					<div className="flex justify-between items-center mt-2">
						<span className="block text-[12px]">$50</span>
						<span className="block text-[12px]">$1200</span>
					</div>
					<input type="range" />
				</div>
			)}
		</div>
	);
};
