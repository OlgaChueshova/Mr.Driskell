const dropdown = document.querySelector('.header__mobile-menu--dropdown');
const dropdownList = document.querySelector('.header__mobile-menu');

function showMenu() {
    dropdownList.classList.toggle('header__mobile-menu--active');

}

dropdown.addEventListener('click', showMenu);


const catalog = document.querySelector('.header__mobile-menu--dropdown-link');
const catalogList = document.querySelector('.header__mobile-sub-menu');

function showSubMenu() {
    catalogList.classList.toggle('header__mobile-sub-menu--active');
}

catalog.addEventListener('click', showSubMenu);


function removeActivClass (target) {
    if (target.classList.contains('header__mobile-sub-menu--active')) {
        target.classList.remove('header__mobile-sub-menu--active');
    }
    
    

}

dropdown.addEventListener('click', removeActivClass);