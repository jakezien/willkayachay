$(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        easing: "easeOutQuad",
        slideshow: false,
        animationSpeed: 850,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });      
});
          
$(document).ready(function() { 
 
	$("#nav-top").click(function () {
		var animationobj={'scrollTop':'0px'};
		$('html, body').animate(animationobj, 1100);
	});
	
	$("#nav-willka").click(function () {
		var measure=$("#willka-cover").offset();
		var animationobj={'scrollTop':measure.top+'px'};
		$('html, body').animate(animationobj, 1100);
	});
	
	$("#nav-about").click(function () {
		var measure=$("#about").offset();
		var animationobj={'scrollTop':measure.top+'px'};
		$('html, body').animate(animationobj, 1100);
	});
	
	$("#nav-qeros").click(function () {
		var measure=$("#qeros-cover").offset();
		var animationobj={'scrollTop':measure.top+'px'};
		$('html, body').animate(animationobj, 1100);
	});
	
	$("#nav-donate").click(function () {
		var measure=$("#donate").offset();
		var animationobj={'scrollTop':measure.top+'px'};
		$('html, body').animate(animationobj, 1100);
	});
	
	$("#nav-contact").click(function () {
		var measure=$("#footer-container").offset();
		var animationobj={'scrollTop':measure.top+'px'};
		$('html, body').animate(animationobj, 1100);
	});
	
	$("#flexslider-students").flexslider ({
		animation: "slide",
        easing: "easeOutQuad",
        slideshow: true,
        slideshowSpeed: 5500,
        animationSpeed: 850,
        start: function(slider){
          $('body').removeClass('loading');
        }

	});
	
});