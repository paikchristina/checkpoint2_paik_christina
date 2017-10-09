//@prepros-prepend vendor/jquery-3.2.1.js
//@prepros-prepend vendor/owl.carousel.js
//@prepros-prepend vendor/jquery.fitvids.js

jQuery ( function($) {

	var site = new SiteController($);
	site.init();

});

function SiteController($)
{
	self.init = function()
	{
      initFitVids();
      initOwl();
	}

  function initFitVids() {
    $('.video').fitVids();
  }

  function initOwl() {
   $(".owl-carousel").owlCarousel({
    items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 3000
   });
  }

  return self;
}
