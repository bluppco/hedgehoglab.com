/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {

				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'mac': '1440px',
				'2xl': '1536px'

			},
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
