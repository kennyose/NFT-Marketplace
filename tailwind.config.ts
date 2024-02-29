import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: {
					light: "#7780A1",
					DEFAULT: "#2A27C9",
					dark: "#0e7490",
				},
			},
			fontSize: {
				xxs: "0.58rem",
				xs: "0.68rem",
				sm: "0.8rem",
			},
		},
	},
	plugins: [],
};
export default config;
