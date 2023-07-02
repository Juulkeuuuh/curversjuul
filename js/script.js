$(document).ready(function(){


  // scroll effects

  // window.addEventListener('scroll', function() {
  //   $('.arrowDown').css();
  // });


  var lastScrollTop = 0;

  $(window).on('scroll', function() {
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();

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


    $('.slide-in').each(function() {
      var offsetTop = $(this).offset().top;
      if (scrollPosition > offsetTop - windowHeight + 300) {
        $(this).addClass('slide-in-active');
      }
    });
    // var lastScrollTop = 0;
    // var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      var newMarginTop = parseInt($('.sticky-div').css('margin-top')) - 15;
      $('.sticky-div').css('margin-top', newMarginTop + 'px');
    } else if(scrollTop < lastScrollTop){
      // Scrolling up
      var newMarginTop = parseInt($('.sticky-div').css('margin-top')) + 15;
      $('.sticky-div').css('margin-top', newMarginTop + 'px');
    }
    lastScrollTop = scrollTop;

    console.log(lastScrollTop, scrollTop);
  })

  // modal
  $('.art').click(function () {
    var dehetid = $(this).attr('id');
    $('.article-top-inside').load('assets/arts/'+dehetid+'.html');
    $('.article-top').css('bottom', '0')
  })
  $('.close-button').click(function () {
    $('.article-top').css('bottom', '-100%')
  })


})
