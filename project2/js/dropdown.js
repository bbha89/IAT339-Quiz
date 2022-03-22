"use strict";

let menu = document.querySelector('#menu');

menu.classList.add('hidden-mobile');

menu.setAttribute('aria-hidden', 'true');
menu.setAttribute('aria-labelledby', 'menu-toggle');

let divnav = document.querySelector('div');
let menuToggle = document.createElement('button');

menuToggle.classList.add('button-mobile');
menuToggle.setAttribute('id', 'menu-toggle');

menuToggle.innerHTML = 'Menu ▼';

menuToggle.setAttribute('aria-label', 'Main menu');
menuToggle.setAttribute('aria-controls', 'menu');
menuToggle.setAttribute('aria-expanded', 'false');

divnav.insertBefore(menuToggle, menu);
menuToggle.addEventListener('click',
	function() {
		if ( menu.classList.contains('hidden-mobile') ) {
			menu.classList.remove('hidden-mobile');
			menu.setAttribute('aria-hidden', 'false');
			menuToggle.setAttribute('aria-expanded', 'true');
			this.innerHTML = 'Menu ▲';
		} else {
			menu.classList.add('hidden-mobile');
			menu.setAttribute('aria-hidden', 'true');
			menuToggle.setAttribute('aria-expanded', 'false');
			this.innerHTML = 'Menu ▼';
		}
	}
);
