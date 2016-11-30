// Javascript Document


/* ------ aos fade up animation ------ */

AOS.init({
  duration: 1200
});

/* -------- mobile navigation -------- */

var $body = $('body');
var $btnMobile = $('.btn-mobile');

$btnMobile.click(function(){
	$body.toggleClass('show');

    // switch out to close x
      var el = $(this);
  if (el.text() == el.data('text-swap')) {
    el.text(el.data('text-original'));
  } else {
    el.data('text-original', el.text());
    el.text(el.data('text-swap'));
  }
    
});


/* -------- smooth scroll -------- */

$('a[href^="#link"]').click(function(event){
      var target = $( $(this).attr('href') );
      
    if( $(this).parents('header').hasClass('fixed') ){
          
          if(target.length) {
            event.preventDefault();
            $('html, body').animate({scrollTop: target.offset().top}, 800);
            $('.tutorial').css('margin-top', '1px');
          }
          
      }else {
          
          if(target.length) {
            event.preventDefault();
            $('html, body').animate({scrollTop: target.offset().top + 100}, 800);
            $('.tutorial').css('margin-top', '1px');
          }
          
      }
      
    });


/* ---------- subscribe ---------- */

$('#submit').click(function(){
    $('#subscribe').text('Thanks for subscribing!');
});


/* ------ play/pause video ------ */

jQuery(document).ready(function($){
    
    $('.animation').click(function(){
        
        this.paused ? this.play() : this.pause();
        
    });
});

// on scroll

var waypoint = new Waypoint({
  element: document.getElementById('animation'),
  handler: function() {
    // notify('Basic waypoint triggered');
    console.log('element entered viewport...');
  }
});


