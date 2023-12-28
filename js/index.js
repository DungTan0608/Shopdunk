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


// Lấy tất cả các thẻ div có class "ft-title"
const ftTitles = document.querySelectorAll(".ft-title");

// Lặp qua các thẻ div có class "ft-title"
ftTitles.forEach(ftTitle => {
  // Thêm sự kiện click cho thẻ div
  ftTitle.addEventListener("click", function() {
    // Lấy thẻ ul có class "list" bên trong thẻ div này
    const list = ftTitle.querySelector(".list");

    // Kiểm tra trạng thái hiện tại của thẻ ul
    if (list.classList.contains("d-none")) {
      // Nếu thẻ ul đang bị ẩn
      // Kiểm tra kích thước màn hình
      if (window.innerWidth > 769) {
        // Nếu màn hình lớn hơn 769 px
        // Ẩn thẻ ul
        list.classList.add("d-none");
      } else {
        // Hiển thị thẻ ul
        list.classList.remove("d-none");
      }
    } else {
      // Nếu thẻ ul đang được hiển thị
      // Kiểm tra kích thước màn hình
      if (window.innerWidth > 769) {
        // Nếu màn hình lớn hơn 769 px
        // Reset trạng thái ban đầu
        list.classList.remove("d-none");
      } else {
        // Ẩn thẻ ul
        list.classList.add("d-none");
      }
    }
  });
});