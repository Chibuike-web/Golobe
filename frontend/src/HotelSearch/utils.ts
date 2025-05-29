import { v4 as uuidv4 } from "uuid";
import { Detail } from "./types";
import Melbourne from "../assets/FlightSearch/Melbourne.png";
import London from "../assets/FlightSearch/London.png";
import Paris from "../assets/FlightSearch/Paris.png";
import Columbia from "../assets/FlightSearch/Columbia.png";
import { HotelOption } from "./types";
import Istanbul from "../assets/HotelSearch/Istanbul.webp";
import Sydney from "../assets/HotelSearch/Sydney.webp";
import Baku from "../assets/HotelSearch/Baku.webp";
import Maldives from "../assets/HotelSearch/Maldives.webp";

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
