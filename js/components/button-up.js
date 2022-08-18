const buttonUp = document.querySelector('.subscripcion__button-up--link');

function goUp () {
    buttonUp.style.transition='5s';
}

buttonUp.addEventListener('click', goUp);
