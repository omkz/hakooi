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
			title: 'Ruby on Rails and Web Design Studio | Hakooi'
		}
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'We are delivering Ruby on Rails Web Application and Web Design. Specialize in building Ruby on Rails Web Application'
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content:
						'Ruby on Rails development, Ruby on Rails Yogyakarta, RoR consultant, Ruby on Rails Company, Ruby on Rails development company, Ruby programming, Web Design, Web Design Yogyakarta, Web Design Indonesia'
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
