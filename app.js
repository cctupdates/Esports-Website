const navBar = document.querySelector('[data-navbar]')
const navItem = document.querySelector('.nav-items-list')
const hamburger = document.querySelector('.responsive__nav')
const searchToggleButton = document.querySelector('[data-nav-search')
const searchComponent = document.querySelector('.search__component')
const navForm = document.querySelector('[data-nav-form]')


hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('responsive_nav_toggle')
  navItem.classList.toggle('nav-items-list-responsive')
})

//navbar search feature

searchToggleButton.addEventListener('click', (e) => {
  searchComponent.classList.toggle('search_component_visible')
})

navForm.addEventListener('submit', (e) => {
  e.preventDefault()
  searchComponent.classList.toggle('search_component_visible')
})

