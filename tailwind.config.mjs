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
			},
			animation: {
				marquee: 'marquee 20s linear infinite',
				marquee2: 'marquee2 20s linear infinite'
			},

			keyframes: {
				marquee: {
				  	'0%': { transform: 'translateX(0%)' },
				  	'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
				  	'0%': { transform: 'translateX(100%)' },
				  	'100%': { transform: 'translateX(0%)' }
				}
			},
		},
	},
	plugins: [],
}
