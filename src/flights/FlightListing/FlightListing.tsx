import Filters from "../Filters/Filters";
import FlightLists from "../FlightLists/FlightLists";
import HeroSection from "../Herosection/Herosection";
import FooterSection from "../../Footer/Footer";

export default function FlightListing() {
	return (
		<div className="flex flex-col gap-8 px-8 bg-[#FAFBFC]">
			<HeroSection />
			<div className="w-full flex items-start gap-[44px] mx-auto max-w-[77rem]">
				<Filters />
				<FlightLists />
			</div>
			<FooterSection />
		</div>
	);
}
