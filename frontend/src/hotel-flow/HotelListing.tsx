import HeroSection from "./hero-section/HeroSection";
import { DesktopFilters, MobileFilters } from "./Filters/Filters";
import HotelLists from "./hotel-lists/HotelLists";
import { useWindowWidth } from "../Hooks";

export default function HotelListing() {
	const windowSize = useWindowWidth();
	return (
		<div className="flex flex-col gap-8 px-4 bg-[#FAFBFC]">
			<HeroSection />
			<div className="w-full flex items-start gap-[44px] mx-auto max-w-[77rem] lg:flex-col lg:gap-8 lg:items-center">
				{windowSize < 976 ? <MobileFilters /> : <DesktopFilters />}
				<HotelLists />
			</div>
		</div>
	);
}
