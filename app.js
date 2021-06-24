const slides = document.querySelector('.slides').children;

const effectContainer = document.querySelector('.effect-slider')

let slideTime = 5000;
let slideTimeOut = 4000;
let sliedWidth = slides[0].offsetWidth;
let sliedHeight = slides[0].offsetHeight;
let row = 4;
let col = 4;
let index = 0;

function slideShow() {
    for (let i = 0; i < slides.length; i++) {
        effectHide()
        slides[i].classList.remove('active')
    }

    if (index == slides.length-1) {
        index = 0
    }else{
        index++
    }

    slides[index].classList.add('active')


    setTimeout(() => {
        effectShow()
    }, slideTimeOut);


    setTimeout(() => {
        slideShow()
    }, slideTime);
}


function effectSlider() {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const box = document.createElement('div')
            box.className = 'box'
            box.style.width = (sliedWidth / row) + 'px'
            box.style.height = (sliedHeight / col) + 'px'
            effectContainer.appendChild(box)
            effectHide()
        }
    }
    
}


function effectHide() {
    for (let i = 0; i < effectContainer.children.length; i++) {
        effectContainer.children[i].classList.remove('show')
        effectContainer.children[i].classList.add('hide')
    }
}

function effectShow() {
    for (let i = 0; i < effectContainer.children.length; i++) {
        effectContainer.children[i].classList.remove('hide')
        effectContainer.children[i].classList.add('show')
    }
}



window.onload = ()=>{
    effectSlider()
    slideShow()
}