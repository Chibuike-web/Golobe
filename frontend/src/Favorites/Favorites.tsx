export default function Favorites() {
	return (
		<main className="w-full flex items-start gap-[44px] mx-auto max-w-[77rem] mt-12 text-[2rem]">
			<h1>Favorites</h1>
		</main>
	);
}

const TabData: { type: string }[] = [
	{
		type: "Flights",
	},
	{
		type: "Place",
	},
];

const Tabs = ({
	id,
	text,
	selectedTab,
	handleClick,
}: {
	id: number;
	text: string;
	selectedTab: number;
	handleClick: (id: number) => void;
}) => {
	return (
		<button className="relative w-full" onClick={() => handleClick(id)}>
			<h3 className="font-semibold px-[12px] py-2 flex flex-col items-start gap-[8px] w-full min-w-[160px]">
				{text}
			</h3>

			{selectedTab === id && (
				<div className="h-[4px] w-full bg-mintGreen absolute bottom-[-1rem]"></div>
			)}
		</button>
	);
};

const flightFavorites = () => {};
