// Get elements from DOM
const $carousel = document.querySelector(".carousel");

const $carouselArrowLeft = document.querySelector(".carousel-arrow-left");

const $carouselArrowRight = document.querySelector(".carousel-arrow-right");

const $heading = document.querySelector(".carousel-caption h1");

const $description = document.querySelector(".carousel-caption p");

// Vectors
const $images = [
    "banner-1.jpg",
    "banner-2.jpg",
    "banner-3.jpg",
    "banner-4.jpg"
];

const $headings = [
    "Virtual reality",
    "New model",
    "Good price",
    "More resources"
];

const $descriptions = [
    "The technology of the future",
    "Modern and comfortable design",
    "Various payment options",
    "New interactive features"
];

// Radios
const $radio1 = document.getElementById("radio-1");

const $radio2 = document.getElementById("radio-2");

const $radio3 = document.getElementById("radio-3");

const $radio4 = document.getElementById("radio-4");

// Vector index
let id = 0;

// Function to exchange data on the slide
function slide(id) {
    // Change image
    $carousel.style.backgroundImage = `url(../img/${$images[id]})`;
    // Change title
    $heading.innerHTML = $headings[id];
    // Change description
    $description.innerHTML = $descriptions[id];
}

// Left button function
$carouselArrowLeft.addEventListener("click", () => {
    id--;

    if(id < 0) {
        id = $images.length - 1;
    }

    slide(id);
    document.getElementById("radio-" + (id + 1)).checked = true;
});

// Right button function
$carouselArrowRight.addEventListener("click", () => {
    id++;
    
    if(id > $images.length - 1) {
        id = 0;
    }

    slide(id);
    document.getElementById("radio-" + (id + 1)).checked = true;
});

// Function to change the slide by clicking on the radio
function changeToRadio(radio) {
    // Vectors start at zero
    slide(radio - 1);
}

$radio1.addEventListener("click", () => (changeToRadio(1)));
$radio2.addEventListener("click", () => (changeToRadio(2)));
$radio3.addEventListener("click", () => (changeToRadio(3)));
$radio4.addEventListener("click", () => (changeToRadio(4)));