$(document).ready(function () {


  $(".next").click(slideNext);

  $(".prev").click(slidePrev);




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