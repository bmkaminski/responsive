// Javascript Document

AOS.init({
  duration: 1200
});

// mobile nav

var $body = $('body');
var $btnMobile = $('.btn-mobile');

$btnMobile.click(function(){
	$body.toggleClass('show');
});

// smooth scroll
