function sliderWorking() {
    let sliderWindow = document.createElement('div')
    let parentForSlider = document.querySelector('.flex-container')
    sliderWindow.id = 'viewport'
    sliderWindow.insertAdjacentHTML('afterbegin', `
            <div class="slider-nav">
            <div class="navigation">
                <a class="leftSlide"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="darkgray" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg></a>
                <a class="rightSlide"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="darkgray" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg></a>
                </div>
            </div>
            <div class="slider" style="left: 0px">
                <div class="slide"><img src="img/carousel/1.jpg" alt=""></div>
                <div class="slide"><img src="img/carousel/2.jpg" alt=""></div>
                <div class="slide"><img src="img/carousel/3.jpg" alt=""></div>
                <div class="slide"><img src="img/carousel/4.jpg" alt=""></div>
            </div>
            `)
    document.body.insertBefore(sliderWindow, parentForSlider.nextSibling)
    return sliderWindow
}


function settings() {
    sliderWorking()

    let viewport = document.getElementById('viewport').offsetWidth
    let slider = document.querySelector('.slider')
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

    let leftSlide = document.querySelector('.leftSlide')
    let rightSlide = document.querySelector('.rightSlide')

    leftSlide.addEventListener('click', previousSlide)
    rightSlide.addEventListener('click', nextSlide)
}

function worked() {
    if (sliderSettings.working === true) {
        return settings()
    }
}

worked()









