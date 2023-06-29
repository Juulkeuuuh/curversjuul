$(document).ready(function(){


  // scroll effects

  // window.addEventListener('scroll', function() {
  //   $('.arrowDown').css();
  // });



  $(window).on('scroll', function() {
      $('.arrowDown').fadeOut(500, function() {
        $(this).remove();
      });


      var scrollTop = $(window).scrollTop();
      var headerHeight = $('header').outerHeight();
      
      if (scrollTop > headerHeight) {
        $('.headlogo').css('top', '10%');
        $('.topFix').css('height', '50vh');
      } else {
        $('.headlogo').css('top', '50%');
        $('.topFix').css('height', '100vh');
      }

      if ($(this).scrollTop() > 700) {
        $('.headlogo').css('display', 'none');
      } else {
        $('.headlogo').css('display', 'block');

      }
  })




})
