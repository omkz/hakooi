<template>
	<section class="services bg-hakooi">
		<div class="mx-auto container">
			<div class="flex md:flex-row flex-col text-white ">
				<div class="flex-1 text-xl px-6">
					<NetworkIcon
						class="svg-asset fill-current text-white h-auto w-1/2 m-auto mb-10"
					/>
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
						Web Application
					</h3>
					<p class="text-gray-600 mb-8">
						We specialize in the scalable web applications with complex and rich functionality
						using Ruby on Rails, Javascript, and related technologies.
				        We can handle heavy loads and are happy to undertake the solution of complex problems.
					</p>
					<p class="uppercase text-white md:mb-6">Links</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline text-gray-800 hover:text-hakooi-800"
								>FAQ</a
							>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline text-gray-800 hover:text-hakooi-800"
								>Help</a
							>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline text-gray-800 hover:text-hakooi-800"
								>Support</a
							>
						</li>
					</ul>
				</div>
				<div class="flex-1 text-xl px-6">
					<CraftIcon
						class="svg-asset fill-current text-white h-auto w-1/2 m-auto mb-10"
					/>
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
						Mobile Application
					</h3>
					<p class="text-gray-600 mb-8">
						We help our clients deliver world-class, beautiful, engaging iOS and Android applications. 
						Our team knows these platforms inside out. Depending on your requirements, 
						it can be a native iOS/Android app, a cross-platform, or a hybrid app.
					</p>
					<p class="uppercase text-white md:mb-6">Legal</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
								>Brand identity</a
							>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
								>ruby on rails custom site</a
							>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
								>Marketing landing page</a
							>
						</li>
					</ul>
				</div>
				<div class="flex-1 text-xl px-6">
					<BrandingIcon
						class="svg-asset fill-current text-white h-auto w-1/2 m-auto mb-10"
						stroke-dasharray="1000"
					/>
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
						UI/UX Design
					</h3>
					<p class="text-gray-600 mb-8">
						We're not only create beautiful designs, but also highly usable and intuitive designs.
						Our attention to detail and UX design expertise is what makes us one of the top UX design firms in Indonesia. 
						Together, we’ll improve the usability and usefulness of your applications for an optimal user experience.
					</p>
					<p class="uppercase text-white md:mb-6">Social</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
								>Facebook</a
							>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
								>Linkedin</a
							>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
								>Twitter</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
// import Anime from 'animejs'
import NetworkIcon from '@/assets/svg/networking.svg'
import BrandingIcon from '@/assets/svg/branding.svg'
import CraftIcon from '@/assets/svg/craft.svg'
export default {
	components: {
		NetworkIcon,
		BrandingIcon,
		CraftIcon
	},
	mounted() {
		const targets = '.svg-asset'
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
<style>
.svg-asset {
	stroke: #ffffff;
	stroke-dasharray: 10;
	stroke-dashoffset: 10;
	fill: none;
}
</style>
