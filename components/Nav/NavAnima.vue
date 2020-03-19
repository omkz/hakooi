<template>
	<nav>
		<div class="menu-icon right-6">
			<span class="menu-icon__line menu-icon__line-left"></span>
			<span class="menu-icon__line"></span>
			<span class="menu-icon__line menu-icon__line-right"></span>
		</div>
		<div class="nav">
			<div class="nav__content">
				<div class="menu menu--sleek">
					<a class="menu__item" href="#" v-scroll-to="'.home'">
						<span class="menu__item-name">Home</span>
						<span class="menu__item-label">Explore our landing page</span>
					</a>
					<a class="menu__item" href="#" v-scroll-to="'.services'">
						<span class="menu__item-name">Services</span>
						<span class="menu__item-label">Our problem solving services</span>
					</a>
					<a class="menu__item" href="#" v-scroll-to="'.team'">
						<span class="menu__item-name">Team</span>
						<span class="menu__item-label">Meet our badass team</span>
					</a>
					<a class="menu__item" href="#" v-scroll-to="'footer'">
						<span class="menu__item-name">Reach Us</span>
						<span class="menu__item-label">Catch up to us</span>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
// import Hero from '~/components/Hero/Hero'
import Anime from 'animejs'
import Charming from 'charming'
export default {
	mounted() {
		let body
		let menu
		let menuItems

		const init = () => {
			body = document.querySelector('body')
			menu = document.querySelector('.menu-icon')
			menuItems = document.querySelector('.menu')

			applyListeners()
		}

		const applyListeners = () => {
			menu.addEventListener('click', () => toggleClass(body, 'nav-active'))
			menuItems.addEventListener('click', () => removeClass(body, 'nav-active'))
		}

		const toggleClass = (element, stringClass) => {
			if (element.classList.contains(stringClass))
				element.classList.remove(stringClass)
			else element.classList.add(stringClass)
		}
		const removeClass = (element, stringClass) => {
			if (element.classList.contains(stringClass))
				element.classList.remove(stringClass)
		}

		init()
		const items = Array.from(document.querySelectorAll('.menu > .menu__item'))

		class Item {
			constructor(el) {
				this.DOM = {}
				this.DOM.el = el
				this.DOM.label = el.querySelector('.menu__item-label')
				this.colors = {
					active: window
						.getComputedStyle(this.DOM.el)
						.getPropertyValue('--menu-item-color')
				}
				Charming(this.DOM.label)
				this.DOM.labelLetters = Array.from(
					this.DOM.label.querySelectorAll('span')
				)
				this.colors.initial = window.getComputedStyle(
					this.DOM.labelLetters[0]
				).color
				this.initEvents()
			}
			initEvents() {
				this.mouseenterFn = () =>
					(this.mouseTimeout = setTimeout(() => {
						this.isActive = true
						Anime.remove(this.DOM.labelLetters)
						Anime({
							targets: this.DOM.labelLetters,
							delay: (t, i) => i * 7,
							translateY: [
								{ value: 10, duration: 150, easing: 'easeInQuad' },
								{ value: [-10, 0], duration: 150, easing: 'easeOutQuad' }
							],
							opacity: [
								{ value: 0, duration: 150, easing: 'linear' },
								{ value: 1, duration: 150, easing: 'linear' }
							],
							color: {
								value: this.colors.active,
								duration: 1,
								delay: (t, i, l) => i * 7 + 150
							}
						})
					}, 50))

				this.mouseleaveFn = () => {
					clearTimeout(this.mouseTimeout)
					if (!this.isActive) return
					this.isActive = false

					Anime.remove(this.DOM.labelLetters)
					Anime({
						targets: this.DOM.labelLetters,
						delay: (t, i, l) => (l - i - 1) * 7,
						translateY: [
							{ value: 10, duration: 150, easing: 'easeInQuad' },
							{ value: [-10, 0], duration: 150, easing: 'easeOutQuad' }
						],
						opacity: [
							{ value: 0, duration: 150, easing: 'linear' },
							{ value: 1, duration: 150, easing: 'linear' }
						],
						color: {
							value: this.colors.active,
							duration: 1,
							delay: (t, i, l) => (l - i - 1) * 7 + 150
						}
					})
				}

				this.DOM.el.addEventListener('mouseenter', this.mouseenterFn, {
					passive: true
				})
				this.DOM.el.addEventListener('touchstart', this.mouseenterFn, {
					passive: true
				})
				this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn, {
					passive: true
				})
				this.DOM.el.addEventListener('touchend', this.mouseleaveFn, {
					passive: true
				})
			}
		}

		items.forEach((item) => new Item(item))
	}
}
</script>
<style lang="scss">
$background--color: #3341ff;
/* $hakooi--subtle: #99a0ff; */
$hakooi--darken: #000ecc;
$icon--color: #3341ff;
$font--color: #ffffff;
$font--color--active: #6670ff;
$font--primary: 'Montserrat', sans-serif;
$transition--length: 0.8;

//default state
.menu-icon {
	$size: 30px;
	height: $size;
	width: $size;
	position: fixed;
	z-index: 30;
	right: 50px;
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
	$font--size--calc: calc(1.5vw + 10px);
	$transition--easing: cubic-bezier(0.77, 0, 0.175, 1);
	position: fixed;
	z-index: 20;
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
		/* display: none; */
		font-size: $font--size--calc;
	}
	.menu {
		position: fixed;
		top: -1em;
		transform: translate(0, -150%);
		transition: transform 1.5s ease;
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
		&__content {
			position: fixed;
			/* top: 50%; */
			transform: translate(0%, -50%);
			width: 100%;
			text-align: center;
			/* font-size: $font--size--calc; */
			font-weight: 200;
			cursor: pointer;
			display: flex;
			justify-content: center;
		}
	}
	//common style
	.menu {
		position: fixed;
		top: 1em;
		z-index: 10;
		display: block;
		transform: translate(0, 0);
		&__item {
			line-height: 1;
			position: relative;
			display: block;
			margin: 1em 0;
			outline: none;
			&-name,
			&-label {
				position: relative;
				display: inline-block;
			}
			&-name {
				font-size: 1.25em;
			}
			&-label {
				margin: 0 0 0 0.5em;
			}
		}
		&--sleek {
			.menu__item {
				display: flex;
				flex-wrap: wrap;
				align-items: flex-end;
				margin: 2em 0;
				--menu-item-color: #cccfff;
				&:hover {
					color: $background--color;
					.menu__item-name {
						&::before {
							transform: scale3d(1, 1, 1);
							transform-origin: 50% 0%;
						}
					}
				}
				&:focus {
					.menu__item-name {
						&::before {
							transform: scale3d(1, 1, 1);
							transform-origin: 50% 0%;
						}
					}
				}
				&-name {
					padding: 0.25em;
					color: $background--color;

					&::before {
						content: '';
						position: absolute;
						z-index: -1;
						bottom: 0;
						left: 0;
						width: 100%;
						height: 50%;
						background: var(--menu-item-color);
						transform: scale3d(1, 0, 1);
						transform-origin: 50% 100%;
						transition: transform 0.3s;
						transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
					}
				}
				&-label {
					display: flex;
					flex-wrap: wrap;
					width: 100%;
					margin: 0.5em 0 0 1.5em;
					white-space: pre;
					span {
						display: inline-block;
					}
				}
			}
		}
		@media screen and (max-width: 50em) {
			.menu--sleek {
				.menu__item-label {
					font-size: 0.6em;
					margin-left: 0.25em;
				}
			}
		}
	}
}
@media only screen and (max-width: 900px) {
	.menu-icon {
		right: 2rem;
	}
	.nav {
		.menu {
			top: -2.5rem;
		}
	}
}
</style>
