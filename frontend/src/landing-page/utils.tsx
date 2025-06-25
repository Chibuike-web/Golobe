import { v4 as uuidv4 } from "uuid";
import Olga from "../assets/landing-page/Olga.webp";
import Thomas from "../assets/landing-page/Thomas.webp";
import Eliot from "../assets/landing-page/Eliot.webp";
import Istanbul from "../assets/landing-page/Istanbul.webp";
import Sydney from "../assets/landing-page/Sydney.webp";
import Baku from "../assets/landing-page/Baku.webp";
import Male from "../assets/landing-page/Male.webp";
import Paris from "../assets/landing-page/Paris.webp";
import NewYork from "../assets/landing-page/NewYork.webp";
import London from "../assets/landing-page/London.webp";
import Tokyo from "../assets/landing-page/Tokyo.webp";
import Dubai from "../assets/landing-page/Dubai.webp";
import { GoogleIcon } from "../Icons";
import { ReviewsType, TravelOption } from "./types";
import { useFlightSearchFormState } from "../Hooks";

export const reviews: ReviewsType[] = [
	{
		id: uuidv4(),
		tagline: '"A real sense of community, nurtured"',
		message:
			'"Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed."',
		extra: ["View more", "View less"],
		rating: 5,
		sender: "Olga",
		business: "Weave Studios - Kai Tak",
		reviewSourceIcon: <GoogleIcon />,
		reviewSources: "Google",
		image: Olga,
	},
	{
		id: uuidv4(),
		tagline: '"The facilities are superb. Clean, slick, bright."',
		message:
			'"A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle"',
		extra: ["View more", "View less"],
		rating: 5,
		sender: "Thomas",
		business: "Weave Studios - Olympic",
		reviewSourceIcon: <GoogleIcon />,
		reviewSources: "Google",
		image: Thomas,
	},
	{
		id: uuidv4(),
		tagline: `"A real sense of community, nurtured"`,
		message:
			"Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
		extra: ["View more", "View less"],
		rating: 5,
		sender: "Eliot",
		business: "Weave Studios - Kai Tak",
		reviewSourceIcon: <GoogleIcon />,
		reviewSources: "Google",
		image: Eliot,
	},
];

export const travelOptions: TravelOption[] = [
	{
		destination: "Istanbul, Turkey",
		services: ["Flights", "Hotels", "Resorts"],
		image: Istanbul,
	},
	{
		destination: "Sydney, Australia",
		services: ["Flights", "Hotels", "Resorts"],
		image: Sydney,
	},
	{
		destination: "Baku, Azerbaijan",
		services: ["Flights", "Hotels", "Resorts"],
		image: Baku,
	},
	{
		destination: "Malé, Maldives",
		services: ["Flights", "Hotels", "Resorts"],
		image: Male,
	},
	{
		destination: "Paris, France",
		services: ["Flights", "Hotels", "Resorts"],
		image: Paris,
	},
	{
		destination: "New York, US",
		services: ["Flights", "Hotels", "Resorts"],
		image: NewYork,
	},
	{
		destination: "London, UK",
		services: ["Flights", "Hotels", "Resorts"],
		image: London,
	},
	{
		destination: "Tokyo, Japan",
		services: ["Flights", "Hotels", "Resorts"],
		image: Tokyo,
	},
	{
		destination: "Dubai, UAE",
		services: ["Flights", "Hotels", "Resorts"],
		image: Dubai,
	},
];

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	const { setFrom, setTo, setTrip, setDepartDate, setReturnDate, setPassenger, setTravelClass } =
		useFlightSearchFormState();

	const { id, value } = e.target;
	switch (id) {
		case "from":
			setFrom(value);
			break;
		case "to":
			setTo(value);
			break;
		case "trip":
			setTrip(value);
			break;
		case "departDate":
			setDepartDate(value);
			break;
		case "returnDate":
			setReturnDate(value);
			break;
		case "passenger":
			setPassenger(value);
			break;
		case "travelClass":
			setTravelClass(value);
	}
};

export const fadeUp = {
	initial: { opacity: 0, y: 50 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

export const itemFadeUp = {
	initial: { opacity: 0, y: 20 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.4,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
};
