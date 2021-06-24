const slides = document.querySelector('.slides').children;

let slideTime = 5000;
let index = 0;

function slideShow() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
    }

    if (index == slides.length-1) {
        index = 0
    }else{
        index++
    }

    slides[index].classList.add('active')

    setTimeout(() => {
        slideShow()
    }, slideTime);
}



window.onload = ()=>{
    slideShow()
}