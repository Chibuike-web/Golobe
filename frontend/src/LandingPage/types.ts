import { JSX } from "react";

export type ReviewsType = {
	id: string;
	tagline: string;
	message: string;
	extra: string[];
	rating: number;
	sender: string;
	business: string;
	reviewSourceIcon: JSX.Element;
	reviewSources: string;
	image: string;
};

export type TravelOption = {
	destination: string;
	services: string[];
	image: string;
};

export type FlightCardProps = {
	destination: string;
	services: string[];
	image: string;
};

type FooterItem = { id: string; label: string };

export type FooterColumnProps = {
	title: string;
	items: FooterItem[];
};
