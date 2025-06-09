export type Deal = {
	departureTime: string;
	arrivalTime: string;
	airline: string;
	duration: string;
	route: string;
	nonStop: boolean;
};

export type Flight = {
	id: string;
	image: string;
	name: string;
	rating: number;
	reviewSummary: string;
	reviewCount: number;
	price: number;
	currency: string;
	category: string;
	deals: Deal[];
};
