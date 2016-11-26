// Javascript Document

AOS.init({
  duration: 1200
});

// mobile nav

var $body = $('body');
var $btnMobile = $('.btn-mobile');

$btnMobile.click(function(){
	$body.toggleClass('show');

      var el = $(this);
  if (el.text() == el.data('text-swap')) {
    el.text(el.data('text-original'));
  } else {
    el.data('text-original', el.text());
    el.text(el.data('text-swap'));
  }
    
});

// smooth scroll



// mobile text

//var $text = $('.review');
//
//if ($text <= 'width: 480px'){
//    $text.html('read more...');
//}


 $(window).resize(function() {
  if ($(window).width() <= 480) {
     $('.pp p').html('click to read more...');
  }
});