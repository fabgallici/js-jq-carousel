$(document).ready(function () {

  $(".next").click(slideNext);

  $(".prev").click(slidePrev);

  // slide show con arrow left o right, e tasti + - , delay scorrimento se tengo premuto tasto
  var arrowPress = false;
  $(document).keydown(function (e) {
    if (!arrowPress) {
      if (e.keyCode === 37 || e.keyCode === 109) { //left arrow down
        slidePrev();
      } else if (e.keyCode === 39 || e.keyCode === 107) {
        slideNext();       
      }
      arrowPress = true;
      setTimeout(function () {
        arrowPress = false;
        // console.log('arrow timing');
      }, 300);
    } 
  });

  //indicator click change corresponding img to active
  $('.nav i').click(function() {
    var clickedInd = $(this).attr('data-ref');
    $('.slider-wrapper .images  img').removeClass('active');
    $('.nav i').removeClass('active');
    $(this).addClass('active');
    $('.slider-wrapper .images  img[data-ref=' + clickedInd + ']').addClass('active');
  });

  //test keydown events debug
  $(document).keypress(function (e) {
    console.log(e.keyCode);
  });

  // funzioni
  function slideNext() {

    var imgPos = $(".slider-wrapper .images  img.active");
    var indicatorPos = $(".nav i.active");

    imgPos.removeClass("active");
    indicatorPos.removeClass("active");


    // se siamo all'utima img dello slider, ritorna ad essere attiva la prima
    if (imgPos.hasClass("last")) {
      $(".slider-wrapper .images  img.first").addClass("active");
      $(".nav i.first").addClass("active");
    } else {
      //altrimenti passa semplicemente l'active alla prossima
      imgPos.next("img").addClass("active");
      indicatorPos.next("i").addClass("active");
    }


  }

  function slidePrev() {

    var imgPos = $(".slider-wrapper .images  img.active");
    var indicatorPos = $(".nav i.active");

    imgPos.removeClass("active");
    indicatorPos.removeClass("active");

    // se siamo alla prima img dello slider, ritorna ad essere attiva l'ultima
    if (imgPos.hasClass("first")) {
      $(".slider-wrapper .images  img.last").addClass("active");
      $(".nav i.last").addClass("active");
    } else {
      //altrimenti passa semplicemente l'active alla prossima
      imgPos.prev("img").addClass("active");
      indicatorPos.prev("i").addClass("active");
    }


  }


});


/* 
$(document).keydown(function (e) {
  if (e.keyCode === 37 || e.keyCode === 109) {
    slidePrev();
  } else if (e.keyCode === 39 || e.keyCode === 107) {
    slideNext();
  }
}); */