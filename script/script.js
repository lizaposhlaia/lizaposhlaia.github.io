
const elSlider = document.querySelectorAll('.js-frame__img');

let slideNumNow = 0;

let slideNumLast = 1;


function sliderImg() {

    elSlider[slideNumNow].classList.remove('frame__img--opUnvisible');

    elSlider[slideNumLast].classList.add('frame__img--opUnvisible');

    slideNumLast = slideNumNow;

    slideNumNow++;

    if ( slideNumNow > 5 ) {

        slideNumNow = 0;

    }

}



function draw() {

    sliderImg();

}



let interval = setInterval( draw, 2500 );