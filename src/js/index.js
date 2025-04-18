import '../scss/style.scss'

console.log('Works!')

const text = document.querySelector('.textSpan')
const btn = document.querySelector('.readmore-btn')

btn.addEventListener('click', function () {
  if (btn.textContent === 'Читать далее') {
    text.classList.remove('hidden')
    btn.textContent = 'Скрыть'
    /* btn.classList.remove('rotated') */
    btn.classList.add('rotated')
  } else {
    text.classList.add('hidden')
    btn.textContent = 'Читать далее'
    btn.classList.remove('rotated')
  }
})

/* let swiperInstance

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper('.card__wrapper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,

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
 */
