const like = document.querySelectorAll('.product-card__like');

like.addEventListener('click', background);

function background() {
    like.classList.toggle('product-card__like--active');
}


const inBasketBtn = document.querySelector('.product-card__inbasket-btn');
const BasketBtn = document.querySelector('.product-card__basket-btn');

inBasketBtn.addEventListener('click', addInBasket);

function addInBasket() {
    inBasketBtn.addclassList('product-card__inbasket-btn--noactive');
    BasketBtn.addclassList('product-card__basket-btn--active');
}

console.log (BasketBtn);

