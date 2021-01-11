// Photo slider plugin

// Generation
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
                
            </div>
            `)
    document.body.insertBefore(sliderWindow, parentForSlider.nextSibling)
    return sliderWindow
}


// Left and right buttons, interval and other settings
function settings() {
    sliderWorking()

    let viewport = document.getElementById('viewport').offsetWidth
    let slider = document.querySelector('.slider')
    let slidePosition = 0

    let nextSlide = () => {
        if (slidePosition < sliderSettings.image.length - 1) {
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
            slidePosition = sliderSettings.image.length - 1
        }

        slider.style.left = -slidePosition * viewport + 'px'
    }

    let sliderInterval = setInterval(nextSlide, sliderSettings.interval)

    let leftSlide = document.querySelector('.leftSlide')
    let rightSlide = document.querySelector('.rightSlide')

    leftSlide.addEventListener('click', () => {
        previousSlide()
        clearInterval(sliderInterval)
    })
    rightSlide.addEventListener('click', () => {
        nextSlide()
        clearInterval(sliderInterval)
    })
}


// For settings.js
function worked() {
    if (sliderSettings.working === true) {
        settings()
    } else {
        background()
    }
    if (sliderSettings.controlButton === false) {
        document.querySelector('.leftSlide').remove()
        document.querySelector('.rightSlide').remove()
    }
}

worked()

// Images for the slider are loaded from settings.js
function images() {
    if (sliderSettings.working === true) {
        let slider = document.querySelector('.slider')
        slider.style.cssText = `width: calc(100% * ${sliderSettings.image.length}); transition: ${sliderSettings.speed};`
        let image = []
        for (i = 0; i < sliderSettings.image.length; i++) {
            image[i] = `<div class="slide"><img src="${sliderSettings.image[i]}"></div>`
            console.table(image)
            slider.innerHTML = image.join('')
        }
    }
}

images()









