<template>
	<footer class="bg-hakooi">
		<div class="mx-auto container">
			<div
				class="w-full flex flex-col md:flex-row py-6 text-white h-screen items-center"
			>
				<div class="flex-1 mb-6">
					<a
						class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
						href="#"
						>HAKOOI STUDIO</a
					>
				</div>

				<div class="flex-1 text-xl w-5/6 sm:w-1/2 p-6">
					<NetworkIcon class="fill-current text-white h-32 w-32 mb-10" />
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
						Lorem ipsum dolor sit amet
					</h3>
					<p class="text-gray-600 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
						ipsum eu nunc commodo posuere et sit amet ligula.
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
				<div class="flex-1 text-xl w-5/6 sm:w-1/2 p-6">
					<CraftIcon class="fill-current text-white h-32 w-32 mb-10" />
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
						Lorem ipsum dolor sit amet
					</h3>
					<p class="text-gray-600 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
						ipsum eu nunc commodo posuere et sit amet ligula.
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
				<div class="flex-1 text-xl w-5/6 sm:w-1/2 p-6">
					<BrandingIcon class="fill-current text-white h-32 w-32 mb-10" />
					<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
						Lorem ipsum dolor sit amet
					</h3>
					<p class="text-gray-600 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
						ipsum eu nunc commodo posuere et sit amet ligula.
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
	</footer>
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
