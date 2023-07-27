/* --------------------------------- HEADER --------------------------------- */

const imageFond1 = new Image();
imageFond1.src = './assets/img/header-diapo/gîte.webp';
const imageFond2 = new Image();
imageFond2.src = './assets/img/header-diapo/jardin-soleil.webp';
const imageFond3 = new Image();
imageFond3.src = './assets/img/header-diapo/chambre-mezzanine.webp';
const imageFond4 = new Image();
imageFond4.src = './assets/img/header-diapo/mezzanine.webp';
const imageFond5 = new Image();
imageFond5.src = './assets/img/header-diapo/salon.webp';
const header = document.querySelector("header");
let headerImageActive = 0;
window.addEventListener("load", () => {
    setInterval(() => {
        header.classList.remove("bg" + headerImageActive.toString());
        if (headerImageActive === 4) {
            headerImageActive = 0;
        } else {
            headerImageActive++;
        };
        header.classList.add("bg" + headerImageActive.toString());
    }, 5000);
});

/* -------------------------------- CAROUSEL -------------------------------- */

const imageFond6 = new Image();
imageFond6.src = './assets/img/carousel/salle-à-manger.JPG';
const imageFond7 = new Image();
imageFond7.src = './assets/img/carousel/cuisine.jpg';
const imageFond8 = new Image();
imageFond8.src = './assets/img/carousel/chambre-rez-de-chausée.jpg';
const imageFond9 = new Image();
imageFond9.src = './assets/img/carousel/salon.jpg';
const imageFond10 = new Image();
imageFond10.src = './assets/img/carousel/salle-eau.jpg';
const imageFond11 = new Image();
imageFond11.src = './assets/img/carousel/mezzanine.jpg';
const imageFond12 = new Image();
imageFond12.src = './assets/img/carousel/chambre-mezzanine1.jpg';
const imageFond13 = new Image();
imageFond13.src = './assets/img/carousel/chambre-mezzanine2.JPG';
const imageFond14 = new Image();
imageFond14.src = './assets/img/carousel/jardin.JPG';
const imageFond15 = new Image();
imageFond15.src = './assets/img/carousel/terrasse.JPG';

const carouselImages = document.querySelectorAll('.carousel-img');
const slideLength = carouselImages.length;
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let imageStep = 0;


const nextSlide = () => {
    carouselImages[imageStep].classList.remove('active');

    if(imageStep < slideLength - 1) {
        imageStep++;
    } else {
        imageStep = 0;
    };

    carouselImages[imageStep].classList.add('active');
};
const previousSlide = () => {
    carouselImages[imageStep].classList.remove('active');

    if(imageStep > 0){
        imageStep--;
    } else {
        imageStep = slideLength - 1;
    };

    carouselImages[imageStep].classList.add('active');
};


arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', previousSlide);