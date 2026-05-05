<template>
	<section class="services bg-hakooi">
		<div class="mx-auto container  pt-16">
			<div
				class="flex md:flex-row flex-col text-white leading-relaxed z-10 relative "
			>
				<div class="flex-1 px-6" data-aos="fade-up">
					<WebDevIcon
						class="svg-asset fill-current text-white h-auto w-1/2 m-auto mb-10"
					/>
					<h3 class="text-3xl text-gray-800 font-bold  mb-3">
						Web Development
					</h3>
					<p class="text-gray-600 mb-8 font-paragraph">
						We specialize in the scalable web applications using Ruby on Rails,
						Javascript, and related technologies
					</p>
				</div>
				<div class="flex-1 px-6" data-aos="fade-up" data-aos-delay="150">
					<MobileIcon
						class="svg-asset fill-current text-white h-auto w-1/2 m-auto mb-10"
					/>
					<h3 class="text-3xl text-gray-800 font-bold leading-relaxed mb-3">
						Mobile Application
					</h3>
					<p class="text-gray-600 mb-8 font-paragraph">
						We help you deliver stylish, high-performing, engaging 
						mobile applications for Android and iOS platforms
					</p>
				</div>
				<div class="flex-1 px-6" data-aos="fade-up" data-aos-delay="300">
					<BrandingIcon
						class="svg-asset fill-current text-white h-auto w-1/2 m-auto mb-10"
						stroke-dasharray="1000"
					/>
					<h3 class="text-3xl text-gray-800 font-bold leading-relaxed mb-3">
						UI/UX Design
					</h3>
					<p class="text-gray-600 mb-8 font-paragraph">
						Not only creating beautiful design, but we also create highly usable, 
						and intuitive designs that represent you
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
// import Anime from 'animejs'
import WebDevIcon from '@/assets/svg/hakooi-web-development.svg'
import BrandingIcon from '@/assets/svg/branding.svg'
import MobileIcon from '@/assets/svg/hakooi-app-development.svg'
export default {
	components: {
		WebDevIcon,
		BrandingIcon,
		MobileIcon
	},
	mounted() {
		const targets = '.svg-asset path'
		this.$anime({
			targets,
			strokeDasharray: 0,
			strokeDashoffset: 0,
			// easing: 'steps',
			easing: 'steps(9)',
			duration: 1200,
			direction: 'alternate',
			loop: true
		})
	}
}
</script>
<style>
.svg-asset {
	stroke: #cccfff;
	stroke-dasharray: 9;
	stroke-dashoffset: 0;
	fill: none;
	stroke-width: 3;
	stroke-linecap: round;
}
</style>
