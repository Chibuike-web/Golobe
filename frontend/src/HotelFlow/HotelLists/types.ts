export type HotelListCardProps = {
	id: string;
	name: string;
	images: string[];
	starRating: number;
	pricePerNight: number;
	priceNote: string;
	address: string;
	category: "Hotel" | "Motel" | "Resort";
	amenities: string[];
	rating: number;
	reviewSummary: string;
	reviewCount: number;
};
