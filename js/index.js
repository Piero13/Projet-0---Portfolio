// viewer

let i = 0; // current slide
let j = 6; // total slides

const images = document.querySelectorAll(".projects__viewer__img img");
const dots = document.querySelectorAll(".projects__viewer__dots button");

function indicator(num) {
    dots.forEach(function(dot) {
        dot.style.backgroundColor = "#d9ecf2";
    });
    document.querySelector(".projects__viewer__dots .dot:nth-child(" + num + ")").style.backgroundColor = "#E04F5F"
};

function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
};

function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
};

function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i -1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
};

// ham-menu
let hamMenuIcon = document.getElementById("ham-menu");
let navMenuBar = document.getElementById("nav-bar");
let navLinks = navMenuBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
    navMenuBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
});

navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navMenuBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
    });
});