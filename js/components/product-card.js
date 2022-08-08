const likeCollection = document.querySelectorAll('.product-card__like--noactive');
const catalog = document.querySelector('.categiries__catalog');

let sumCollection = document.querySelectorAll('#sum');
sum = 1;

const inBasketBtnCollection = document.querySelectorAll('.product-card__inbasket-btn');

function Basket(evt) {

    let target = evt.target.closest('.product-card__inbasket-btn, .product-card__like--noactive, .button-minus, .button-plus');
    switch (target) {
        case evt.target.closest('.product-card__like--noactive'):
            target.classList.toggle('product-card__like--active');
            break;
        case evt.target.closest('.product-card__inbasket-btn'):
            target.classList.toggle('product-card__inbasket-btn--noactive');

            for (let i = 0; i < sumCollection.length; i++) {
                let current = sumCollection[i];
                current = 1;
                // const productCard = current.querySelector('.product-card');
                // for (productCard ) {
                //     document.getElementById('sum').innerHTML = current;
                // };
                document.getElementById('sum').innerHTML = current;
                // if (target) {
                //     target = evt.target.closest('.button-plus');
                //     function addInBasket (current) {
                //         return current++;
                //     };
                // };
                // if (target) {
                //     target = evt.target.closest('.button-minus');
                //     function fromBasket (current) {
                //         return current--;
                //     };
                // };
            };

        case evt.target.closest('.button-plus'):
            function addInBasket (current) {
                return current++;
            };
            break;
        case evt.target.closest('.button-minus'):
            function fromBasket (current) {
                return current--;
            };
            break;
    }
}


catalog.addEventListener('click', Basket)














