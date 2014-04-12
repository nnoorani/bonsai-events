var s = skrollr.init({
	forceHeight: false
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= $('#about').offset().top) {
    	$('.navbar').addClass('navbar-fixed-top'); 
    	$('.navbar').removeClass('hidden'); 
    } else {
        $('.navbar').removeClass('navbar-fixed-top');  
        $('.navbar').addClass('hidden'); 
    }
});         