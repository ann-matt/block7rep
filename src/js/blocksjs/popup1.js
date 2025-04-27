const openBtn = document.querySelectorAll('.phone-btn')
const popup1 = document.querySelector('.popup1')
const closeBtn = document.querySelector('.popup1__close')
const mainContent = document.querySelector('.main-content')

openBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    popup1.classList.remove('hidden')
    mainContent.classList.add('blur')
  })
})

closeBtn.addEventListener('click', function () {
  popup1.classList.add('hidden')
  mainContent.classList.remove('blur')
})

popup1.addEventListener('click', function (e) {
  if (!e.target.closest('.popup1__body')) {
    popup1.classList.add('hidden')
    mainContent.classList.remove('blur')
  }
})
