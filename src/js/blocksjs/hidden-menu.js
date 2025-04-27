const hiddenMenu = document.querySelector('.hidden-menu')
const hiddenWrapper = document.querySelector('.hid-wrapper')
const closeButton = document.querySelector('.hidden-menu__closeBrg')
const openButton = document.querySelector('.burger-btn')

openButton.addEventListener('click', function () {
  hiddenMenu.classList.remove('hid')
  hiddenWrapper.classList.remove('hid')
})
closeButton.addEventListener('click', function () {
  hiddenMenu.classList.add('hid')
  hiddenWrapper.classList.add('hid')
})
hiddenWrapper.addEventListener('click', function (e) {
  if (!e.target.closest('.hidden-menu')) {
    hiddenMenu.classList.add('hid')
    hiddenWrapper.classList.add('hid')
  }
})
