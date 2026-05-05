<template>
	<section class="team bg-gradient-to-br from-white to-hakooi-50">
		<div class="mx-auto container p-6 pt-16 md:pt-24">
			<div
				class="w-full flex flex-col text-white z-10 relative"
				data-aos="fade-up"
			>
				<p
					class="uppercase text-hakooi-900 leading-relaxed text-3xl font-bold mb-6 self-center text-center"
				>
					We are a small team that does big things. You name it, we make it.
				</p>
				<div class="flex flex-wrap flex-row justify-around md:-mx-6">
					<div
						class="team-card md:w-1/2 md:px-6"
						data-aos="fade-up"
						data-aos-delay="150"
					>
						<div class="relative group">
							<div class="absolute inset-0 bg-gradient-to-r from-hakooi-500 to-accent-500 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
							<picture class="relative z-10">
								<img
									class="w-full object-contain rounded-2xl"
									alt="hakooi-logo"
									src="~/assets/images/komeng.jpeg"
								/>
							</picture>
						</div>
						<h3 class="text-3xl text-hakooi-900 font-bold leading-none mt-12">
							mohamad
						</h3>
						<h4 class="text-3xl text-accent-600 font-bold leading-none mt-6">
							Engineering Manager
						</h4>
						<p class="my-6 font-paragraph leading-relaxed text-gray-600">
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
						<div class="relative group">
							<div class="absolute inset-0 bg-gradient-to-r from-accent-500 to-cyan-500 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
							<picture class="relative z-10">
								<img
									class="w-full object-contain rounded-2xl"
									alt="hakooi-logo"
									src="~/assets/images/alfianjau.jpeg"
								/>
							</picture>
						</div>
						<h3 class="text-3xl text-hakooi-900 font-bold leading-none mt-12">
							Alfian
						</h3>
						<h4 class="text-3xl text-accent-600 font-bold leading-none mt-6">
							Design director
						</h4>
						<p class="my-6 font-paragraph leading-relaxed text-gray-600">
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
.group:hover img {
	filter: grayscale(0);
}
</style>
