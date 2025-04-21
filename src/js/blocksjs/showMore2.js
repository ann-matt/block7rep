const showMoreB = document.querySelector('.btn-show-more2')
const cards2 = document.querySelectorAll('.card2__item.hidden')

showMoreB.addEventListener('click', function () {
  if (showMoreB.textContent === 'Показать всё') {
    cards2.forEach((card2__item) => card2__item.classList.remove('hidden'))
    showMoreB.textContent = 'Скрыть'
    showMoreB.classList.add('rotated')
  } else {
    cards2.forEach((card2__item) => card2__item.classList.add('hidden'))
    showMoreB.textContent = 'Показать всё'
    showMoreB.classList.remove('rotated')
  }
})
