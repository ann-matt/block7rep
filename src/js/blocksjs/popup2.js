const openBtn = document.querySelectorAll('.message-btn')
const popup2 = document.querySelector('.popup2')
const closeBtn = document.querySelector('.popup2__close')
const mainContent = document.querySelector('.main-content')

openBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    popup2.classList.remove('hidden')
    mainContent.classList.add('blur')
  })
})

closeBtn.addEventListener('click', function () {
  popup2.classList.add('hidden')
  mainContent.classList.remove('blur')
})

popup2.addEventListener('click', function (e) {
  if (!e.target.closest('.popup2__body')) {
    popup2.classList.add('hidden')
    mainContent.classList.remove('blur')
  }
})
