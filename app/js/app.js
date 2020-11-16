document.addEventListener('DOMContentLoaded', () => {


const body = document.querySelector('body')
const toggleBurger = document.querySelector('.header__burger')
const toggleMenu = document.querySelector('.header__menu')

toggleBurger.addEventListener('click', event => {
	toggleBurger.classList.toggle('active')
	toggleMenu.classList.toggle('active')
	body.classList.toggle('lock')
})

})
