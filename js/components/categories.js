
function callback(target, callback) {
    function handleEvent(evt) {
        if (!target.contains(evt.target)) {
            callback();
        }
    }
    document.addEventListener('click', handleEvent);
}


const nav = document.querySelector('.categories');
const linkCollection = document.querySelectorAll('.categories__list--item');
const catalogCollection = document.querySelectorAll('.categories__catalog--item');

function addCatalog(evt) {
    const target = evt.target.closest('.categories__list--item');
    if (target) {
        target.classList.add('categories__list--item-active');
        const isActive = target.classList.contains('categories__list--item-active');
        function showCatalog {
            target.querySelector('.categories__catalog--item'),
                opacity: isActive ? 1 : 0,
                    visibility: isActive ? visible : hidden,

                        useClickOtherLink(target, function () {
                            target.classList.remove('categories__list--item-active');
                            opacity: isActive ? 0 : 1,
                            visibility: isActive ? hidden : visible,
                        });
        }

    }


}





nav.addEventListener('click', addCatalog);

