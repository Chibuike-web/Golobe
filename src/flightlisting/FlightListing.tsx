import Filters from "./Filters/Filters";
import FlightLists from "./Flights/FlightLists";
import HeroSection from "./Herosection/Herosection";
import FooterSection from "./Footer/Footer";

export default function FlightListing() {
	return (
		<div className="flex flex-col gap-8 px-8">
			<HeroSection />
			<div className="w-full flex justify-between mx-auto max-w-[77rem]">
				<Filters />
				<FlightLists />
			</div>
			<FooterSection />
		</div>
	);
}
