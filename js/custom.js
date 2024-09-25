$(document).ready(function() {

    $(".navbar-toggler").click(function() {
        $('html').toggleClass('show-menu');
    });
   
    function scrolling(){
	    var sticky = $('header'),
	        scroll = $(window).scrollTop();

	    if (scroll >= 15) sticky.addClass('fixed');
	    else sticky.removeClass('fixed');
	};
	scrolling();
	$(window).scroll(scrolling);

});


//cursor



$('.menu').click (function(){
  $(this).toggleClass('open');
});


$('.show-more').click(function() {
    $('.moretext').slideToggle();
    if ($('.show-more').text() == "Show More") {
      $(this).text("Show Less")
    } else {
      $(this).text("Show More")
    }
  });



  $('.navbar-brand').click (function(){
    $("body").toggleClass('show');
  });

