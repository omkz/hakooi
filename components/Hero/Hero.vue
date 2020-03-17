<template>
	<section class="home bg-hakooi">
		<div class="mx-auto container md:h-screen flex flex-wrap flex-col py-6 ">
			<!--Left Col-->
			<div class="flex justify-start">
				<div class="hakooi-image px-6 pb-2/3 h-full sm:w-full md:w-auto">
					<!-- <img
							alt="hakooi-logo"
							class="h-48 w-full object-contain"
							src="~/static/images/hakooi-logo.png"
					/>-->
					<!-- <picture>
						<img
							class="h-auto w-1/2 sm:w-3/4 m-auto object-contain"
							alt="hakooi-logo"
							src="~/assets/images/hakooi-logo.webp"
						/>
					</picture> -->
					<HakooiLogo class="w-24 h-24" />
				</div>
			</div>
			<div
				class="w-full leading-relaxed text-4xl md:text-5xl md:pt-24 justify-center text-center"
			>
				<h3 class="font-bold px-6 text-4xl text-white">We are Hakooi</h3>
				<!-- <h3 class="font-bold px-6 text-white">Premium Web design studio</h3> -->
				<h3 class="font-bold px-6 pb-8 text-white">Web Design and Ruby on Rails Crafter</h3>
			</div>
			<p
				class="font-paragraph text-white text-2xl px-6 w-2/3 uppercase self-center text-center"
			>
				creative studio based in yogyakarta, Indonesia. 
				
			</p>
			<p class="font-paragraph text-white text-2xl px-6 w-2/3 uppercase self-center text-center">
                We create websites, mobile applications, eCommerce platforms, and much more.
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
