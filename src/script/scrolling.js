import AOS from "aos";

// smooth scrolling all section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//burger menu
const navMenu = document.querySelector(".header__list");
const navBurger = document.querySelector(".nav__burger");
navBurger.addEventListener("click", showMenuBurgerOnClick);

function showMenuBurgerOnClick() {
  navMenu.classList.toggle("showNav");
  changeCloseBurger();
}

function changeCloseBurger() {
  if (navMenu.classList.contains("showNav")) {
    navBurger.firstElementChild.setAttribute(
      "src",
      "./image/svg/closeBurger.svg"
    );
  } else {
    navBurger.firstElementChild.setAttribute("src", "./image/svg/burger.svg");
  }
}

AOS.init();
