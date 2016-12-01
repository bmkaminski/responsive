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

/* 
The following code is from:
https://css-tricks.com/snippets/jquery/smooth-scrolling/
*/

//$(function() {
//  $('a[href*=#]:not([href=#])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        $('html,body').animate({
//          scrollTop: target.offset().top
//        }, 1000);
//        return false;
//      }
//    }
//  });
//});

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


/* ------ play video on scroll ------ */

// This code modified from code at this Stackoverflow question and answer
// http://stackoverflow.com/questions/23222131/jquery-fire-action-when-element-is-in-view

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

var $theVideo = $('#the-video');

// Make sure video plays only once...
var videoHasPlayed = false;

$(document).ready(function(){
    $(window).scroll(function(){
        if ($theVideo.isOnScreen()) {
            // The element is visible, do something
            if(videoHasPlayed === false){
              $theVideo.get(0).play();
              videoHasPlayed = true;
            }
          
            // console.log("in viewport!");
          
        } else {
            // The element is NOT visible, do something else
            // console.log('out of viewport');
        }
    });
});