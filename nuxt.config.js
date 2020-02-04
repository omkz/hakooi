/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
	process.env.DEPLOY_ENV === 'GH_PAGES'
		? {
				router: {
					base: '/hakooi.github.io/'
				}
		  }
		: {}

export default {
	...routerBase,
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
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
		'nuxt-webfontloader'
		// 'nuxt-purgecss'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/* Google fonts */
	webfontloader: {
		custom: {
			families: ['Source Sans Pro:n3,n4', 'Roboto:n3,n7'],
			urls: [
				// for each Google Fonts add url + options you want
				// here add font-display option
				'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap',
				'https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap'
			]
		}
	},
	/* Purge CSS */

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
