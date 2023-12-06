document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".toggle");
  var headerMenuMobile = document.querySelector(".menu-toggle-mb");

  if (menuToggle && headerMenuMobile) {
    menuToggle.addEventListener("click", function () {

      if (window.innerWidth <= 1000) {
        headerMenuMobile.style.display =
          headerMenuMobile.style.display === "none" ||
          headerMenuMobile.style.display === ""
            ? "block"
            : "none";
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1000) {
        headerMenuMobile.style.display = "none";
      }
    });
  }
});
