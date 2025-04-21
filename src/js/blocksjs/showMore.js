/* Block 2: show more interaction function */

const showMoreBtn = document.querySelector('.btn-show-more')
const cards = document.querySelectorAll('.card__item.hidden')

showMoreBtn.addEventListener('click', function () {
  if (showMoreBtn.textContent === 'Показать всё') {
    cards.forEach((card__item) => card__item.classList.remove('hidden'))
    showMoreBtn.textContent = 'Скрыть'
    showMoreBtn.classList.add('rotated')
  } else {
    cards.forEach((card__item) => card__item.classList.add('hidden'))
    showMoreBtn.textContent = 'Показать всё'
    showMoreBtn.classList.remove('rotated')
  }
})
