import '../scss/style.scss'
import '../js/blocksjs/showMore'
import '../js/blocksjs/swiper'

console.log('Works!')

/* Block 1: Readmore interaction function  */

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
