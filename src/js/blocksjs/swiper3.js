let swiperInstance3
function initSwiper3() {
  console.log('initSwiper3 запускается. Ширина окна:', window.innerWidth)
  if (window.innerWidth < 768 && !swiperInstance3) {
    swiperInstance3 = new Swiper('.swiper3', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      // Pagination bullets
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  } else if (window.innerWidth >= 768 && swiperInstance3) {
    swiperInstance3.destroy(true, true)
    swiperInstance3 = null
    pagination = false
  }
}

initSwiper3()

window.addEventListener('resize', initSwiper3)
