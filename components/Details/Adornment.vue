<template>
	<div class="hakooi-adornment">
		<HakooiLogo
			class="hakooi-logo"
			v-anime="{
				opacity: [0, 0.3, 0],
				duration: 6000,
				easing: 'linear',
				direction: 'alternate',
				loop: true
			}"
		/>
		<vue-particles
			id="particles-js"
			color="#6670FF"
			:particleOpacity="0.6"
			:particlesNumber="60"
			shapeType="edge"
			:particleSize="6"
			linesColor="#99A0FF"
			:linesWidth="1"
			:lineLinked="true"
			:lineOpacity="0.3"
			:linesDistance="60"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="false"
			clickMode="bubble"
		>
		</vue-particles>
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
#particles-js {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
}
@media screen and (max-width: 900px) {
	.hakooi-logo {
		display: none;
	}
}
</style>
