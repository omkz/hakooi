<template>
	<section class="home bg-hakooi">
		<div
			class="mx-auto container flex flex-wrap flex-col py-24 md:py-32 mb-24 z-10 relative"
			data-aos="fade-up"
		>
			<!--Left Col-->
			<div class="flex justify-center md:justify-start">
				<div class="hakooi-image px-6 pb-2/3 h-full sm:w-full md:w-auto -ml-6">
					<HakooiLogo class="w-32 h-32 md:w-48 md:h-48 animate-float" />
				</div>
			</div>
			<div
				class="w-full leading-relaxed text-4xl md:text-6xl md:pt-24 justify-center text-center"
			>
				<h3 class="font-bold px-6 text-4xl md:text-5xl text-white drop-shadow-lg">
					We are Hakooi
				</h3>
				<h3 class="font-bold px-6 pb-4 text-white text-3xl md:text-5xl">
					Ruby on Rails and Web Design Crafter
				</h3>
			</div>
			<p
				class="font-paragraph text-white mb-4 text-xl md:text-2xl px-6 md:w-10/12 uppercase self-center text-center"
			>
				A creative studio based in Yogyakarta, Indonesia
			</p>
			<p
				class="font-paragraph text-white mb-8 text-xl md:text-2xl px-6 md:w-10/12 uppercase self-center text-center"
			>
				We transform your great idea into the next big things
			</p>
			<!--Right Col-->
		</div>
	</section>
</template>
<script>
import HakooiLogo from '@/assets/svg/hakooi-logo-white.svg'

export default {
	components: {
		HakooiLogo
	}
}
</script>
<style scoped>
.svg-icon {
	stroke-dasharray: 10;
	stroke-dashoffset: 10;

	g {
		fill: none;
	}
}
</style>
