let swiperInstance2
function initSwiper2() {
  if (window.innerWidth < 768 && !swiperInstance2) {
    swiperInstance2 = new Swiper('.swiper2', {
      slidesPerView: 'auto',
      spaceBetween: 16,

      navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev'
      },

      // Pagination bullets
      pagination: {
        el: '.swiper2-pagination',
        clickable: true
      }
    })
  } else if (window.innerWidth >= 768 && swiperInstance2) {
    swiperInstance2.destroy(true, true)
    swiperInstance2 = null
    pagination = false
  }
}

initSwiper2()

window.addEventListener('resize', initSwiper2)
