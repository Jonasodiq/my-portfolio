const siteMenu = () => {

    // Get element from DOM
    const menuButton = document.querySelector('.menu__button')
    const hireButton = document.querySelector('.header__link')
    const menu = document.querySelector('.site-menu')
    const bookButton = document.querySelector('.site-header__button')
    const menuItem = document.querySelector('.site-menu__list')

    // Toggle Menu
    const toggleMenu = () => {
        menu.classList.toggle('site-menu--visible')
        menuButton.classList.toggle('menu__button--close')
        bookButton.classList.toggle('site-header__button--menu-opened')
    }

    // Close menu
    const menuClosed = () => {
        menu.classList.remove('site-menu--visible')
        menuButton.classList.toggle('menu__button--close')
    }

    // Create Event
    menuButton.addEventListener('click', toggleMenu)
    hireButton.addEventListener('click', menuClosed)
    menuItem.addEventListener('click', menuClosed)
}

siteMenu()