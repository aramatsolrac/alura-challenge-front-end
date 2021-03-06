const navMenu = document.querySelector(".nav-menu");
const hamburguerBtn = document.querySelector(".header__mobile__menu");
const barMenu = document.getElementById("bar-menu");
const closeMenu = document.getElementById("close-menu");

const searchBar = document.getElementById("mobile-search-bar");
const searchIcon = document.getElementById("search-icon");
const closeSearch = document.getElementById("close-search");
const logo = document.getElementById("logo-mobile");

//hamburguer menu
let showMenu = false;

hamburguerBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    if (!showMenu) {
        navMenu.classList.toggle("active");
        barMenu.style.display = "none";
        searchIcon.style.display = "none";
        closeMenu.style.display = "flex";
        showMenu = true;
    } else {
        navMenu.classList.remove("active");
        closeMenu.style.display = "none";
        searchIcon.style.display = "flex";
        barMenu.style.display = "flex";
        showMenu = false;
    }
};

//search bar
let showBar = false;

searchIcon.addEventListener("click", mobileSearch);
closeSearch.addEventListener("click", mobileSearch);

function mobileSearch() {
    if (!showBar) {
        searchBar.style.display = "flex";
        closeSearch.style.display = "flex";
        searchIcon.style.display = "none";
        logo.style.display = "none";
        barMenu.style.display = "none";
        showBar = true;
    } else {
        searchBar.style.display = "none";
        closeSearch.style.display = "none";
        searchIcon.style.display = "flex";
        logo.style.display = "flex";
        barMenu.style.display = "flex";
        showBar = false;
    }
};