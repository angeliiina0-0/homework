(function () {
    // модалка
    const modalBtn = document.querySelectorAll('.button-block')
    const modal = document.querySelector('.modal')


    modal.addEventListener('click', closeModal)

    modalBtn.forEach(function (button) {
        button.addEventListener('click', openModal)
    })


    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {

        e.preventDefault()

        const target = e.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    // слайдер-примеры

    const swiperProcedure = new Swiper('.procedure__slider', {
        navigation: {
            nextEl: '.procedure__next',
            prevEl: '.procedure__prev',
        },
    });

    // Аккордеон

    const accordionLists = Array.from(document.querySelectorAll(".accordion__tab-content"));

    accordionLists.forEach((accordion) => {
        accordion.addEventListener("click", accordionHandler);
    });

    function accordionHandler(e) {
        e.preventDefault();
        let currentAcordion = e.target.closest(".accordion__tab-content");
        let currentContent = e.target.nextElementSibling;

        currentAcordion.classList.toggle("accordion__tab-info--opened");
        
        if (currentAcordion.classList.contains("accordion__tab-info--opened")) {
            currentContent.style.maxHeight = currentContent.scrollHeight + "px"
        } else {
            currentContent.style.maxHeight = 0;
        }
    }

    // Слайдер-отзывы
    new Swiper('.reviews__slider', {

        spaceBetween: 15,
        slidesPerView: 4,

        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
    });
})()