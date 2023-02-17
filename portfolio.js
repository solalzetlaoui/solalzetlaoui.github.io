window.onscroll = function() {
  let headerMenu = document.querySelector(".header-menu");
  let headerMenuItems = document.querySelectorAll(".header-menu-item");

  if (window.pageYOffset > 100) {
    headerMenu.style.backgroundColor = "rgba(255, 255, 255, 1)";
    headerMenuItems.forEach(function(item) {
      item.style.color = "black";
    });
  } else {
    headerMenu.style.backgroundColor = "rgba(0, 0, 0, 0)";
    headerMenuItems.forEach(function(item) {
      item.style.color = "white";
    });
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var containerA = document.querySelector('.containerA');
  containerA.style.opacity = 1;
});

