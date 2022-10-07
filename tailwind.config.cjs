/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#94D237",
				secondary: "#422D93",
				tertiary: "#5e41d2",
				accent: "#709327",
				accent2: "#d26937",
			}
		},
	},
	plugins: [],
}
