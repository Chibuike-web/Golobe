import { useWindowWidth } from "../Hooks";
import { DesktopFilters, MobileFilters } from "./filters/Filters";

import FlightLists from "./flight-lists/FlightLists";
import HeroSection from "./hero-section/HeroSection";

export default function FlightListing() {
	const windowSize = useWindowWidth();
	return (
		<div className="flex flex-col gap-8 px-8 md:px-4 bg-[#FAFBFC]">
			<HeroSection />
			<div className="w-full flex items-start gap-[44px] mx-auto max-w-[77rem] lg:flex-col lg:gap-8 lg:items-center">
				{windowSize < 976 ? <MobileFilters /> : <DesktopFilters />}
				<FlightLists />
			</div>
		</div>
	);
}
