/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
/* const routerBase =
	process.env.DEPLOY_ENV === 'GH_PAGES'
		? {
				router: {
					base: '/hakooi.github.io/'
				}
		  }
		: {} */

export default {
	// ...routerBase,
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		'nuxt-webfontloader',
		'nuxt-purgecss',
		'nuxt-svg-loader'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/* Google fonts */
	webfontloader: {
		custom: {
			families: ['Bebas Neue', 'Montserrat:n6'],
			urls: [
				// for each Google Fonts add url + options you want
				// here add font-display option
				'https://fonts.googleapis.com/css?family=Bebas+Neue|Montserrat:600&display=swap'
			]
		}
	},
	/* Purge CSS */
	purgeCSS: {
		// your settings here
		extractors: [
			{
				extractor(content) {
					return content.match(/[A-Za-z0-9-_:\\/]+/g) || []
				},
				extensions: ['html', 'vue', 'js']
			}
		]
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extractCSS: true,
		extend(config, ctx) {}
	}
}
