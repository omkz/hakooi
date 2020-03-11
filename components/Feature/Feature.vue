<template>
	<section class="bg-hakooi">
		<div class="mx-auto container">
			<div class="w-full flex flex-col md:flex-row md:-mx-6 text-white md:h-screen">
				<div class="flex-1 text-xl md:px-6">
					<NetworkIcon class="svg-assets fill-current text-white h-32 w-32 mb-10" />
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Web Application</h3>
					<p
						class="text-gray-600 mb-8"
					>We build scalable web applications with Ruby on Rails, Javascript and related technologies.</p>
					<p class="uppercase text-white md:mb-6">Links</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline text-gray-800 hover:text-hakooi-800"
							>FAQ</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline text-gray-800 hover:text-hakooi-800"
							>Help</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline text-gray-800 hover:text-hakooi-800"
							>Support</a>
						</li>
					</ul>
				</div>
				<div class="flex-1 text-xl md:px-6">
					<CraftIcon class="svg-assets fill-current text-white h-32 w-32 mb-10" />
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Mobile Application</h3>
					<p class="text-gray-600 mb-8">We deliver mobile applicatios using native or hybrid technolgies.</p>
					<p class="uppercase text-white md:mb-6">Legal</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
							>Brand identity</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
							>ruby on rails custom site</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a
								href="#"
								class="transitions duration-300 ease-in underline hover:text-hakooi-800"
							>Marketing landing page</a>
						</li>
					</ul>
				</div>
				<div class="flex-1 text-xl md:px-6">
					<BrandingIcon class="svg-assets fill-current text-white h-32 w-32 mb-10" />
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">UI/UX Design</h3>
					<p class="text-gray-600 mb-8">We not only make beautiful designs, but also simple-to-use.</p>
					<p class="uppercase text-white md:mb-6">Social</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="#" class="transitions duration-300 ease-in underline hover:text-hakooi-800">Facebook</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="#" class="transitions duration-300 ease-in underline hover:text-hakooi-800">Linkedin</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="#" class="transitions duration-300 ease-in underline hover:text-hakooi-800">Twitter</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import NetworkIcon from '@/assets/svg/networking.svg'
import BrandingIcon from '@/assets/svg/branding.svg'
import CraftIcon from '@/assets/svg/craft.svg'
export default {
	components: {
		NetworkIcon,
		BrandingIcon,
		CraftIcon
	}
}
</script>
<style>
.svg-asset {
	stroke-dasharray: 10;
	stroke: #ffffff;
	fill: rgba(255, 255, 255, 1);
	opacity: 60;
	animation: svg-animation 2s ease infinite;
	/* animation: svg-animation 3s cubic-bezier(0, 0.23, 1, 0.1) infinite; */
}

@keyframes svg-animation {
	0% {
		opacity: 10;
		fill: none;
		stroke-dashoffset: 100;
	}
	30% {
		opacity: 10;
		fill: none;
		stroke-dashoffset: 100;
	}
	90% {
		/* fill: rgba(255, 255, 255, 0); */
		opacity: 60;
		/* fill: none; */
		stroke-dashoffset: 100;
	}
	100% {
		opacity: 60;
		/* fill: rgba(255, 255, 255, 1); */
		stroke-dashoffset: 10;
	}
}
</style>
