<template>
	<div>
		<HakooiLogo
			class="hakooi-logo"
			v-anime="{
				opacity: [0.1, 0.3, 0.1],
				duration: 6000,
				easing: 'easeInOutElastic',
				loop: true
			}"
		/>
	</div>
</template>
<script>
import HakooiLogo from '~/assets/svg/hakooi-logo-white.svg'
export default {
	components: {
		HakooiLogo
	}
}
</script>
<style lang="scss" scoped>
.hakooi-logo {
	width: 200px;
	height: 200px;
	top: 50%;
	left: 50%;
	margin-left: -100px;
	margin-top: -100px;
	opacity: 0.3;
	z-index: 1;
	position: fixed;
}
@media screen and (max-width: 900px) {
	.hakooi-logo {
		display: none;
	}
}
</style>
