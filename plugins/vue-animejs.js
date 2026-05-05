import Vue from 'vue'
import anime from 'animejs'

// Make animejs available globally via Vue.prototype
Vue.prototype.$anime = anime

// Also expose as window.anime for compatibility
if (typeof window !== 'undefined') {
	window.anime = anime
}
