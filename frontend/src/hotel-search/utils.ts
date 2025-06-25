import { v4 as uuidv4 } from "uuid";
import { Detail } from "./types";
import Melbourne from "../assets/flight-search/Melbourne.png";
import London from "../assets/flight-search/London.png";
import Paris from "../assets/flight-search/Paris.png";
import Columbia from "../assets/flight-search/Columbia.png";
import { HotelOption } from "./types";
import Istanbul from "../assets/hotel-search/Istanbul.webp";
import Sydney from "../assets/hotel-search/Sydney.webp";
import Baku from "../assets/hotel-search/Baku.webp";
import Maldives from "../assets/hotel-search/Maldives.webp";

export const details: Detail[] = [
	{
		id: uuidv4(),
		city: "Melbourne",
		subCopy: "An amazing journey",
		price: 700,
		image: Melbourne,
	},
	{
		id: uuidv4(),
		city: "Paris",
		subCopy: "A Paris Adventure",
		price: 600,
		image: Paris,
	},
	{
		id: uuidv4(),
		city: "London",
		subCopy: "London eye adventure",
		price: 350,
		image: London,
	},
	{
		id: uuidv4(),
		city: "Columbia",
		subCopy: "Amazing streets",
		price: 700,
		image: Columbia,
	},
];

export const hotelOptions: HotelOption[] = [
	{
		id: uuidv4(),
		destination: "Istanbul, Turkey",
		image: Istanbul,
	},
	{
		id: uuidv4(),
		destination: "Sydney, Australia",
		image: Sydney,
	},
	{
		id: uuidv4(),
		destination: "Baku, Azerbaijan",
		image: Baku,
	},
	{
		id: uuidv4(),
		destination: "Malé, Maldives",
		image: Maldives,
	},
];
