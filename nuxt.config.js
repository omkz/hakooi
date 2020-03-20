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
		title: 'Ruby on Rails and Web Design Studio | Hakooi',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				name: 'apple-mobile-web-app-title',
				content: 'Ruby on Rails and Web Design Studio | Hakooi'
			},
			{ name: 'application-name', content: 'Hakooi' },
			{ name: 'msapplication-TileColor', content: '#ffc40d' },
			{ name: 'theme-color', content: '#3341ff' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			},
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3341ff' },
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png'
			}
		]
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
	plugins: [
		{ src: '@/plugins/vue-animejs' },
		{ src: '@/plugins/particle', ssr: false },
		{ src: '@/plugins/aos', ssr: false }
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
		[
			'@nuxtjs/google-analytics',
			{
				id: 'UA-161391939-1'
			}
		]
	],
	tailwindcss: {
		configPath: '~/config/tailwind.config.js',
		cssPath: '~/assets/css/tailwind.css',
		purgeCSSInDev: false,
		exposeConfig: false
	},
	//Static folder config
	/* static: {
		maxAge: 1000 * 60 * 60 * 24 * 7
	}, */
	serverMiddleware: ['~/api/headers.js'],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		['vue-scrollto/nuxt', { duration: 1500, easing: 'ease-in-out' }],
		'nuxt-webfontloader',
		'nuxt-purgecss',
		'nuxt-svg-loader',
		[
			'nuxt-gmaps',
			{
				key: process.env.API_KEY
				//you can use libraries: ['places']
			}
		]
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
		],
		whitelist: [
			'aos-init',
			'aos-animate',
			'data-aos-delay',
			'data-aos-duration',
			'fade-up'
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
