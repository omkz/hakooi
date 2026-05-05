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
					DEFAULT: '#4F46E5',
					dark: '#3730A3',
					light: '#818CF8',
					'50': '#F5F3FF',
					'100': '#EDE9FE',
					'200': '#DDD6FE',
					'300': '#C4B5FD',
					'400': '#A78BFA',
					'500': '#8B5CF6',
					'600': '#6366F1',
					'700': '#4F46E5',
					'800': '#4338CA',
					'900': '#3730A3',
					'950': '#28225D'
				},
				accent: {
					DEFAULT: '#06B6D4',
					dark: '#0E7490',
					light: '#22D3EE',
					'50': '#ECFEFF',
					'100': '#CCFBF1',
					'200': '#99F6E4',
					'300': '#5EEAD4',
					'400': '#2DD4BF',
					'500': '#06B6D4',
					'600': '#0891B2',
					'700': '#0E7490',
					'800': '#155E75',
					'900': '#164E63'
				},
				gradient: {
					'primary': 'linear-gradient(135deg, #6670FF 0%, #4F46E5 100%)',
					'secondary': 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
					'dark': 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)'
				}
			},
			screens: {
				xs: '475px'
			},
			fontFamily: {
				heading: ['Bebas Neue', 'sans-serif'],
				paragraph: ['Montserrat', 'sans-serif']
			},
			boxShadow: {
				'glow': '0 0 20px rgba(79, 70, 229, 0.5)',
				'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
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
