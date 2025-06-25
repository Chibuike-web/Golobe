import { Detail } from "./types";
import Melbourne from "../assets/flight-search/Melbourne.png";
import London from "../assets/flight-search/London.png";
import Paris from "../assets/flight-search/Paris.png";
import Columbia from "../assets/flight-search/Columbia.png";
import { v4 as uuidv4 } from "uuid";

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
