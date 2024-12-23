/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					sm: '600px',
					md: '728px',
					lg: '984px',
					xl: '1240px',
					'2xl': '1496px',
				},
			},

			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
