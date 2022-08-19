$(document).ready(function() {
  
  $('.header__burger').on('click', function(){
    $(this).toggleClass('active')
    $('.header__mobile').toggleClass('active')
  })

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".header__burger, .header__mobile").length) {
      $(".header__mobile").removeClass("active");
      $(".header__burger").removeClass("active");
    }
    e.stopPropagation();
  });

   new Swiper('.slider-container', {
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      breakpoints: {
      }
   });
});





