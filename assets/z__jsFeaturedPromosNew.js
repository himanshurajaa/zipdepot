/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.PXUTheme.jsFeaturedPromosNew = {
	init: function($section) {

    // Selectors
    const $prevButton = $section.find('.featured-promotions__nav--prev');
    const $nextButton = $section.find('.featured-promotions__nav--next');
    const $promoSliderNew = $section.find('[data-featured-promotions-slider-new]');

    const $featuredPromosSliderNew = $promoSliderNew.flickity({
      initialIndex: 0,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      imagesLoaded: true,
      draggable: true
    });

    $featuredPromosSliderNew.on( 'settle.flickity', function() {
      $featuredPromosSliderNew.flickity('resize');
    });

    $prevButton.on('click', function () {
      $featuredPromosSliderNew.flickity('previous');
    });

    $nextButton.on('click', function () {
      $featuredPromosSliderNew.flickity('next');
    });
	},
  blockSelect: function($section, blockId) {
    var $featuredPromosSliderNew = $section.find('[data-featured-promotions-slider-new]');

    var slideIndex = $('#shopify-section-' + blockId).data('promo-index');

    $featuredPromosSliderNew.flickity('select', slideIndex, true, true);
  },
	unload: function($section) {
    var $slider = $section.find('.flickity-enabled');
    $slider.flickity('destroy');
    $('.featured-promotions__nav--prev').off();
    $('.featured-promotions__nav--next').off();

	}
}

/******/ })()
;