

$(document).ready(function(){
  var figs = 0
  $('body').mousemove(function(event){
      var x = event.pageX;
      var y = event.pageY;

      if (figs == 0) {
        $('.grad').css("top", y-25,);
        $('.grad').css("left", x-25,);
        $('.grad').css("border-radius", 100,);
      } else if (figs == 1){
        $('.grad').css("top", y-25,);
        $('.grad').css("left", x-100,);
      } else if (figs == 2){
        $('.grad').css("top", y-100,);
        $('.grad').css("left", x-25,);
      } else if (figs == 3){
      $('.grad').css("top", y-25,);
      $('.grad').css("left", x-25,);
      $('.grad').css("border-radius", 0,);
      } else if (figs == 4){
      $('.grad').css("top", y-50,);
      $('.grad').css("left", x-12,);
      $('.grad').css("width", 25)
      $('.grad').css("height", 100)
      $('.grad').css("border-radius", 0,);
    }
    });

  $( "a" ).hover(function(){
    figs++;

    if (figs == 5) {
      figs = 0;
    }
    if (figs == 0) {
      $('.grad').css("width", 50)
      $('.grad').css("height", 50)
    } else if (figs == 1){
      $('.grad').css("width", 200)
    } else if (figs == 2){
      $('.grad').css("width", 50)
      $('.grad').css("height", 200)
    } else if (figs == 3){
      $('.grad').css("width", 50)
      $('.grad').css("height", 50)
    }
    
  });

  $(".arrow").click(function () {
    $(".zweef").css('height','200px');
    $(".mainBack").css('top', '10px', 'transition', 'none');
    $(".arrow").css('display', 'none');
    $('main').css('margin-top', '200px', 'transition', 'none');
    $('.titelsHead').css('display', 'none');
    $('body').css('overflow', 'scroll');
  })


 

  $( ".draggable" ).draggable();

  // juul portfolio

  $(".j-circle").hover(function(){
    $(".j-overlay").css("opacity", "100");
    }, function(){
    $(".j-overlay").css("opacity", "0");
  });


  $(".j-square").hover(function(){
    $(".j-overlay-square").css("opacity", "0");
    }, function(){
    $(".j-overlay-square").css("opacity", "100");
  });




  $(".cross").click(function(){
    var closeScene = $(this).parent().parent().attr("id");
    console.log(closeScene);
    $("#"+closeScene).css({
      "display": "none"
      // "width": "400px",
      // "height": "300px"
  });
  });



  // $(".big-small").click(function(){
  //   console.log($(this).parent().attr('id'));
  //   var dezeScene = "#"+$(this).parent().attr('id');
  //   $(dezeScene).css({
  //     "width": "100%",
  //     "height": "100%",
  //     "left":"0",
  //     "top":"0"
  // });

  // });



  $(".j-circle-1").click(function(){
    var dezeKnop = $(this).attr('id');
    $("#j-circle"+dezeKnop+"").css("display", "block");
    console.log(dezeKnop);
  });


  $(".j-square-1").click(function(){
    var dezeKnop = $(this).attr('id');
    $("#j-square"+dezeKnop+"").css("display", "block");
    console.log(dezeKnop);
  });










  $(".arrow-new").click(function () {
    $(".zweef").css({
      'height':'0px',
      'opacity': '0%',
    });
    $(".mainBack").css('top', '0px', 'transition', 'none');
    $(".arrow-new").css('display', 'none');
    $('main').css('margin-top', '00px', 'transition', 'none');
    $('.titelsHead').css('display', 'none');
    $('.logo-vast').css('opacity', '100');
    // $('body').css('overflow', 'scroll');
    $('.arrow-next').css("display", "block");

  })

  

   $(".logo-vast").click(function(){
    location.reload();
  })

  // var imageContainer = $('.port img');
  // var overlay = $('.port-1,.port-2');
  // var imageWidth = imageContainer.width();
  // var imageHeight = imageContainer.height();
  
  // overlay.css({
  //   'width': imageWidth + 'px',
  // }); 


  // var windowWidth = $(window).width();
  // if (windowWidth < 710) {

  //   overlay.css({
  //     'width': '80%',
  //   });
  // }



  // $(window).on('resize', function() {
  //   imageWidth = imageContainer.width();
  //   if (windowWidth < 710) {

  //     overlay.css({
  //       'width': '80%',
  //     });

  //     $('.port div.overlay').css({
  //       // 'opacity': '100%',
  //     })
  //   } else {
  //     overlay.css({
  //       'width': imageWidth + 'px',
  //     });
  //   }
  // });

  var artCount = 1;
  $(".arrowright").click(function(){
    $('.port-1').css({
      'z-index': '1',
      'scale': '.5',
      'left': '20%',
      'opacity': '50%'
    })
    $('.port-2').css({
      'z-index': '2',
      'scale': '1',
      'left': '50%',
      'opacity': '100%'
    })
    artCount = artCount + 1;
    console.log(artCount);
    // if (artCount == 2) {
    //   $('.port-1-info').css({
    //     'diplay': 'none'
    //   })
    //   $('.port-2-info').css({
    //     'diplay': 'block'
    //   })

    // }
  })

  $(".arrowleft").click(function(){
    $('.port-1').css({
      'z-index': '2',
      'scale': '1',
      'left': '50%',
      'opacity': '100%'
    })
    $('.port-2').css({
      'z-index': '1',
      'scale': '.5',
      'left': '80%',
      'opacity': '50%'
    })
    artCount = artCount - 1;
    // if (artCount == 1) {
    //   $('.port-1-info').css({
    //     'diplay': 'block'
    //   })
    //   $('.port-2-info').css({
    //     'diplay': 'none'
    //   })
    // }
    console.log(artCount);
  })


  var sceneCount = 1;
  $(".arrow-next").click(function(){
    if (sceneCount == 1) {
      $("header").remove();
      $(".scene-1").css("margin-top", "-100vh");
      $(".arrowleft, .arrowright").css({
        "opacity": "100%",
      });  
      sceneCount = sceneCount + 1;
    } else if (sceneCount == 2) {
      $(".scene-2").css("margin-top", "-100vh");
      $(this).css("transform", "rotate(180deg)");
      $(".arrowleft, .arrowright").css({
        "opacity": "0%",
      }); 
      sceneCount = 3;
    } else if (sceneCount == 3){
      $(".scene-2").css("margin-top", "0");
      $(this).css("transform", "rotate(0deg)");
      $(".arrowleft, .arrowright").css({
        "opacity": "100%",
      }); 
      sceneCount = 2;
    }

    if (artCount == 1) {
      $('.port-1-info').css('display', 'block');
    } else {
      $('.port-1-info').css('display', 'none');
    }

    if (artCount == 2) {
      $('.port-2-info').css('display', 'block');
    } else {
      $('.port-2-info').css('display', 'none');
    }


   })

  $('a').click(function () {
    event.preventDefault();
  })









  
















})
