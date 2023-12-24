const burgerCheckbox = document.getElementById("burger-checkbox");
const menuItems = document.querySelector(".slide-menu");
const links = menuItems.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const mainContent = document.querySelector(".main");
mainContent.style.display = "block";

function closeMenu() {
  menuItems.style.display = "none";
  closeBtn.style.display = "none";
  mainContent.style.display = "block";
}

const closeBtn = document.querySelector(".slide-close");
closeBtn.addEventListener("click", closeMenu);
burgerCheckbox.addEventListener("change", function () {
  const style = menuItems.style.display;
  console.log(mainContent.style.display);
  if (!style || style == "none") {
    menuItems.style.display = "flex";
    closeBtn.style.display = "flex";
    mainContent.style.display = "none";
  } else {
    menuItems.style.display = "none";
    closeBtn.style.display = "none";
    mainContent.style.display = "block";
  }
});
