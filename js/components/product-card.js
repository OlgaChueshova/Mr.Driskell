const productCard = document.querySelector('.categories__list');

function like(evt) {
    let target = evt.target.closest('.product-card__like--noactive');

    const likeCollection = document.querySelectorAll('.product-card__like--noactive');

    for (let i = 0; i < likeCollection.length; i++) {

        const activeLike = likeCollection[i];
    }

    target.classList.toggle('product-card__like--active');
}


function addInBasket(evt) {
    let target = evt.target.closest('.product-card__inbasket');

    const inBasketCollection = document.querySelectorAll('.product-card__inbasket');

    for (let i = 0; i < inBasketCollection.length; i++) {

        const inBasket = inBasketCollection[i];
    }

    target.classList.add('product-card__inbasket--active');
}


function selectProducts(evt) {
    evt.preventDefault()

    const target = evt.target.closest('.product-card__form');
    console.log(evt.target)
    if (target) {
        const input = target.querySelector('.product-card__input');
        const value = Number(input.value);
        if (evt.target.closest('.btn--plus')) {
            input.value = value + 1;
        }
        if (evt.target.closest('.btn--minus')) {
            if (value > 1) {
                input.value = value - 1;
            }
        
            if (value === 1) {
                    
                target.querySelector('btn--minus')
                
                
            }  
                
            

        }

    }

}




productCard.addEventListener('click', function (evt) {
    selectProducts(evt);
    addInBasket(evt);
    like(evt);
});




