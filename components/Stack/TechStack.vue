<template>
	<section class="tech-stack">
		<div class="mx-auto container p-6 py-24" data-aos="fade-up">
			<h3 class="text-3xl text-white text-center font-bold leading-none mb-6 ">
				Tech Stack
			</h3>
			<p
				class="uppercase font-paragraph text-white text-center leading-tight text-xl font-bold mb-12"
			>
				List of our tools of the trade to solve your digital problems
			</p>
			<div class="flex flex-wrap md:flex-row flex-col text-white mt-12">
				<div class="tech-logo md:w-1/4 p-6">
					<RubyLogo class=" text-white w-1/2  h-auto m-auto p-6" alt="Ruby" />
				</div>
				<div class="tech-logo md:w-1/4 p-6">
					<RailsLogo class=" text-white w-1/2  h-auto m-auto p-6" />
				</div>
				<div class="tech-logo md:w-1/4 p-6">
					<VueLogo class=" text-white w-1/2  h-auto m-auto p-6" />
				</div>
				<div class="tech-logo md:w-1/4 p-6">
					<NuxtLogo class=" text-white w-1/2  h-auto m-auto p-6" />
				</div>
				<div class="tech-logo md:w-1/4 p-6">
					<TailwindLogo class=" text-white w-1/2  h-auto m-auto p-6" />
				</div>
				<div class="tech-logo md:w-1/4 p-6">
					<GatsbyLogo class=" text-white w-1/2  h-auto m-auto p-6" />
				</div>
				<div class="tech-logo md:w-1/4 p-6">
					<ReactLogo class=" text-white w-1/2  h-auto m-auto p-6" />
				</div>
				<div class="tech-logo md:w-1/4 p-6">
					<PostgreLogo class=" text-white w-1/2  h-auto m-auto p-6" />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import RubyLogo from '~/assets/svg/ruby.svg'
import GatsbyLogo from '~/assets/svg/gatsby.svg'
import VueLogo from '~/assets/svg/vue.svg'
import NuxtLogo from '~/assets/svg/nuxt.svg'
import RailsLogo from '~/assets/svg/ruby-on-rails.svg'
import TailwindLogo from '~/assets/svg/tailwindcss-icon.svg'
import ReactLogo from '~/assets/svg/react.svg'
import PostgreLogo from '~/assets/svg/postgresql.svg'
export default {
	components: {
		RubyLogo,
		GatsbyLogo,
		VueLogo,
		NuxtLogo,
		RailsLogo,
		TailwindLogo,
		ReactLogo,
		PostgreLogo
	},
	mounted() {
		const targets = '.tech-logo svg path'
		this.$anime({
			targets,
			strokeDasharray: 20,
			strokeDashoffset: 20,
			easing: 'steps',
			duration: 3000,
			delay: function(el, i) {
				return i * 250
			},
			direction: 'alternate',
			loop: true
		})
	}
}
</script>
<style lang="scss" scoped>
.tech-logo {
	@apply flex;
	transition: all 1s ease;
	stroke: #cccfff;
	stroke-dasharray: 10;
	stroke-dashoffset: 10;
	stroke-width: 3;
	stroke-linecap: round;
	svg {
		transition: all 1s ease;
		filter: grayscale(0.9);
	}
	@apply bg-hakooi-900;
	&:nth-child(-2n + 4) {
		@apply bg-hakooi-600;
	}
	&:nth-last-of-type(-2n + 4) {
		@apply bg-hakooi-600;
	}
	&:hover {
		@apply bg-hakooi-300;
		cursor: pointer;
		svg {
			filter: grayscale(0);
		}
	}
}
@media screen and (max-width: 900px) {
	.tech-logo {
		&:nth-child(-2n + 4) {
			@apply bg-hakooi-900;
		}
		&:nth-child(odd) {
			@apply bg-hakooi-600;
		}
	}
}
</style>
