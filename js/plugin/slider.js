let viewport = document.getElementById('viewport').offsetWidth
let slider = document.querySelector('.slider')
let leftSlide = document.querySelector('.left-slide')
let rightSlide = document.querySelector('.right-slide')
let slidePosition = 0

let nextSlide = () => {
    if (slidePosition < 3) {
        slidePosition++
    } else {
        slidePosition = 0
    }
    slider.style.left = -slidePosition * viewport + 'px'
}

let previousSlide = () => {
    if (slidePosition > 0) {
        slidePosition--
    } else {
        slidePosition = 3
    }
    slider.style.left = -slidePosition * viewport + 'px'
}

setInterval(nextSlide, 3000)

leftSlide.addEventListener('click', previousSlide)
rightSlide.addEventListener('click', nextSlide)

