$('.newsletter').parallax({
    imageSrc: 'img/newsletter-bg.jpg',
    position: 'center',
    speed: 0.7,
    androidFix: false,
    iosFix: false
});

var hotelSwiper = new Swiper('.hotel-swiper__container', {
    // Optional parameters
    loop: true,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.hotel-swiper__button_next',
        prevEl: '.hotel-swiper__button_prev',
    },
});

var reviewsSwiper = new Swiper('.reviews-swiper', {
    // Optional parameters
    loop: true,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviews-swiper__button_next',
        prevEl: '.reviews-swiper__button_prev',
    },
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [25.78568392, -80.19079603],
        zoom: 10
    });
    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [25.78568392, -80.19079603] // координаты точки
        }
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
}