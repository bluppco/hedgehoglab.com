/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"bitter": ["Bitter", "serif"],
				"montserrat": ["Montserrat", "sans-serif"],
				"roboto": ["Roboto", "sans-serif"],
			},
			colors: {
				"hhl_blue": "#1873F2"
			}
		},
	},
	plugins: [],
}
