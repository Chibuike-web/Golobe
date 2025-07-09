/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/***/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xl: { max: "1440px" },
			lg: { max: "976px" },
			md: { max: "768px" },
			sm: { max: "480px" },
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
