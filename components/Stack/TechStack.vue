<template>
	<section class="tech-stack">
		<div class="mx-auto container p-6" data-aos="fade-up">
			<h3 class="text-3xl text-white text-center font-bold leading-none mb-3">
				Tech Stack we used
			</h3>
			<div class="flex flex-wrap md:flex-row flex-col text-white">
				<div class="tech-logo w-1/4 p-6">
					<RubyLogo class="fill-current text-white h-auto w-1/2 m-auto mb-10" />
				</div>
				<div class="tech-logo w-1/4 p-6">
					<RubyLogo class="fill-current text-white h-auto w-1/2 m-auto mb-10" />
				</div>
				<div class="tech-logo w-1/4 p-6">
					<RubyLogo class="fill-current text-white h-auto w-1/2 m-auto mb-10" />
				</div>
				<div class="tech-logo w-1/4 p-6">
					<RubyLogo class="fill-current text-white h-auto w-1/2 m-auto mb-10" />
				</div>
				<div class="tech-logo w-1/4 p-6">
					<RubyLogo class="fill-current text-white h-auto w-1/2 m-auto mb-10" />
				</div>
				<div class="tech-logo w-1/4 p-6">
					<RubyLogo class="fill-current text-white h-auto w-1/2 m-auto mb-10" />
				</div>
				<div class="tech-logo w-1/4 p-6">
					<RubyLogo class="fill-current text-white h-auto w-1/2 m-auto mb-10" />
				</div>
				<div class="tech-logo w-1/4 p-6">
					<RubyLogo class="fill-current text-white h-auto w-1/2 m-auto mb-10" />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import RubyLogo from '~/assets/svg/ruby.svg'
export default {
	components: {
		RubyLogo
	}
}
</script>
<style lang="scss" scoped>
.tech-logo {
	@apply bg-hakooi-400;
  &:nth-child(odd){
    @apply bg-hakooi-600
  }
  svg{
    filter:grayscale(.9)
  }
}
</style>
