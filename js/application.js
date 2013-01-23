$(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        easing: "easeInBack",
        slideshow: false,
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
	
	$("#nav-qeros").click(function () {
		var measure=$("#qeros-cover").offset();
		var animationobj={'scrollTop':measure.top+'px'};
		$('html, body').animate(animationobj, 1100);
	});
	
	$("#nav-willka").click(function () {
		var measure=$("#willka-cover").offset();
		var animationobj={'scrollTop':measure.top+'px'};
		$('html, body').animate(animationobj, 1100);
	});
	
	$("#nav-donate").click(function () {
		var measure=$("#footer-container").offset();
		var animationobj={'scrollTop':measure.top+'px'};
		$('html, body').animate(animationobj, 1100);
	});
	
});