const newP = document.querySelector('.categories__list--new');
const newCatalog = document.querySelector('.categories__catalog--new-product');

function displayNew() {
    newCatalog.classList.add('categories__catalog--active');
    newP.classList.add('categories__list--link-active');
    // hitCatalog.classList.add('categories__catalog--noactive');
    // hit.classList.add('categories__list--link-noactive');
    // popularCatalog.classList.add('categories__catalog--noactive');
    // popular.classList.add('categories__list--link-noactive');
    // stockCatalog.classList.add('categories__catalog--noactive');
    // stock.classList.add('categories__list--link-noactive');
}

newP.addEventListener('click', displayNew);



const hit = document.querySelector('.categories__list--hit');
const hitCatalog = document.querySelector('.categories__catalog--hit-product');

function displayHit() {
    hitCatalog.classList.add('categories__catalog--active');
    hit.classList.add('categories__list--link-active');
    // newCatalog.classList.add('categories__catalog--noactive');
    // newP.classList.add('categories__list--link-noactive');
    // popularCatalog.classList.add('categories__catalog--noactive');
    // popular.classList.add('categories__list--link-noactive');
    // stockCatalog.classList.add('categories__catalog--noactive');
    // stock.classList.add('categories__list--link-noactive');
}

hit.addEventListener('click', displayHit);



const popular = document.querySelector('.categories__list--popular');
const popularCatalog = document.querySelector('.categories__catalog--popular-product');

function displayPopular() {
    popularCatalog.classList.add('categories__catalog--active');
    popular.classList.add('categories__list--link-active');
    // newCatalog.classList.add('categories__catalog--noactive');
    // newP.classList.add('categories__list--link-noactive');
    // hitCatalog.classList.add('categories__catalog--noactive');
    // hit.classList.add('categories__list--link-noactive');
    // stockCatalog.classList.add('categories__catalog--noactive');
    // stock.classList.add('categories__list--link-noactive');
}

popular.addEventListener('click', displayPopular);



const stock = document.querySelector('.categories__list--stock');
const stockCatalog = document.querySelector('.categories__catalog--stock-product');

function displayStock() {
    stockCatalog.classList.add('categories__catalog--active');
    stock.classList.add('categories__list--link-active');
    // newCatalog.classList.add('categories__catalog--noactive');
    // newP.classList.add('categories__list--link-noactive');
    // hitCatalog.classList.add('categories__catalog--noactive');
    // hit.classList.add('categories__list--link-noactive');
    // popularCatalog.classList.add('categories__catalog--noactive');
    // popular.classList.add('categories__list--link-noactive');
}

stock.addEventListener('click', displayStock);

// const catalog = document.querySelectorAll('.categories__list--link');

// function displayNone(target, callback) {
//     function handleEvent(evt) {
//         if (!target.contains(evt.target)) {
//             callback();
//         }
//     }
// }

// catalog.addEventListener('click', handleEvent)
