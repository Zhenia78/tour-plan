var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper__button_next',
        prevEl: '.swiper__button_prev',
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