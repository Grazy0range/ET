$(document).ready(function(){
    $(".gallery__slider").owlCarousel({
        loop:true,
        nav:true,
        center: true,
        autoWidth:false,
        items:1,
        margin:0,
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


  Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }});

    $('body').on('click touchstart', function () {
      const videoElement = document.getElementById('mainVideo');
      if (videoElement.playing) {
          // video is already playing so do nothing
      }
      else {
          // video is not playing
          // so play video now
          videoElement.play();
      }
});