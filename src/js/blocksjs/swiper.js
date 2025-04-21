/* Block 2: swiper interaction function */

let swiperInstance
function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,

      // Pagination bullets
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  } else if (window.innerWidth >= 768 && swiperInstance) {
    swiperInstance.destroy(true, true)
    swiperInstance = null
    pagination = false
  }
}

initSwiper()

window.addEventListener('resize', initSwiper)
