
const categories = document.querySelector('.categories');

function activeCatalog(evt) {

    const target = evt.target.closest('.categories__list--item');

    const itemCollection = document.querySelectorAll('.categories__list--item');

    for (let i = 0; i < itemCollection.length; i++) {

        const link = itemCollection[i];

        link.classList.remove('categories__list--item-active');
       
    }

   target.classList.add('categories__list--item-active');

}

categories.addEventListener('click', activeCatalog);

