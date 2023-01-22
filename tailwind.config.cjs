/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Proxima Nova', ...defaultTheme.fontFamily.sans]
			},
			screens: {
				xs: '320px', // => @media (min-width: 640px) { ... }
				sm: '640px', // => @media (min-width: 640px) { ... }
				md: '768px', // => @media (min-width: 768px) { ... }
				lg: '1024px', // => @media (min-width: 1024px) { ... }
				xl: '1280px' // => @media (min-width: 1280px) { ... }
			},
			container: {
				center: true
			},
			minWidth: {
				640: '40em' // 1em = 16px => 40 = 640px
			},
			width: {
				160: '10rem',
				320: '20rem',
				480: '30rem',
				640: '40rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
