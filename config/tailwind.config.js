/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	content: [
		'./components/**/*.vue',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.js',
		'./nuxt.config.js'
	],
	theme: {
		extend: {
			colors: {
				hakooi: {
					DEFAULT: '#3341FF',
					'100': '#FFFFFF',
					'200': '#CCCFFF',
					'300': '#99A0FF',
					'400': '#6670FF',
					'500': '#3341FF',
					'600': '#0011FF',
					'700': '#000ECC',
					'800': '#000A99',
					'900': '#000766'
				}
			},
			fontFamily: {
				heading: ['Bebas Neue', 'sans-serif'],
				paragraph: ['Montserrat', 'sans-serif']
			},
			boxShadow: {
				'glow': '0 0 20px rgba(51, 65, 255, 0.5)',
				'card': '0 10px 40px -10px rgba(0,0,0,0.15)'
			},
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms'
			}
		}
	},
	plugins: []
}
