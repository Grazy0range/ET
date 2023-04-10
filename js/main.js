$(document).ready(function(){
    $(".gallery__slider").owlCarousel({
        loop:true,
        nav:true,
        center: true,
        autoWidth:true,
        items:3,
        margin:1250,
        dots: true,
    });
  });

$(document).ready(function(){
    $(".hall__slider").owlCarousel({
        loop:true,
        nav:false,
        center:true,
        items:1,
        margin:0,
        dots: true,
        dots: true,
    });
  });