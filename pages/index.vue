<template>
	<div class="leading-normal tracking-normal gradient">
		<Navbar />
		<Hero />
		<Service />
		<Team />
		<TechStack />
		<Footer />
		<Adornment />
	</div>
</template>

<script>
// import Navbar from '~/components/Nav/Nav'
import anime from 'animejs'
import Navbar from '~/components/Nav/NavAnima'
import Hero from '~/components/Hero/Hero'
import Service from '~/components/Service/Service'
import Footer from '~/components/Footer/Footer'
import Team from '~/components/Team/Team'
import TechStack from '~/components/Stack/TechStack'
import Adornment from '~/components/Details/Adornment'

export default {
	data() {
		return {
			title: 'Ruby on Rails Studio | Hakooi'
		}
	},
	head() {
		return {
			title: this.title,
			meta: [
				{ hid: 'og:title', name: 'og:title', content: this.title },
				{
					hid: 'description',
					name: 'description',
					content:
						'Hakooi is a creative digital studio based in Yogyakarta, Indonesia. We specialize in Ruby on Rails Web Application'
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content:
						'Ruby on Rails development, Ruby on Rails Company, Ruby on Rails development company, Ruby on Rails Yogyakarta, Web Design, Web Design Yogyakarta, RoR consultant, Ruby programming, Web Design Indonesia'
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: '/hakooi-icon-square.png'
				},
				{
					hid: 'og:image:alt',
					name: 'og:image:alt',
					content: 'Ruby on Rails Studio | Hakooi'
				}
			]
		}
	},
	components: {
		Navbar,
		Hero,
		Service,
		Team,
		TechStack,
		Footer,
		Adornment
	},
	methods: {
		scroll(arg) {
			let el = document.querySelector(arg.to),
				offset = parseInt(arg.offset) || 0,
				duration = arg.duration || 800,
				easing = arg.easing || 'easeOutExpo',
				callback = arg.callback || null

			if (el) {
				anime({
					targets: ['html', 'body'],
					scrollTop: el.offsetTop - offset,
					duration: duration,
					easing: easing,
					complete: callback
				}).finished.then(() => {
					bus.$emit('scroll:finished', true)
				})
			}
		}
	}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.gradient {
	background: #3341ff;
}

.title {
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
