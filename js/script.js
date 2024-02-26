// Get elements from DOM
const $carousel = document.querySelector(".carousel");

const $carouselArrowLeft = document.querySelector(".carousel-arrow-left");

const $carouselArrowRight = document.querySelector(".carousel-arrow-right");

const $heading = document.querySelector(".carousel-caption h1");

const $description = document.querySelector(".carousel-caption p");

// Vectors with the data of each slide
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

// Radios to show the current slide
const $radio1 = document.getElementById("radio-1");
const $radio2 = document.getElementById("radio-2");
const $radio3 = document.getElementById("radio-3");
const $radio4 = document.getElementById("radio-4");

// Vector index
let id = 0;

// Function to change slide data
function changeDataSlide(id) {
    // Change image
    $carousel.style.backgroundImage = `url(../img/${$images[id]})`;
    // Change title
    $heading.innerHTML = $headings[id];
    // Change description
    $description.innerHTML = $descriptions[id];
}

// Function to change the slide by clicking on the left arrow
$carouselArrowLeft.addEventListener("click", () => {
    id--;

    if(id < 0) {
        id = $images.length - 1;
    }

    changeDataSlide(id);
    document.getElementById("radio-" + (id + 1)).checked = true;
});

// Function to change the slide by clicking on the right arrow
$carouselArrowRight.addEventListener("click", () => {
    id++;
    
    if(id > $images.length - 1) {
        id = 0;
    }

    changeDataSlide(id);
    document.getElementById("radio-" + (id + 1)).checked = true;
});

// Function to change the slide by clicking on the radio
function changeByRadio(radio) {
    // Updating the id
    id = radio - 1;
    
    changeDataSlide(id);
}

$radio1.addEventListener("click", () => { changeByRadio(1) });
$radio2.addEventListener("click", () => { changeByRadio(2) });
$radio3.addEventListener("click", () => { changeByRadio(3) });
$radio4.addEventListener("click", () => { changeByRadio(4) });