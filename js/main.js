let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "images/dark.svg";
  } else {
    this.firstElementChild.src = "images/light.svg";
  }
  document.body.classList.toggle("light");
});

window.addEventListener("scroll", function () {
  toggleBacktop();
  changeNavColor();
  shrink();
});

let backtop = document.getElementById("backtop");
let navBgColor = document.getElementById("nav");
let navbar = document.getElementById("nav");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

function shrink() {
  if (document.documentElement.scrollTop > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
function changeNavColor() {
  if (document.documentElement.scrollTop > 920) {
    navBgColor.classList.add("nav-color-section-1");
  } else {
    navBgColor.classList.remove("nav-color-section-1");
  }

  if (document.documentElement.scrollTop > 1450) {
    navBgColor.classList.add("nav-color-section-2");
  } else {
    navBgColor.classList.remove("nav-color-section-2");
  }

  if (document.documentElement.scrollTop > 3550) {
    navBgColor.classList.add("nav-color-section-3");
  } else {
    navBgColor.classList.remove("nav-color-section-3");
  }
}

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
