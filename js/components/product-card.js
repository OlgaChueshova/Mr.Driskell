const productCard = document.querySelector('.categories__list');

function like(evt) {
    let target = evt.target.closest('.product-card__like--noactive');

    const likeCollection = document.querySelectorAll('.product-card__like--noactive');

    for (let i = 0; i < likeCollection.length; i++) {

        const activeLike = likeCollection[i];
    }

    target.classList.toggle('product-card__like--active');
}

productCard.addEventListener('click', like);


function addInBasket(evt) {
    let target = evt.target.closest('.product-card__inbasket');

    const inBasketCollection = document.querySelectorAll('.product-card__inbasket');

    for (let i = 0; i < inBasketCollection.length; i++) {

        const inBasket = inBasketCollection[i];
    }

    target.classList.add('product-card__inbasket--active');
}

productCard.addEventListener('click', addInBasket);



const inputCollection = document.querySelectorAll('.product-card__input');
const btnPlusCollection = document.querySelectorAll('.btn--plus');
const btnMinusColection = document.querySelectorAll('.btn--minus');
const formCollection = document.querySelectorAll('.product-card__form');

function selectProducts(evt) {
    evt.preventDefault()
    // const input = document.querySelector('.product-card__input');
    // const value = Number(input.value);

    // let target = evt.target.closest('.product-card__form');

    // const formCollection = document.querySelectorAll('.product-card__form');

    // for (let i = 0; i < formCollection.length; i++) {

    //     const form = formCollection[i];

    // }

    // form.addEventListener('click', function (evt) {


    const btnPlus = evt.target.closest('.btn--plus');
    const btnMinus = evt.target.closest('.btn--minus');
    const card = document.querySelector('.product-card__form');
    const input = card.querySelector('.product-card__input');
    const value = Number(input.value);


    if (btnPlus) {
        input.value = value + 1;
    }
    if (btnMinus) {
        if (value > 1) {
            input.value = value - 1;
        }
    }




    // const btnPlusCollection = document.querySelectorAll('.btn--plus');
    // const btnMinusColection = document.querySelectorAll('.btn--minus');

    // let target = evt.target.closest('.btn--plus, .btn--minus')


    // if (evt.target.closest('.btn--plus')) {
    //     for (let i = 0; i < btnPlusCollection.length; i++) {
    //         const btnPlus = btnPlusCollection[i];
    //     }
    //     btnPlus.addEventListener('click', function (evt) {
    //         input.value = value + 1;
    //     })
    // }
    // if (evt.target.closest('.btn--minus')) {
    //     for (let i = 0; i < btnMinusCollection.length; i++) {
    //         const btnMinus = btnMinusCollection[i];
    //     }
    //     btnMinus.addEventListener('click', function (evt) {
    //         input.value = value - 1;
    //     })
    // }

    // for (let i = 0; i < btnPlusCollection.length; i++) {
    //     const btnPlus = btnPlusCollection[i];
    // }


    // for (let i = 0; i < btnMinusCollection.length; i++) {
    //     const btnMinus = btnMinusCollection[i];
    // }

    // if (btnPlus) {

    //     btnPlus.addEventListener('click', function (evt) {
    //         input.value = value + 1;
    //     })
    // }

    // if (btnMinus) {

    //     btnMinus.addEventListener('click', function (evt) {
    //         input.value = value - 1;
    //     })
    // }

}

productCard.addEventListener('click', selectProducts);




