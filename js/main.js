$(document).ready(function () {
  const burger = $(".burger");
  const navbarNav = $(".navbar__nav");
  const modalButton = $("[data-toggle=modal]");
  const closeButton = $(".modal__close");
  const modalOverlay = $(".modal__overlay");

  burger.on("click", function () {
    navbarNav.toggleClass("navbar__nav_visible");
    burger.toggleClass("active");
    document.body.toggleClass("active");
  });


  modalButton.on("click", modalOpen);
  closeButton.on("click", modalClose);
  modalOverlay.on("click", modalClose);
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      modalClose(event);
    }
  });

  function modalOpen() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).addClass("modal__visible");
  }

  function modalClose(event) {
    event.preventDefault();
    var modal = $(".modal");
    modal.removeClass("modal__visible");
  }

  $('.newsletter').parallax({
    imageSrc: 'img/newsletter-bg.jpg',
    speed: 0.4
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: "Please specify your name",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: "Please specify your phone"
      }
    });
  });

  $('.phone-input').mask('+0(00) 0000-0000');


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

});