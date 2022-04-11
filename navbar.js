$(function () {
  $(".navbar-burger").on("click", function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-start").toggleClass("has-text-centered");
    $(".social").toggleClass("is-justify-content-center");
  });
});
