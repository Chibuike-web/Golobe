/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xl: { max: "1440px" }, // Styles apply from 1440px and down
			lg: { max: "976px" }, // Styles apply from 976px and down
			md: { max: "768px" }, // Styles apply from 768px and down
			sm: { max: "480px" }, // Styles apply from 480px and down
		},
		extend: {
			colors: {
				blackishGreen: "#112211",
				mintGreen: "#8DD3BB",
				slamon: "#FF8682",
			},
			fontFamily: {
				primary: ["TradeGothic LT Extended"],
				secondary: ["Montserrat"],
			},
		},
	},
	plugins: [],
};
