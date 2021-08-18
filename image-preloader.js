/**
 * Image preloader - v1.1.0
 * Copyright 2021 Abel Brencsan
 * Released under the MIT License
 */

var ImagePreloader = (function(){

	'use strict';

	var options = {
		wrapper: null,
		attribute: null,
		isPreloadedClass: 'is-image-preloaded',
		areAllPreloadedClass: 'are-all-images-preloaded',
		callback: null
	};

	/**
	* Preload all images with given attribute inside given wrapper element. It swaps initial and final sources after image is preloaded. (public)
	* @param givenOptions object
	*/
	var load = function(givenOptions) {
		if (typeof givenOptions !== 'object') throw 'Image preloader options must be an object';
		if (typeof givenOptions.wrapper !== 'object') throw 'Image preloader "wrapper" option must be an object';
		if (typeof givenOptions.attribute !== 'string') throw 'Image preloader "attribute" option must be a string';
		for (var key in options) {
			if (givenOptions.hasOwnProperty(key)) {
				options[key] = givenOptions[key];
			}
		}
		var images = options.wrapper.querySelectorAll('[' + options.attribute + ']');
		var loadedSourceCount = 0;
		var totalSourceCount = images.length;
		for (var i = 0; i < images.length; i++) {
			var image = new Image();
			image.src = images[i].getAttribute(options.attribute);
			image.addEventListener('load', function(event) {
				loadedSourceCount++;
				if (loadedSourceCount == totalSourceCount) {
					for (var j = 0; j < images.length; j++) {
						if (images[j].hasAttribute('srcset')) {
							images[j].setAttribute('srcset', images[j].getAttribute(options.attribute));
						}
						else {
							images[j].setAttribute('src', images[j].getAttribute(options.attribute));
						}
						images[j].removeAttribute(options.attribute);
						images[j].classList.add(options.isPreloadedClass);
						options.wrapper.classList.add(options.areAllPreloadedClass);
					}
					if (options.callback) options.callback();
				}
			});
		}
	}

	return {
		load: load
	};

})();
