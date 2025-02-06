import { UpArrowIcon } from "../../assets/icons";

export default function Filters() {
	return (
		<div className="w-full max-w-[367.5px] flex justify-between">
			<div className="w-full max-w-[343px] flex flex-col gap-8">
				<h1 className="font-semibold text-[20px]">Filters</h1>
				<Slider name={"Price"} />
			</div>
			<span className="h-full block bg-blackishGreen opacity-25 w-[0.5px]"></span>
		</div>
	);
}

interface SliderProps {
	name: string;
}

const Slider = ({ name }: SliderProps) => {
	return (
		<div className="w-full">
			<div className="flex justify-between w-full">
				<h2 className="font-semibold">{name}</h2>
				<UpArrowIcon />
			</div>
			<div className="relative w-full">
				<div className="flex justify-between">
					<span className="block bg-mintGreen w-[24px] h-[24px] rounded-full"></span>
					<span className="block bg-mintGreen w-[24px] h-[24px] rounded-full"></span>
				</div>
				<span className=" absolute z-[-1000] top-[50%] -translate-y-1/2 block bg-blackishGreen w-full h-[2px] "></span>
			</div>
			<div className="flex justify-between mt-2">
				<span className="block text-[12px]">$50</span>
				<span className="block text-[12px]">$1200</span>
			</div>
		</div>
	);
};
