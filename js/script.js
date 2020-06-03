function navToggler(val){
    let bar = val.querySelector('#bar');
    let times = val.querySelector('#times');
    bar.classList.toggle('d-none');
    times.classList.toggle('d-none');

}



var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });