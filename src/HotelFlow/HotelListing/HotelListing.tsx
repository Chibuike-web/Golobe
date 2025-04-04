import HeroSection from "../HeroSection/HeroSection";
import Filters from "../Filters/Filters";
import HotelLists from "../HotelLists/HotelLists";

export default function HotelListing() {
	return (
		<div className="flex flex-col gap-8 px-8 bg-[#FAFBFC]">
			<HeroSection />
			<div className="w-full flex items-start gap-[44px] mx-auto max-w-[77rem]">
				<Filters />
				<HotelLists />
			</div>
		</div>
	);
}
