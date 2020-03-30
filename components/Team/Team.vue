<template>
	<section class="team bg-hakooi">
		<div class="mx-auto container p-6 pt-16 md:pt-24">
			<div
				class="w-full flex flex-col text-white z-10 relative"
				data-aos="fade-up"
			>
				<p
					class="uppercase text-gray-800 leading-relaxed text-3xl font-bold mb-6 self-center text-center"
				>
					<!-- We are a small team whom focus on creating better problem-solving
					while strive to perfecting our craft in software industry especially
					on custom handcrafted ruby on rails web application. You name it, we make it. -->
					<!-- We are focused to deliver advanced web development for a flawless user experience -->
					We are a small team that does big things. You name it, we make it.
				</p>
				<div class="flex flex-wrap flex-row justify-around md:-mx-6">
					<div
						class="team-card md:w-1/2 md:px-6"
						data-aos="fade-up"
						data-aos-delay="150"
					>
						<picture>
							<img
								class="w-full object-contain"
								alt="hakooi-logo"
								src="~/assets/images/komeng.jpeg"
							/>
						</picture>
						<h3 class="text-3xl text-white font-bold leading-none mt-12">
							mohamed
						</h3>
						<h4 class="text-3xl text-white font-bold leading-none mt-6">
							Engineering Director
						</h4>
						<p class="my-6 font-paragraph leading-relaxed">
							Moh has been working in the field of software engineering for more
							than 10 years. His passion is to find a simple and elegant
							solution to the most complex ideas and problems.
						</p>
					</div>
					<div
						class="team-card md:w-1/2 md:px-6"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<picture>
							<img
								class="w-full object-contain"
								alt="hakooi-logo"
								src="~/assets/images/alfianjau.jpeg"
							/>
						</picture>
						<h3 class="text-3xl text-white font-bold leading-none mt-12">
							Alfian
						</h3>
						<h4 class="text-3xl text-white font-bold leading-none mt-6">
							Design director
						</h4>
						<p class="my-6 font-paragraph leading-relaxed">
							Al brings more than 5 years of experience in Web and Mobile
							Design. Al is a creative and passionate designer who loves
							crafting intuitive and elegant UI solutions.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
img {
	filter: grayscale(1);
}
</style>
