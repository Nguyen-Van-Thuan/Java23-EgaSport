$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true, //Vong lap slider
    margin: 10, //Khoang cach giua cac phan tu slider
    nav: true, //Thanh dieu huong
    dots: false, //Nut dieu huong
    autoplay: true, //Tu dong chuyen slide
    autoplayTimeout: 4000, //ms
    responsive: {
      0: {
        items: 1 //Khoang man hinh 0 => 600px
      },
      600: {
        items: 1 //600px -> 1000px
      },
      1000: {
        items: 1 //Tu 1000px tro len
      }
    }
  })

});
