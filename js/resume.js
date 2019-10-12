$(document).ready(function () {
	
	(function($) {
	  "use strict"; // Start of use strict

	  // Smooth scrolling using jQuery easing
	  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: (target.offset().top)
			}, 500, "linear");
			return false;
		  }
		}
	  });

	  // Closes responsive menu when a scroll trigger link is clicked
	  $('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	  });

	  // Activate scrollspy to add active class to navbar items on scroll
	  $('body').scrollspy({
		target: '#sideNav'
	  });

	})(jQuery); // End of use strict
	
	// active link circle color
	$("a.active").find("i.fa-circle").css("color", "#f6554c");
	// active link circle color
	 $(window).on('activate.bs.scrollspy', function (e,obj) { 
		$("li.nav-item a i.fa-circle").css({"color" : "#2b2a2a", "transition" : "color 0.3s"});
		$("a[href='" + obj.relatedTarget + "']").find("i.fa-circle").css("color", "#f6554c");	
     });
	
});
