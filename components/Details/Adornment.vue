<template>
	<div>
		<HakooiLogo
			class="hakooi-logo"
			v-anime="{
				opacity: 0.6,
				duration: 3000,
				easing: 'linear',
				loop: true,
				alternate: true
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
	opacity: 0;
	z-index: 1;
	position: fixed;
}
</style>
