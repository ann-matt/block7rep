/* Block 2: show more interaction function */

const showMoreBtn = document.querySelector('.btn-show-more')
const cards = document.querySelectorAll('.card__item1.hidden')

showMoreBtn.addEventListener('click', function () {
  if (showMoreBtn.textContent === 'Показать всё') {
    cards.forEach((card__item1) => card__item1.classList.remove('hidden'))
    showMoreBtn.textContent = 'Скрыть'
    showMoreBtn.classList.add('rotated')
  } else {
    cards.forEach((card__item1) => card__item1.classList.add('hidden'))
    showMoreBtn.textContent = 'Показать всё'
    showMoreBtn.classList.remove('rotated')
  }
})
