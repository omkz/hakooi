<template>
	<nav>
		<div class="menu-icon">
			<span class="menu-icon__line menu-icon__line-left"></span>
			<span class="menu-icon__line"></span>
			<span class="menu-icon__line menu-icon__line-right"></span>
		</div>

		<div class="nav">
			<div class="nav__content">
				<ul class="nav__list">
					<li class="nav__list-item">Home</li>
					<li class="nav__list-item">Services</li>
					<li class="nav__list-item">Team</li>
					<li class="nav__list-item">Reach Us</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
// import Hero from '~/components/Hero/Hero'
export default {
	mounted() {
		let body
		let menu
		let menuItems

		const init = () => {
			body = document.querySelector('body')
			menu = document.querySelector('.menu-icon')
			menuItems = document.querySelectorAll('.nav__list-item')

			applyListeners()
		}

		const applyListeners = () => {
			menu.addEventListener('click', () => toggleClass(body, 'nav-active'))
		}

		const toggleClass = (element, stringClass) => {
			if (element.classList.contains(stringClass))
				element.classList.remove(stringClass)
			else element.classList.add(stringClass)
		}

		init()
	}
}
</script>
<style lang="scss">
$background--color: #3341ff;
$icon--color: #3341ff;
$font--color: #ffffff;
$font--color--active: #3341ff;
$font--primary: 'Montserrat', sans-serif;
$transition--length: 0.8;

//default state
.menu-icon {
	$size: 30px;
	height: $size;
	width: $size;
	position: fixed;
	z-index: 2;
	right: 2rem;
	top: 30px;
	cursor: pointer;
	transform: scale(1.5);
	&::before {
		content: 'MENU';
		color: white;
		position: absolute;
		right: calc(100% + 10px);
		top: 0;
		font-size: 1.5rem;
		line-height: 1.2rem;
	}
	&__line {
		height: 2px;
		width: $size;
		display: block;
		background-color: $font--color;
		margin-bottom: 4px;
		transition: transform 0.2s ease, background-color 0.5s ease;
	}
	&__line-left {
		width: $size / 2;
	}
	&__line-right {
		width: $size / 2;
		float: right;
	}
}

.nav {
	$width: 100vw;
	$height: 100vh;
	$font--size--calc: calc(2vw + 10px);
	$transition--easing: cubic-bezier(0.77, 0, 0.175, 1);
	position: fixed;
	z-index: 1;
	&:before,
	&:after {
		content: '';
		position: fixed;
		width: $width;
		height: $height;
		background: rgba(#ffffff, 0.2);
		z-index: -1;
		transition: transform $transition--easing $transition--length + s;
		transform: translateX(0%) translateY(-100%);
	}
	&:after {
		background: rgba(#ffffff, 1);
		transition-delay: 0s;
	}
	&:before {
		transition-delay: 0.1s;
	}
	&__content {
		position: fixed;
		top: 50%;
		transform: translate(0%, -50%);
		width: 100%;
		text-align: center;
		font-size: $font--size--calc;
		font-weight: 200;
		cursor: pointer;
	}
	&__list-item {
		position: relative;
		display: inline-block;
		transition-delay: $transition--length + s;
		opacity: 0;
		color: $background--color;
		transform: translate(0%, 100%);
		transition: opacity 0.2s ease, transform 0.3s ease;
		margin-right: 25px;
		&:before {
			content: '';
			position: absolute;
			background: $font--color--active;
			width: 20px;
			height: 1px;
			top: 100%;
			transform: translate(0%, 0%);
			transition: all 0.3s ease;
			z-index: -1;
		}
		&:hover {
			&:before {
				width: 100%;
			}
		}
	}
}

//active state
body.nav-active {
	$menu--items--count: 4;
	.menu-icon {
		&__line {
			background-color: $background--color;
			transform: translateX(0px) rotate(-45deg);
		}
		&__line-left {
			transform: translateX(1px) rotate(45deg);
		}
		&__line-right {
			transform: translateX(-2px) rotate(45deg);
		}
	}
	.nav {
		visibility: visible;
		&:before,
		&:after {
			transform: translateX(0%) translateY(0%);
		}
		&:after {
			transition-delay: 0.1s;
		}
		&:before {
			transition-delay: 0s;
		}
		&__list-item {
			opacity: 1;
			transform: translateX(0%);
			transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
			@for $i from 0 through $menu--items--count {
				&:nth-child(#{$i}) {
					transition-delay: $transition--length * $i / 8 + 0.5 + s;
				}
			}
		}
	}
}
</style>
