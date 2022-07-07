"use strict"

import { isWebp, whatKindOfDevice } from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", function (event) {
	isWebp();
	whatKindOfDevice();


	let iconMenu = document.querySelector('.menu__icon');
	let menuBody = document.querySelector('.menu__body');

	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		});
	}

	let menuLinks = document.querySelectorAll('.menu__link');

	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", function (e) {



				if (menuLink) {


					if (iconMenu.classList.contains('_active')) {
						document.body.classList.remove('_lock');
						iconMenu.classList.remove('_active');
						menuBody.classList.remove('_active');
					}

				}
			});
		});
	}

});










