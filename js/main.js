$(document).ready(function () {
  const burger = $(".burger");
  const navbarNav = $(".navbar__nav");
  const modalButton = $("[data-toggle=modal]");
  const closeButton = $(".modal__close");
  const modalOverlay = $(".modal__overlay");

  burger.on("click", function () {
    navbarNav.toggleClass("navbar__nav_visible");
    burger.toggleClass("active");
    $(".body").toggleClass("active");
  });


  modalButton.on("click", function () {
    var targetModal = $(this).attr("data-href");
    $(targetModal).addClass("modal__visible");
    $(".body").toggleClass("active");
  });
  closeButton.on("click", modalClose);
  modalOverlay.on("click", modalClose);
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      modalClose(event);
    }
  });


  function modalClose(event) {
    event.preventDefault();
    var modal = $(".modal");
    modal.removeClass("modal__visible");
    $(".body").removeClass("active");
  }

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

  $(".subscribe").validate({
    errorClass: "invalid-email",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Invalid format"
      }
    }
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

  $(".map").hover(function () {
      $(".map-iframe").attr({
        "src": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d75105.27815364326!2d-78.90883015362594!3d33.703366594221244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7da9d3c5b6a52dd!2sOcean%2022%20by%20Hilton%20Grand%20Vacations!5e0!3m2!1suk!2sua!4v1596564053856!5m2!1suk!2sua",
        "allowfullscreen": "",
        "aria-hidden": "false",
        "tabindex": "0"
      });
    },
    function () {
      $(".map-iframe").removeAttr("src", "allowfullscreen", "aria-hidden", "tabindex");
    });


});