
# Boiled Page image preloader script

A simple JavaScript module for Boiled Page frontend framework to preload images.

## Install

Place `preload-images.js` to `/assets/js` directory and add its path to `scripts` variable in `gulpfile.js` to be combined with other scripts.

## Usage

To preload images which have a given attribute inside a given element, call `load()` method the following way:

```js
ImagePreloader.load(options);
```

## Methods

### Initialize assistive alert

`load(options)` - Preload all images with given attribute inside given wrapper element. It swaps initial and final sources of each image after its image is preloaded.

Parameter | Type | Required | Description
----------|------|----------|------------
`options` | Object | Yes | Object that contains options.

Available properties for `options` object:

Option| Type | Default | Required | Description
------|------|---------|----------|------------
`wrapper` | String | null | No | Preload images inside wrapper.
`attribute` | Number | 0 | No | Attribute added to each image element. It must contain the source of final image.
`isPreloadedClass` | String | 'is-image-preloaded' | No | Class added after image is preloaded.
`areAllPreloadedClass` | String | 'are-all-images-preloaded' | No | Class added after all images are preloaded.
`callback` | Function | null | No | Callback function after all images are preloaded.
