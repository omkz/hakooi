<template>
	<div class="leading-normal tracking-normal gradient">
		<Navbar />
		<Hero />
		<Service />
		<Team />
		<Footer />
	</div>
</template>

<script>
import Navbar from '~/components/Nav/Nav'
import Hero from '~/components/Hero/Hero'
import Service from '~/components/Service/Service'
import Footer from '~/components/Footer/Footer'
import Team from '~/components/Team/Team'

export default {
	components: {
		Navbar,
		Hero,
		Service,
		Team,
		Footer
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
	background: linear-gradient(90deg, #99a0ff 0%, #3341ff 100%);
	opacity: 0.96;
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
