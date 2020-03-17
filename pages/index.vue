<template>
	<div class="leading-normal tracking-normal gradient">
		<Navbar />
		<Hero />
		<Service />
		<Team />
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
import Adornment from '~/components/Details/Adornment'

export default {
	components: {
		Navbar,
		Hero,
		Service,
		Team,
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

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.gradient {
	background: #3341ff;
}

.title {
	/* font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
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
