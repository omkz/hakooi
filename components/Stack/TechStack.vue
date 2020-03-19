<template>
	<section class="tech-stack">
		<div class="mx-auto container p-6 py-24 z-10 relative" data-aos="fade-up">
			<h3 class="text-3xl text-white text-center font-bold leading-none mb-6 ">
				Tech Stack
			</h3>
			<p
				class="uppercase font-paragraph text-white md:text-center leading-relaxed text-xl font-bold mb-12"
			>
				List of our tools of the trade to realize your digital products
			</p>
			<div class="flex flex-wrap flex-row text-white mt-12">
				<div class="tech-logo w-1/2 md:w-1/4 p-6">
					<RubyLogo
						class=" text-white w-1/2  h-auto m-auto md:p-6"
						alt="Ruby"
					/>
				</div>
				<div class="tech-logo w-1/2 md:w-1/4 p-6">
					<RailsLogo class=" text-white w-1/2  h-auto m-auto md:p-6" />
				</div>
				<div class="tech-logo w-1/2 md:w-1/4 p-6">
					<VueLogo class=" text-white w-1/2  h-auto m-auto md:p-6" />
				</div>
				<div class="tech-logo w-1/2 md:w-1/4 p-6">
					<NuxtLogo class=" text-white w-1/2  h-auto m-auto md:p-6" />
				</div>
				<div class="tech-logo w-1/2 md:w-1/4 p-6">
					<TailwindLogo class=" text-white w-1/2  h-auto m-auto md:p-6" />
				</div>
				<div class="tech-logo w-1/2 md:w-1/4 p-6">
					<GatsbyLogo class=" text-white w-1/2  h-auto m-auto md:p-6" />
				</div>
				<div class="tech-logo w-1/2 md:w-1/4 p-6">
					<ReactLogo class=" text-white w-1/2  h-auto m-auto md:p-6" />
				</div>
				<div class="tech-logo w-1/2 md:w-1/4 p-6">
					<PostgreLogo class=" text-white w-1/2  h-auto m-auto md:p-6" />
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
			strokeDasharray: 0,
			strokeDashoffset: 0,
			easing: 'linear',
			duration: 1500,
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
	stroke: #ffffff;
	stroke-dasharray: 9;
	stroke-dashoffset: 0;
	stroke-width: 3;
	stroke-linecap: round;
	svg {
		transition: all 1s ease;
		filter: grayscale(0.9);
	}
	@apply bg-hakooi-600;
	&:nth-child(-2n + 4) {
		@apply bg-hakooi-400;
	}
	&:nth-last-of-type(-2n + 4) {
		@apply bg-hakooi-400;
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
			@apply bg-hakooi-600;
		}
		&:nth-child(odd) {
			@apply bg-hakooi-400;
		}
		svg {
			height: 9rem;
		}
	}
}
</style>
